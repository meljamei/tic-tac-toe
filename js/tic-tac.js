var isPlayer1 = true;
var player1 = 1;
//the function that select and check who is the winner

var checkForWinner = function() {

 if ($('#a .x, #b .x, #c .x').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#a .o, #b .o, #c .o').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#d .x, #e .x, #f .x').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#d .o, #e .o, #f .o').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#g .o, #h .o, #z .o').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#g .x, #h .x, #z .x').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#a .x, #e .x, #z .x').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#c .o, #e .o, #g .o').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#a .o, #e .o, #z .o').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#c .x, #e .x, #g .x').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#a .x, #d .x, #g .x').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#a .o, #d .o, #g .o').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#b .x, #e .x, #h .x').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#b .o, #e .o, #h .o').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#c .x, #f .x, #z .x').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

 } else if ($('#c .o, #f .o, #z .o').length === 3) {
  $('#winner').fadeIn(500).delay(4000).fadeOut(3000);
 }
}

$(document).ready(function() { //Hide the #wave and #winner to show the later
 console.log('Hello');
 $('#wave').hide();
 $('#winner').hide();


 $('.box').on('click', function(event) { //To show O and X pictures into boxes

  if (isPlayer1) {
   $(event.currentTarget).html('<img class="o" src="image/circle.gif">');
   isPlayer1 = false;
  } else {
   $(event.currentTarget).html('<img class="x" src="image/x.gif">');
   isPlayer1 = true;
  }
  checkForWinner();
 });

 $('#reset').on('click', function() { // Reset the game by selecting Play again button and creal the page
  $('.box').empty();

  $('#wave').fadeIn(500).delay(500).fadeOut(2000);

 })

});
