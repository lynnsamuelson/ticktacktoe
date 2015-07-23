$('td').click(function() {
  $(this).text('X');
  $(this).addClass("X");
  $(this).click(function() {
    $(this).text('O');
    $(this).attr('class', 'O');
  });
});