var dataArray = [];
var winner = "";
var scoreX = 0;
var scoreO = 0;
function score () {
  if ((dataArray[1] === "X" && dataArray[2] === "X" && dataArray[3] === "X") ||
      (dataArray[1] === "X" && dataArray[4] === "X" && dataArray[7] === "X") ||
      (dataArray[1] === "X" && dataArray[5] === "X" && dataArray[9] === "X") ||
      (dataArray[4] === "X" && dataArray[5] === "X" && dataArray[6] === "X") ||
      (dataArray[7] === "X" && dataArray[8] === "X" && dataArray[9] === "X") || 
      (dataArray[2] === "X" && dataArray[5] === "X" && dataArray[8] === "X") || 
      (dataArray[3] === "X" && dataArray[6] === "X" && dataArray[9] === "X") || 
      (dataArray[3] === "X" && dataArray[5] === "X" && dataArray[7] === "X")) {
    winner = "X Wins!";
    $('#winner').text(winner);
    console.log("X Wins!");
    scoreX += 1;
    $('#scrX').text("X Score: " + scoreX);
  }
  if ((dataArray[1] === "O" && dataArray[2] === "O" && dataArray[3] === "O") ||
      (dataArray[1] === "O" && dataArray[4] === "O" && dataArray[7] === "O") ||
      (dataArray[1] === "O" && dataArray[5] === "O" && dataArray[9] === "O") ||
      (dataArray[4] === "O" && dataArray[5] === "O" && dataArray[6] === "O") ||
      (dataArray[7] === "O" && dataArray[8] === "O" && dataArray[9] === "O") || 
      (dataArray[2] === "O" && dataArray[5] === "O" && dataArray[8] === "O") || 
      (dataArray[3] === "O" && dataArray[6] === "O" && dataArray[9] === "O") || 
      (dataArray[3] === "O" && dataArray[5] === "O" && dataArray[7] === "O")) {
    winner = "O Wins!";
    $('#winner').text(winner);
    console.log("O Wins!");
    scoreO += 1;
    $('#scrO').text("O Score: " + scoreO);
  }
};
var DELAY = 700,
    clicks = 0,
    timer = null;

var DELAY = 700, clicks = 0, timer = null;
// $(function(){
    $('td:not(#reset)').on("click", function(){
        clicks++;  //count clicks
        if(clicks === 1) {
            console.log("There are" + clicks +"Clicks");
            timer = setTimeout(function() {
              $(this).text('X');
              $(this).addClass("X");
              $('#winner').text("");
              dataArray [1] = $('#one').text();
              dataArray [2] = $('#two').text();
              dataArray [3] = $('#three').text();
              dataArray [4] = $('#four').text();
              dataArray [5] = $('#five').text();
              dataArray [6] = $('#six').text();
              dataArray [7] = $('#seven').text();
              dataArray [8] = $('#eight').text();
              dataArray [9] = $('#nine').text();
              console.log(dataArray);
              score();   
              clicks = 0;             //after action performed, reset counter
            }, DELAY);
        } else {
            // clearTimeout(timer);    //prevent single-click action
            $(this).text('O');
            $(this).attr('class', 'O');
            $('#winner').text("");
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
            score();  //perform double-click action
            clicks = 0;             //after action performed, reset counter
        }
    })
    .on("dblclick", function(e){
        e.preventDefault();  //cancel system double-click event
    });
// });

$('#reset').click(function() {
  $('td:not(#reset)').text("");
  dataArray.splice(0,dataArray.length);
  $('#winner').text("")
});
$('#scrX').text("X Score: " + scoreX);
$('#scrO').text("O Score: " + scoreO);