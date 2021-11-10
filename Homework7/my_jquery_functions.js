$(document).ready(function(){
    $("#pbar0").css({ 'color': 'LightYellow' });
    let total=10;
    barUpdate(total);
    $('button').click(function () {
        total+=10;
        barUpdate(total);
    });


    function barUpdate(total) {
        $('#pbar0').progressbar({
            value:total
          });
    }
}); 