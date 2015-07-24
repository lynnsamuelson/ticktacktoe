var dataArray = [];
function score () {
  if ((dataArray[1] === "X" && dataArray[2] === "X" && dataArray[3] === "X") ||
      (dataArray[1] === "X" && dataArray[4] === "X" && dataArray[7] === "X") ||
      (dataArray[1] === "X" && dataArray[5] === "X" && dataArray[9] === "X") ||
      (dataArray[4] === "X" && dataArray[5] === "X" && dataArray[6] === "X") ||
      (dataArray[7] === "X" && dataArray[8] === "X" && dataArray[9] === "X") || 
      (dataArray[2] === "X" && dataArray[5] === "X" && dataArray[8] === "X") || 
      (dataArray[3] === "X" && dataArray[6] === "X" && dataArray[9] === "X") || 
      (dataArray[3] === "X" && dataArray[5] === "X" && dataArray[7] === "X")) {
    $('#winner').text('X Wins!');
    console.log("X Wins!");
  }
  if ((dataArray[1] === "O" && dataArray[2] === "O" && dataArray[3] === "O") ||
      (dataArray[1] === "O" && dataArray[4] === "O" && dataArray[7] === "O") ||
      (dataArray[1] === "O" && dataArray[5] === "O" && dataArray[9] === "O") ||
      (dataArray[4] === "O" && dataArray[5] === "O" && dataArray[6] === "O") ||
      (dataArray[7] === "O" && dataArray[8] === "O" && dataArray[9] === "O") || 
      (dataArray[2] === "O" && dataArray[5] === "O" && dataArray[8] === "O") || 
      (dataArray[3] === "O" && dataArray[6] === "O" && dataArray[9] === "O") || 
      (dataArray[3] === "O" && dataArray[5] === "O" && dataArray[7] === "O")) {
    $('#winner').text('O Wins!');
    console.log("O Wins!");
  }
};
$('td').click(function() {
  $(this).text('X');
  $(this).addClass("X");
  dataArray [1] = $('#one').text();
  dataArray [2] = $('#two').text();;
  dataArray [3] = $('#three').text();;
  dataArray [4] = $('#four').text();;
  dataArray [5] = $('#five').text();;
  dataArray [6] = $('#six').text();;
  dataArray [7] = $('#seven').text();;
  dataArray [8] = $('#eight').text();;
  dataArray [9] = $('#nine').text();;
  console.log(dataArray);
  score();
});
$('td').dblclick(function() {
  $(this).text('O');
  $(this).attr('class', 'O');
  dataArray [1] = $('#one').text();
  dataArray [2] = $('#two').text();;
  dataArray [3] = $('#three').text();;
  dataArray [4] = $('#four').text();;
  dataArray [5] = $('#five').text();;
  dataArray [6] = $('#six').text();;
  dataArray [7] = $('#seven').text();;
  dataArray [8] = $('#eight').text();;
  dataArray [9] = $('#nine').text();;
  console.log(dataArray);
  score();
});

