$.validator.addMethod("regx", function (value, element, regexpr) {
    return regexpr.test(value);
});

$('#login-form').validate({
    errorClass: 'text-danger',
    rules: {
        "username": {
            required: true,
            minlength: 4,
            regx: /^[a-z0-9_]+$/i,

        },
        "password": {
            required: true,
            //            minlength:8,
            //            regx:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
        }
    },
    messages: {
        "username": {
            required: "Please, enter a username",
            regx: "username not valid"
        },
        "password": {
            required: "Please, enter a paasword",
            //          regx:"Password must be 8 to 15 characters which contain at least one lowercase letter one uppercase letter, one numeric digit, and one special character"

        }
    },
    submitHandler: function (form) {
        $.ajax(
            {
                type: 'POST',
                url: '/login',
                dataType: 'json',
                data: $('#login-form').serialize(),
                success: function (response) {
                    if (response.success) {
                        window.location.href = "/";
                    }
                    else {
                        toastr.error(response.msg);
                    }
                },
                error: function (xhr, status, error) {
                    var errorMessage = xhr.status + ': ' + xhr.statusText
                    toastr.error(errorMessage);
                }
            });
        return false;
    }
});

$('#Signup-form').validate({
    errorClass: 'text-danger',
    rules: {
        "firstname": {
            required: true,
            
        },
        "lastname": {
            required: true,
        },
        "username": {
            required: true,
            minlength: 4,
            regx: /^[a-z0-9_]+$/i,

        },
        "password": {
            required: true,
            minlength: 8,
            regx: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
        },
        "phoneNumber": {
            required: true,
            regx: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,

        },
        "email": {
            required: true,
            regx: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        },
        "role": {
            required: true,
        },
        "age": {
            regx: /^([0-9]{2})$/,
        }
    },
    messages: {
        "firstname": {
            required: "Please, enter a first name",
            
        },
        "lastname": {
            required: "Please, enter a lastname",
        },
        "username": {
            required: "Please, enter a username",
            regx: "username not valid"
        }, 
        "password": {
            required: "Please, enter a paasword",
            regx: "Password must be 8 to 15 characters which contain at least one lowercase letter one uppercase letter, one numeric digit, and one special character"
        },
        "phoneNumber": {
            required: "Please, enter a phone number in the format XXX-XXX-XXXX",
            regx: "Please enter valid Phone number"
        },
        "email": {
            required: "Please, enter an email",
            regx: "please enter valid email",
        },
        "age": {
            required: "Please, enter an age",
            regx: "Please enter valid age"
        },
        "role": {
            required: "Please, enter an age",
        }
    },
    submitHandler: function (form) {
        $.ajax(
            {
                type: 'POST',
                url: '/Signup',
                dataType: 'json',
                data: $('#Signup-form').serialize(),
                success: function (response) {
                    if (response.success) {
                        window.location.href = "login";
                    }
                    else {
                        toastr.error(response.msg);
                    }
                },
                error: function (xhr, status, error) {
                    var errorMessage = xhr.status + ': ' + xhr.statusText
                    toastr.error(errorMessage);
                }
            });
    }
});



$('#profile-form').validate({
    errorClass: 'text-danger',
    rules: {
        "firstname": {
            required: true,
        },
        "lastname": {
            required: true,
        },
        "phoneNumber": {
            required: true,
            regx: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,

        },
        "email": {
            required: true,
            regx: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        },
        "role": {
            required: true,
        },
        "age": {
            required: true,
            regx: /^([0-9]{2})$/,
        }
    },
    messages: {
        "firstname": {
            required: "Please enter first name",
        },
        "lastname": {
            required: "Please enter last name",
        },
        "phoneNumber": {
            required: "Please, enter a phone number",
            regx: "Please enter valid Phone number"
        },
        "email": {
            required: "Please, enter an email",
            regx: "please enter valid email",
        },
        "age": {
            required: "Please, enter an age",
            regx: "Please enter valid age"
        }
    },
    submitHandler: function (form) {
        $.ajax(
            {
                type: 'POST',
                url: '/profile',
                dataType: 'json',
                data: $('#profile-form').serialize(),
                success: function (response) {
    
                    if (response.success) {
                        toastr.success(response.msg);   
                    }
                    else {
                        toastr.error(response.msg);
                    }
                },
                error: function (xhr, status, error) {
                    var errorMessage = xhr.status + ': ' + xhr.statusText
                    toastr.error(errorMessage);
                }
            });
    }
});