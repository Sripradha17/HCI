const express = require('express');
const router = express.Router();
const data = require('../data');
const bcrypt = require('bcrypt');
const xss = require('xss')
const userData = data.users;
const hotelData = data.hotels;
const reviewData = data.reviews;
const validation = require('../data/validation');
const multer = require('multer');
const path = require("path")
let allCategories = ['Chain hotels', 'Hotels', 'Motels', 'Resorts', 'Inns'];
allCategories.sort();
let allOnSiteServices = ['Free Breakfast', 'Pool', 'SPA', 'Car Parking', 'WiFi', 'AC', 'GYM', 'PET FRIENDLY', 'Family friendly', 'Hottub'
];
allOnSiteServices.sort();
// SET STORAGE
// var upload = multer({ dest: "Upload_folder_name" })
// If you do not want to use diskStorage then uncomment it

var storage = multer.diskStorage({
    destination: function (req, file, cb) {

        // Uploads is the Upload_folder_name
        cb(null, "public/uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
})

// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 5 * 1000 * 1000;

var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {

        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);

        var extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }

        cb("Error: File upload only supports the "
            + "following filetypes - " + filetypes);
    }

    // mypic is the name of file attribute
});
const uploadFiles = upload.array("images", 5);
router.get('/', async (req, res) => {

    //validation check remaining

    // if (req.session.user != undefined && req.session.user.roleId == 1) {
    //     return res.redirect("/users");
    // }
    // else {
    //     return res.redirect("../hotels");
    // }
    const hotels = await hotelData.getAllActiveHotels();
    hotels.forEach(async (hotel) => {
        hotel.showRating = hotel.rating > 0 ? true : false;
        hotel.ratingclass = hotel.rating >= 3.5 ? "success" : hotel.rating > 2 ? "warning" : "danger";
        hotel.showEdit = req.session.user ? hotel.addedBy == req.session.user._id ? true : false : false
    });

    return res.render('templates/hotels/hotels', {
        authenticated: req.session.user ? true : false,
        user: req.session.user,
        title: 'Hotels',
        hotels: hotels
    });

});
router.post('/', async (req, res) => {
    const category = xss(req.body.header_category.trim())
    const search_term = xss(req.body.search_term.trim())
    //validation check remaining

    // if (req.session.user != undefined && req.session.user.roleId == 1) {
    //     return res.redirect("/users");
    // }
    // else {
    //     return res.redirect("../hotels");
    // }

    const hotels = await hotelData.getAllActiveHotels_Search(category, search_term);
    hotels.forEach(async (hotel) => {
        hotel.showRating = hotel.rating > 0 ? true : false;
        hotel.ratingclass = hotel.rating >= 3.5 ? "success" : hotel.rating > 2 ? "warning" : "danger";
        hotel.showEdit = req.session.user ? hotel.addedBy == req.session.user._id ? true : false : false

    });

    return res.render('templates/hotels/hotels', {
        authenticated: req.session.user ? true : false,
        user: req.session.user,
        title: 'Hotels',
        hotels: hotels
    });

});

router.get('/addHotel', async (req, res) => {

    //validation check remaining

    if (req.session.user != undefined && req.session.user.roleId == 2) {
        return res.render('templates/hotels/addHotel', {
            authenticated: req.session.user ? true : false,
            user: req.session.user,
            title: 'Add Hotel',
            categories: allCategories,
            onSiteServices: allOnSiteServices,
            partial: 'hotel-script'

        });

    }
    else {
        return res.redirect("../hotels");
    }
});

router.post('/addHotel', upload.array('images'), async (req, res) => {
    let data = {};

    if (!req.session.user || req.session.user.roleId != 2) {
        data.success = false;
        data.msg = "something going wrong";
        return res.json(data);
    }
    const name = xss(req.body.name.trim());
    const address = xss(req.body.address.trim());
    const city = xss(req.body.city.trim());
    const state = xss(req.body.state.trim());
    const category = xss(req.body.category.trim());
    const zipCode = xss(req.body.zipCode.trim());
    const onSiteServices = xss(req.body.onSiteServices);
    const priceRange = xss(req.body.priceRange.trim());
    const latitude = xss(req.body.latitude.trim());
    const longtitude = xss(req.body.longtitude.trim());
    const userId = req.session.user._id;

    let images = [];
    req.files.forEach(element => {
        images.push(element.filename);
    });

    try {
        await validation.checkhotelname(name);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkhoteladdress(address);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkcityname(city);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkstatename(state);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkcategory(category);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkzipcode(zipCode);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkonSiteServices(onSiteServices.split(','));
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkpriceRange(priceRange);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checklatitude(latitude);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    } try {
        await validation.checklongtitude(longtitude);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkimage(images);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }

    try {
        uploadFiles(req, res, async function (err) {
            if (err) {

                // ERROR occured (here it can be occured due
                // to uploading image of size greater than
                // 1MB or uploading different file type)
                data.success = false;
                data.msg = msg;
                return res.json(data);
            }
            else {

                // SUCCESS, image successfully uploaded

                const responseData = await hotelData.addHotel(name, address, city, state, category, zipCode, onSiteServices.split(','), priceRange, latitude, longtitude, userId, images, 1);
                if (responseData) {
                    data.success = true;
                    data.msg = "Successfully added your hotel and under review.";
                    return res.json(data);
                }
                else {
                    data.success = false;
                    data.msg = msg;
                    return res.json(data);
                }
            }
        });
    }
    catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }

    //validation check remaining

    // if (req.session.user != undefined && req.session.user.roleId == 1) {
    //     return res.redirect("/users");
    // }
    // else {
    //     return res.redirect("../hotels");
    // }


});
router.get('/edit/:id', async (req, res) => {

    //validation check remaining
    let id = xss(req.params.id.trim());
    if (id === '') {
        return res.render('errors/404', {
            authenticated: req.session.user ? true : false,
            user: req.session.user,
            title: '404 Page not found',
        });

    }
    try {
        let hotel = await hotelData.getHotelById(id);
        if (hotel.status == 2) {
            if (hotel.addedBy != req.session.user._id) {
                return res.render('errors/404', {
                    authenticated: req.session.user ? true : false,
                    user: req.session.user,
                    title: '404 Page not found',
                });
            }
            return res.render('templates/hotels/editHotel', {
                authenticated: req.session.user ? true : false,
                user: req.session.user,
                title: 'Edit Hotel',
                hotel: hotel,
                partial: 'hotel-script',
                categories: allCategories,
                onSiteServices: allOnSiteServices,

            });
        }
        else {
            return res.render('errors/404', {
                authenticated: req.session.user ? true : false,
                user: req.session.user,
                title: '404 Page not found',
            });


        }
    }
    catch (error) {
        return res.render('errors/404', {
            authenticated: req.session.user ? true : false,
            user: req.session.user,
            title: '404 Page not found',
        });
    }

});
router.post('/edit/:id', upload.array('images'), async (req, res) => {
    let data = {};

    if (!req.session.user || req.session.user.roleId != 2) {
        data.success = false;
        data.msg = "something going wrong";
        return res.json(data);
    }
    const id = xss(req.params.id.trim());
    const name = xss(req.body.name.trim());
    const address = xss(req.body.address.trim());
    const city = xss(req.body.city.trim());
    const state = xss(req.body.state.trim());
    const category = xss(req.body.category.trim());
    const zipCode = xss(req.body.zipCode.trim());
    const onSiteServices = xss(req.body.onSiteServices);
    const priceRange = xss(req.body.priceRange.trim());
    const latitude = xss(req.body.latitude.trim());
    const longtitude = xss(req.body.longtitude.trim());
    const userId = req.session.user._id;

    let images = [];
    req.files.forEach(element => {
        images.push(element.filename);
    });

    try {
        await validation.checkhotelname(name);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkhoteladdress(address);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkcityname(city);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkstatename(state);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkcategory(category);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkzipcode(zipCode);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkonSiteServices(onSiteServices.split(','));
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkpriceRange(priceRange);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checklatitude(latitude);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    } try {
        await validation.checklongtitude(longtitude);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }
    try {
        await validation.checkimage(images);
    } catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }

    try {
        uploadFiles(req, res, async function (err) {
            if (err) {

                // ERROR occured (here it can be occured due
                // to uploading image of size greater than
                // 1MB or uploading different file type)
                data.success = false;
                data.msg = msg;
                return res.json(data);
            }
            else {

                // SUCCESS, image successfully uploaded
                let hotel = await hotelData.getHotelById(id);
                if (hotel.status == 2) {
                    if (hotel.addedBy != req.session.user._id) {
                        return res.render('errors/404', {
                            authenticated: req.session.user ? true : false,
                            user: req.session.user,
                            title: '404 Page not found',
                        });
                    }


                    const responseData = await hotelData.updateHotel(id, name, address, city, state, category, zipCode, onSiteServices.split(','), priceRange, latitude, longtitude, userId, images, 2);
                    if (responseData) {
                        data.success = true;
                        data.msg = "Successfully updated your hotel.";
                        return res.json(data);
                    }
                    else {
                        data.success = false;
                        data.msg = msg;
                        return res.json(data);
                    }
                }
            }
        });
    }
    catch (error) {
        data.success = false;
        data.msg = error;
        return res.json(data);
    }

    //validation check remaining

    // if (req.session.user != undefined && req.session.user.roleId == 1) {
    //     return res.redirect("/users");
    // }
    // else {
    //     return res.redirect("../hotels");
    // }


});
router.get('/categories', async (req, res) => {
    res.json(allCategories);

});
router.get('/:id', async (req, res) => {

    let id = xss(req.params.id.trim());
    if (id === '') {
        return res.render('errors/404', {
            authenticated: req.session.user ? true : false,
            user: req.session.user,
            title: '404 Page not found',
        });

    }
    try {
        let hotel = await hotelData.getHotelById(id);
        if (hotel.status == 2) {
            hotel.showRating = hotel.rating > 0 ? true : false;
            hotel.reviews_list = await reviewData.getAllReviewsByHotelId(hotel._id);
            hotel.userfav = false;
            if (req.session.user) {
                let checkFav = await userData.checkfavHotelById(hotel._id, req.session.user._id);
                if (!checkFav)
                    hotel.userfav = true;
            }
            return res.render('templates/hotels/HotelDetail', {
                authenticated: req.session.user ? true : false,
                user: req.session.user,
                title: 'Hotel',
                hotel: hotel,
                partial: 'hotel-detail-script'

            });
        }
        else {
            return res.render('errors/404', {
                authenticated: req.session.user ? true : false,
                user: req.session.user,
                title: '404 Page not found',
            });


        }



    }
    catch (e) {
        return res.render('errors/404', {
            authenticated: req.session.user ? true : false,
            user: req.session.user,
            title: '404 Page not found',
        });
    }

});
router.get('/hotelreviews/:id', async (req, res) => {
    let id = xss(req.params.id.trim());
    let hotel = undefined;
    if (id === '') {
        return res.render('templates/partials/review_list', {
            layout: null,
            ...hotel
        });

    }
    try {
        hotel = await hotelData.getHotelById(id);
        if (hotel.status == 2) {
            hotel.showRating = hotel.rating > 0 ? true : false;
            hotel.reviews_list = await reviewData.getAllReviewsByHotelId(hotel._id);

            //let review = await hotelData.getAllReviewsByHotelId(hotel._id);
            return res.render('templates/partials/review_list', {
                layout: null,
                ...hotel
            });
        }
        else {
            return res.render('templates/partials/review_list', {
                layout: null,
                ...hotel
            });

        }
    }
    catch (e) {
        return res.render('templates/partials/review_list', {
            layout: null,
            ...hotel
        });
    }

});
router.get('/favourite/:id', async (req, res) => {
    let id = xss(req.params.id.trim());
    let hotel = undefined;
    let data = {};
    if (id === '') {
        data.success = false;
        data.msg = "hotel id is not valid";
        return res.json(data);
    }
    if (!req.session.user) {
        data.success = false;
        data.msg = "you can not add favourite hotel without logged in";
        return res.json(data);
    }
    try {
        hotel = await hotelData.getHotelById(id);
        if (hotel === null) {
            data.success = false;
            data.msg = "Hotel does not exist";
            return res.json(data);
        }
        if (hotel.status != 2) {
            data.success = false;
            data.msg = "something going wrong";
            return res.json(data);

        }
        else {
            let fav = await userData.checkfavHotelById(id, req.session.user._id);
            let response = await userData.AddRemovefavourite(id, req.session.user._id);
            if (response) {
                if (fav == false) {
                    data.success = true;
                    data.msg = "Successfully added in your favourite hotel list";
                    return res.json(data);

                }
                else {
                    data.success = true;
                    data.msg = "Successfully removed from your favourite hotel list";
                    return res.json(data);

                }

            }


        }

    }
    catch (e) {
        data.success = false;
        data.msg = e;
        return res.json(data);

    }

});

module.exports = router;
