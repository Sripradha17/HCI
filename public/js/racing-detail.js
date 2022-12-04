

var url = window.location.href;
var id = url.substring(url.lastIndexOf('/') + 1);

$.validator.addMethod("regx", function (value, element, regexpr) {
    return regexpr.test(value);
});

function getStars(rating) {

    // Round to nearest half
    rating = Math.round(rating * 2) / 2;
    let output = [];

    // Append all the filled whole stars
    for (var i = rating; i >= 1; i--)
        output.push('<i class="fa fa-star gold" aria-hidden="true" ></i>');

    // If there is a half a star, append it
    if (i == .5) output.push('<i class="fa fa-star-half-o gold" aria-hidden="true" ></i>');

    // Fill the empty stars
    for (let i = (5 - rating); i >= 1; i--)
        output.push('<i class="fa fa-star-o gold" aria-hidden="true" ></i>');

    return output.join('');

}
function reloadStar()
{
    $(".ratings").each(function () {
        $(this).html(getStars($(this).html()));

    });
}
$(function () {
    if (document.getElementById("stars") != undefined) {
        document.getElementById("stars").innerHTML = getStars(document.getElementById("stars").innerHTML);
    }

    getAllReviews();
});
var review_list = $('#review_list');
$(review_list).on('click', ".like", function () {
    $.ajax(
        {
            type: 'get',
            url: '/reviews/like/'+$(this).attr("data-id"),
            contentType: 'application/json',
            data: id,
            success: function (response) {
                if (response.success) {
                    toastr.success(response.msg);
                   getAllReviews();
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

});
$(review_list).on('click', ".unlike", function () {
    $.ajax(
        {
            type: 'get',
            url: '/reviews/dislike/'+$(this).attr("data-id"),
            contentType: 'application/json',
            data: id,
            success: function (response) {
                if (response.success) {
                    toastr.success(response.msg);
                   getAllReviews();
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

});

function getAllReviews() {

    $.ajax(
        {
            type: 'get',
            url: '/racing/racingreviews/' + id,
            contentType: 'application/json',
            data: id,
            success: function (response) {
                review_list.html(response);
                reloadStar();
            },
            error: function (xhr, status, error) {
                var errorMessage = xhr.status + ': ' + xhr.statusText
                toastr.error(errorMessage);
            }
        });
}

$('#addReview-form').validate({
    errorClass: 'text-danger',
    rules: {
        "Title": {
            required: true,
        },
        "description": {
            required: true,
        },
        "rating": {
            required: true,
            regx: /^([1-5])$/

        },
    },
    messages: {
        "Title": {
            required: "Please, enter a title",
            regx: "username not valid"
        }, 
        "description": {
            required: "Please, enter a description",
            //          regx:"Password must be 8 to 15 characters which contain at least one lowercase letter one uppercase letter, one numeric digit, and one special character"

        },
        "rating": {
            required: "Please, enter a rating",
            regx: "rating allow only 1 to 5"
        }

    },
    submitHandler: function (form) {
        $.ajax(
            {
                type: 'POST',
                url: '/reviews/racing/' + id,
                dataType: 'json',
                data: $('#addReview-form').serialize(),
                success: function (response) {
                    if (response.success) {
                        getAllReviews();
                        $('#addReview-form')[0].reset();
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
        return false;
    }
});