var isPlayer1 = true;
var player1 = 1;


var checkForWinner = function () {

  // Refactord to a function

  if ($('#a .x, #b .x, #c .x').length === 3) {
    //$('#winner').show();
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);


  } else if ($('#a .o, #b .o, #c .o').length === 3) {
    //alert('O wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);


  } else if ($('#d .x, #e .x, #f .x').length === 3) {
    //alert('X wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);


  } else if ($('#d .o, #e .o, #f .o').length === 3) {
    //alert('O wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

  } else if ($('#g .o, #h .o, #z .o').length === 3) {
    //alert('O wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

  } else if ($('#g .x, #h .x, #z .x').length === 3) {
    //alert('X wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

  } else if ($('#a .x, #e .x, #z .x').length === 3) {
    //alert('X wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

  } else if ($('#c .o, #e .o, #g .o').length === 3) {
    //alert('O wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

  } else if ($('#a .o, #e .o, #z .o').length === 3) {
    //alert('O wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

  } else if ($('#c .x, #e .x, #g .x').length === 3) {
    //alert('X wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

  } else if ($('#a .x, #d .x, #g .x').length === 3) {
    //alert('X wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

  } else if ($('#a .o, #d .o, #g .o').length === 3) {
    //alert('O wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

  } else if ($('#b .x, #e .x, #h .x').length === 3) {
    //alert('X wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

  } else if ($('#b .o, #e .o, #h .o').length === 3) {
    //alert('O wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

  } else if ($('#c .x, #f .x, #z .x').length === 3) {
    //alert('X wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

  } else if ($('#c .o, #f .o, #z .o').length === 3) {
    //alert('O wins');
    $('#winner').fadeIn(500).delay(4000).fadeOut(3000);

  }


}

$(document).ready(function(){
  console.log('Hello');
  $('#wave').hide();
  $('#winner').hide();
  //if playe1 click on button player1 circle will be chosen
  //$(':button').css('background-color', '#77C6E0');

  $('.box').on('click',function(event){
    //$('.box').html('<img id="circle" src="image/loading_circle_by_elenduril-d7s1sqj.gif" alt="">')
    //console.log(event);

    if(isPlayer1){
      $(event.currentTarget).html( '<img class="o" src="image/circle.gif">' );
      isPlayer1 = false;
    }else{
      $(event.currentTarget).html( '<img class="x" src="image/x.gif">' );
      isPlayer1 = true;
    }

    checkForWinner();

  });

  $('#reset').on('click', function(){
    $('.box').empty();

      $('#wave').fadeIn(500).delay(500).fadeOut(2000);
      // Show & hide of the Waves
      // function waves(){
      //   $('#wave').show();
      //
      //     function wavesOut(){
      //       $('#wave').fadeOut();
      //     }
      //     setTimeout(wavesOut, 2000);
      // }
      // setTimeout(waves, 10); // 1000 MilliSeconds
  })


    // // var ticBox = ['#a','#b', '#c', '#d', '#e', '#f', '#g', '#h', '#z'];
    // //
    // // for (var i = 0; i < ticBox.length; i++) {
    // // var myBox = ticBox[i].split()
    // var ticTac = function (){
    //   if (player1 === (a && b && c) || (d && e && f) || (g && h && z) ||(a && d && g) || (b && e && h) || (c && f && z) || (a && e && z) || (c && e && g)) {
    //
    //     console.log('your the winner');
    //
    //     //return 'winner';
    //
    //   }
    //
    //   }

    // }

 });
