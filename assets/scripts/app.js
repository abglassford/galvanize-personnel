// Your code here!
$(function () {
  $('form').on('submit', function (event) {
    event.preventDefault()
  })
  $.ajax({
    method: 'GET',
    url: 'http://galvanize-student-apis.herokuapp.com/gpersonnel/roles'
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
})
