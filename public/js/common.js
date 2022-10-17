$(document)
  .ajaxStart(function () {
    $("#loader").show();
  })
  .ajaxStop(function () {
    $("#loader").hide();
  });

$(function () {
  $.ajax(
    {
      type: 'get',
      url: '/hotels/categories',
      contentType: 'application/json',
      success: function (response) {
        $.each(response, function (data, value) {

          $("#header-category").append($("<option></option>").val(value).html(value));
        });
      },
      error: function (xhr, status, error) {
        var errorMessage = xhr.status + ': ' + xhr.statusText
        toastr.error(errorMessage);
      }
    });

})