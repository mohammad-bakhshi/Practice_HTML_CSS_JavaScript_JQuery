$(document).ready(function(){
    $('div').mouseover(function () { 
        $('div').css('background-color','blue');
    });

    $('div').mouseout(function () { 
        $('div').css('background-color','red');
    });
      });   