// Your code here!
$(function () {
  $.ajax({
    method: 'GET',
    url: 'https://galvanize-student-apis.herokuapp.com/gpersonnel/roles'
  }).done(function (data) {
    for (var i = 1; i <= 4; i++) {
      $('#op' + i).text(data[i - 1].title)
      $('#op' + i).attr('data-url', data[i - 1].img)
    }
    $('#roles').on('change', function () {
      var url = $('option:selected').attr('data-url')
      $('#rolePic').attr('src', url)
    })

  })
  $('form').on('submit', function (event) {
    event.preventDefault()
    console.log($('#firstName').val() + ' ' + $('#lastName').val());
    $.ajax({
      method: 'POST',
      url: 'https://galvanize-student-apis.herokuapp.com/gpersonnel/users',
      data: {firstName: $('#firstName').val(), lastName: $('#lastName').val(), role: $('option:selected').text()}
    }).done(function (results) {
      $('.save-status').text(results.message).css('visibility', 'visible').delay(2000).animate({opacity: 0}, 500).attr('class', 'sm alert alert-success')
    }).fail(function (error) {
      $('.save-status').attr('class', 'alert alert-danger').text(error.responseJSON.message).css('visibility', 'visible').delay(2000).animate({opacity: 0}, 500)
    })
  })
})
