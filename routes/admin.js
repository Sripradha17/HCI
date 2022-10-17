const express = require('express');
const router = express.Router();
const data = require('../data');
const bcrypt = require('bcrypt');
const xss = require('xss')
const userData = data.users;
const hotelData = data.hotels;
router.get('/', async (req, res) => {
    if (req.session.user) {
        if (req.session.user.roleId != 1) {
            return res.redirect("/");
        }
        else {
            let data = {};
            let ulist = await userData.getAllUsers();
            if (ulist != null) {
                data.totalUser=ulist.length;
                data.totalBUser=ulist.filter(function (item) {
                    return item.roleId == 2;
                }).length;
                data.totalPendingBUser=ulist.filter(function (item) {
                    return item.roleId == 2 && item.userStatus==1;
                }).length;   
                data.totalActiveUser=ulist.filter(function (item) {
                    return item.userStatus==2;
                }).length;                
            }
            let hlist = await hotelData.getAllHotels();
            if (hlist != null) {
                data.totalHotel=hlist.length;
                data.totalApprovedHotel=hlist.filter(function (item) {
                    return item.status == 2;
                }).length;
                data.totalPendingHotel=hlist.filter(function (item) {
                    return item.status == 3;
                }).length;                
            }
            return res.render('templates/admin/dashboard', {
                authenticated: req.session.user ? true : false,
                user: req.session.user,
                title: 'Dashboard',
                dashboardData: data,
            });
        }
    }
    else {
        return res.redirect("/login");
    }
});
router.get('/userlist', async (req, res) => {
    //validation check remaining

    if (req.session.user) {
        if (req.session.user.roleId != 1) {
            return res.redirect("/");
        }
    }
    else {
        return res.redirect("/login");
    }
    const users = await userData.getAllUsers();
    users.forEach(async (user) => {
        user.RoleName = user.roleId == 1 ? "admin" : user.roleId == 2 ? "Bussiness User" : "Registered User"
        user.viewApprovedButton = user.roleId == 2 && user.userStatus == 1 ? true : false;
        user.viewBlockedButton = user.roleId != 1 && user.userStatus != 3 ? true : false;
        user.viewUnblockedButton = user.roleId != 1 && user.userStatus == 3 ? true : false;
        user.Status = user.userStatus == 1 ? "Pending" : user.userStatus == 2 ? "Active" : "blocked";
        user.statusClass = user.userStatus == 1 ? "primary" : user.userStatus == 2 ? "success" : "danger";
    });
    let error_message = req.session.error_message;
    let success_message = req.session.success_message;
    delete req.session.success_message;
    delete req.session.error_message;
    return res.render('templates/admin/userList', {
        authenticated: req.session.user ? true : false,
        user: req.session.user,
        title: 'User List',
        users: users,
        error_message: error_message,
        success_message: success_message
    });

});
router.get('/userlist/approved/:id', async (req, res) => {
    let id = xss(req.params.id.trim());
    let error = undefined;
    if (req.session.user) {
        if (req.session.user.roleId != 1) {
            return res.redirect("/");
        }
    }
    else {
        return res.redirect("/login");
    }

    //validation check remaining
    try {
        const user = await userData.getUserById(id);
        const updateUser = await userData.approveUser(id);
        if (updateUser) {
            req.session.success_message = "Successfully approved user."
            return res.redirect("/admin/userlist");

        }
        else {
            req.session.error_message = "user could not be approved."
            return res.redirect("/admin/userlist");
        }

    }
    catch (e) {
        error = e;
        req.session.error_message = e
        return res.redirect("/admin/userlist");
    }

});
router.get('/userlist/blocked/:id', async (req, res) => {
    //validation check remaining
    let id = xss(req.params.id.trim());
    let error = undefined;
    if (req.session.user) {
        if (req.session.user.roleId != 1) {
            return res.redirect("/");
        }
    }
    else {
        return res.redirect("/login");
    }

    //validation check remaining
    try {
        const user = await userData.getUserById(id);
        const updateUser = await userData.blockUser(id);
        if (updateUser) {
            req.session.success_message = "Successfully blocked user."
            return res.redirect("/admin/userlist");

        }
        else {
            req.session.error_message = "user could not be blocked."
            return res.redirect("/admin/userlist");
        }

    }
    catch (e) {
        error = e;
        req.session.error_message = e
        return res.redirect("/admin/userlist");
    }


});
router.get('/userlist/unblocked/:id', async (req, res) => {
    //validation check remaining
    let id = xss(req.params.id.trim());
    let error = undefined;

    if (req.session.user) {
        if (req.session.user.roleId != 1) {
            return res.redirect("/");
        }
    }
    else {
        return res.redirect("/login");
    }

    //validation check remaining
    try {
        const user = await userData.getUserById(id);
        const updateUser = await userData.activeUser(id);
        if (updateUser) {
            req.session.success_message = "Successfully activated user."
            return res.redirect("/admin/userlist");

        }
        else {
            req.session.error_message = "user could not be activated."
            return res.redirect("/admin/userlist");
        }

    }
    catch (e) {
        error = e;
        req.session.error_message = e
        return res.redirect("/admin/userlist");
    }


});
// hotels

router.get('/hotel', async (req, res) => {
    //validation check remaining

    // if (req.session.user != undefined && req.session.user.roleId == 1) {
    //     return res.redirect("/users");
    // }
    // else {
    //     return res.redirect("../hotels");
    // }


    if (req.session.user) {
        if (req.session.user.roleId != 1) {
            return res.redirect("/");
        }
    }
    else {
        return res.redirect("/login");
    }

    const hotels = await hotelData.getAllHotels();
    hotels.forEach(async (hotel) => {
        hotel.Status = hotel.status == 1 ? "Pending" : hotel.status == 2 ? "Active" : "Rejected";
        hotel.statusClass = hotel.status == 1 ? "primary" : hotel.status == 2 ? "success" : "danger";
    });

    return res.render('templates/admin/hotelList', {
        authenticated: req.session.user ? true : false,
        user: req.session.user,
        title: 'Hotel List',
        hotels: hotels,
    });

});
router.get('/hotel/:id', async (req, res) => {
    //validation check remaining

    // if (req.session.user != undefined && req.session.user.roleId == 1) {
    //     return res.redirect("/users");
    // }
    // else {
    //     return res.redirect("../hotels");
    // }
    let id = xss(req.params.id.trim());

    if (req.session.user) {
        if (req.session.user.roleId != 1) {
            return res.redirect("/");
        }
    }
    else {
        return res.redirect("/login");
    }

    try {

        const hotel = await hotelData.getHotelById(id);

        hotel.viewApprovedButton = hotel.status != 2 ? true : false;
        hotel.viewRejectButton = hotel.status != 3 ? true : false;
        hotel.Status = hotel.status == 1 ? "Pending" : hotel.status == 2 ? "Active" : "Rejected";
        hotel.statusClass = hotel.status == 1 ? "primary" : hotel.status == 2 ? "success" : "danger";

        let error_message = req.session.error_message;
        let success_message = req.session.success_message;
        delete req.session.success_message;
        delete req.session.error_message;
        return res.render('templates/admin/hotelDetail', {
            authenticated: req.session.user ? true : false,
            user: req.session.user,
            title: 'Hotel List',
            hotel: hotel,
            error_message: error_message,
            success_message: success_message
        });
    }
    catch (error) {
        return res.redirect("/admin/hotel");
    }
});
router.get('/hotel/detail/approved/:id', async (req, res) => {
    let id = xss(req.params.id.trim());
    let error = undefined;
    if (req.session.user) {
        if (req.session.user.roleId != 1) {
            return res.redirect("/");
        }
    }
    else {
        return res.redirect("/login");
    }

    //validation check remaining
    try {
        const hotel = await hotelData.getHotelById(id);
        const updateHotel = await hotelData.approveHotel(id);
        if (updateHotel) {
            req.session.success_message = "Successfully approved Hotel."
            return res.redirect("/admin/hotel/" + id);

        }
        else {
            req.session.error_message = "Hotel could not be approved."
            return res.redirect("/admin/hotel/" + id);
        }

    }
    catch (e) {
        error = e;
        req.session.error_message = e
        return res.redirect("/admin/hotel/" + id);
    }

});
router.get('/hotel/detail/reject/:id', async (req, res) => {
    //validation check remaining
    if (req.session.user) {
        if (req.session.user.roleId != 1) {
            return res.redirect("/");
        }
    }
    else {
        return res.redirect("/login");
    }

    let id = xss(req.params.id.trim());
    let error = undefined;

    //validation check remaining
    try {
        const hotel = await hotelData.getHotelById(id);
        const updateHotel = await hotelData.rejectHotel(id);
        if (updateHotel) {
            req.session.success_message = "Successfully rejected hotel."
            return res.redirect("/admin/hotel/" + id);

        }
        else {
            req.session.error_message = "Hotel could not be rejected."
            return res.redirect("/admin/hotel/" + id);
        }

    }
    catch (e) {
        error = e;
        req.session.error_message = e
        return res.redirect("/admin/hotel/" + id);
    }


});
// Get login page
router.get('/login', async (req, res) => {
    if (req.session.user) {
        res.redirect('/hotels');
    } else {
        res.render('templates/users/login', {
            title: 'Log In',
            authenticated: false,
            partial: 'login-script'
        });
    }
});

// Post login
router.post('/login', async (req, res) => {
    const username = xss(req.body.username.trim())
    const password = xss(req.body.password.trim())
    let data = {};
    data.success = true;
    data.msg = "success";
    return res.json(data);

});
router.get('/Signup', async (req, res) => {
    if (req.session.user) {
        res.redirect('/hotels');
    } else {
        res.render('templates/users/Signup', {
            title: 'Log In',
            authenticated: false,
            partial: 'Signup-script'
        });
    }
});

// Post login
router.post('/Signup', async (req, res) => {
    const firstname = xss(req.body.firstname.trim())
    const lastname = xss(req.body.lastname.trim())
    const email = xss(req.body.email.trim())
    const username = xss(req.body.username.trim())
    const password = xss(req.body.password.trim())
    let data = {};
    data.success = true;
    data.msg = "success";
    return res.json(data);

});
module.exports = router;
