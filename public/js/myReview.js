$(function()
{
    $(".ratings").each(function () {
        $(this).html(getStars($(this).html()));

    });
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
