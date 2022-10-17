$images = $('.images-list')
$("#uplImages").change(function (event) {
    $images.html("");
    readURL(this);
});
$("#ddlOnSiteServices").select2({
    closeOnSelect: false
});
function readURL(input) {

    if (input.files && input.files[0]) {

        $.each(input.files, function () {
            var reader = new FileReader();
            reader.onload = function (e) {
                $images.append('<img src="' + e.target.result + '" />')
            }
            reader.readAsDataURL(this);
        });

    }
}

$.validator.addMethod("regx", function(value, element, regexpr) {          
    return regexpr.test(value);
});
$.validator.addMethod('maxupload', function(value, element, param) {
    var length = ( element.files.length );
     return this.optional( element ) || length <= param;
 });
$('#frm_addHotel').validate({
    errorClass: 'text-danger',
    rules: {
        "name": {
            required: true,
        },
        "address": {
            required: true,
        },
        "city": {
            required: true,
            
        },
        "state": {
            required: true,
        },
        "zipCode": {
            required: true,
            regx: /^\d{5}$/
        },

        "category": {
            required: true,
        },
        "priceRange": {
            required: true,
            regx:/^[$]{1,5}$/,
        },
        "onSiteServices": {
            required: true,
        },
        "latitude": {
            required: true,
            //regx:/^-?([0-8]?[0-9]|90)\.[0-9]{1,6}$/
        },
        "longtitude": {
            required: true,
            //regx:/^-?((1?[0-7]?|[0-9]?)[0-9]|180)\.[0-9]{1,6}$/
        },
        "images":{
                maxupload: 5,
        }
    },
    messages: {
        "name": {
            required: "Please, enter a name",
            
        },
        "address": {
            required: "Please, enter a address",
        },
        "city": {
            required: "Please, enter a city",
        },
        "state": {
            required: "Please, enter a state",
        },
        "zipCode": {
            required: "Please, enter a zip code",
            regx: "Please provide a valid zipcode."
        },

        "category": {
            required: "Please, select at least one category",
        },

        "priceRange": {
            required: "Please, enter a price range",
            regx:"Price range must be $ sign and range between 1 to 5"
        },
        "onSiteServices": {
            required: "Please, select at least one site services",
        },
        "latitude": {
            required: "Please, enter a latitude",
           // regx:"Latitude is not correctly typed"
        },
        "longtitude": {
            required: "Please, enter a longtitude",
            //regx:"Longtitude is not correctly typed"

        },
        "images":{
            maxupload:"you can not upload more than 5 files"
        }

    },
    submitHandler: function (form) {
        var formData = new FormData(form);
        $.ajax(
            {
                type: 'POST',
                url: '/hotels/addHotel',
                dataType: 'json',
                data: formData,
                async: true,
                cache: false,
                contentType: false,
                processData: false,
                success: function (response) {
                    if (response.success) {
                        toastr.success(response.msg);
                        $('#frm_addHotel')[0].reset();
                        $images.html("");
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

$('#frm_editHotel').validate({
    errorClass: 'text-danger',
    rules: {
        "name": {
            required: true,
        },
        "address": {
            required: true,
        },
        "city": {
            required: true,
            
        },
        "state": {
            required: true,
        },
        "zipCode": {
            required: true,
            regx: /^\d{5}$/
        },

        "category": {
            required: true,
        },
        "priceRange": {
            required: true,
            regx:/^[$]{1,5}$/,
        },
        "onSiteServices": {
            required: true,
        },
        "latitude": {
            required: true,
            regx:/^-?([0-8]?[0-9]|90)\.[0-9]{1,6}$/
        },
        "longtitude": {
            required: true,
            regx:/^-?((1?[0-7]?|[0-9]?)[0-9]|180)\.[0-9]{1,6}$/
        },
        "images":{
                maxupload: 5,
        }
    },
    messages: {
        "name": {
            required: "Please, enter a name",
            
        },
        "address": {
            required: "Please, enter a address",
        },
        "city": {
            required: "Please, enter a city",
        },
        "state": {
            required: "Please, enter a state",
        },
        "zipCode": {
            required: "Please, enter a zip code",
            regx: "Please provide a valid zipcode."
        },

        "category": {
            required: "Please, select at least one category",
        },

        "priceRange": {
            required: "Please, enter a price range",
            regx:"Price range must be $ sign and range between 1 to 5"
        },
        "onSiteServices": {
            required: "Please, select at least one site services",
        },
        "latitude": {
            required: "Please, enter a latitude",
            regx:"Latitude is not correctly typed"
        },
        "longtitude": {
            required: "Please, enter a longtitude",
            regx:"Longtitude is not correctly typed"

        },
        "images":{
            maxupload:"you can not upload more than 5 files"
        }

    },
    submitHandler: function (form) {
        var formData = new FormData(form);
        $.ajax(
            {
                type: 'POST',
                url: '/hotels/edit/'+window.location.href.substring(window.location.href.lastIndexOf('/') + 1),
                dataType: 'json',
                data: formData,
                async: true,
                cache: false,
                contentType: false,
                processData: false,
                success: function (response) {
                    if (response.success) {
                        toastr.success(response.msg);
                        setTimeout(function () {
                            location.reload(true);
                          }, 3000);
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