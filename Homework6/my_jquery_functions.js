$(document).ready(function(){
    $('.main #pages').hover(function () {
            $('ul#pagesNumber').slideDown(500);
            
        }, function () {
            $('ul#pagesNumber').slideUp(300);
        }
    );
    $('.main #links').hover(function () {
        $('ul#linksNumber').slideDown(500);
        
    }, function () {
        $('ul#linksNumber').slideUp(300);
    }
);
}); 