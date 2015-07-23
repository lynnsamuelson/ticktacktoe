$('td').click(function() {
  $(this).text('X');
  $(this).addClass("X");
  $(this).click(function() {
    $(this).text('O');
    $(this).attr('class', 'O');
  });
});

// All that's needed now is to create a JS object out of 
//our table data so we can determine a winner.