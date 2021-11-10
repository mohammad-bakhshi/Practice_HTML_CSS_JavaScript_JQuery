$(document).ready(function(){
    $('#copyParentText').click(function () { 
        $('#targetText').text('The target node');
        let parentText=$('#parentText').text();
        let targetText=$('#targetText').text();
        let childText=$('#childText').text();
        $('#targetText').text(parentText+targetText+childText+targetText);
    });
    $('#copyChildText').click(function () { 
        $('#targetText').text('The target node');
        let targetText=$('#targetText').text();
        let childText=$('#childText').text();
        $('#targetText').text(childText+targetText);
    });
      });   









// function copyParentText() {
//     let parentText=document.getElementById('parentText').innerHTML;
//     let targetText=document.getElementById('targetText').innerHTML;
//     let childText=document.getElementById('childText').innerHTML;
//     document.getElementById('targetText').innerHTML=parentText+targetText+childText+targetText;
// }


// function copyChildText()
// {
//     let targetText=document.getElementById('targetText').innerHTML;
//     let childText=document.getElementById('childText').innerHTML;
//     document.getElementById('targetText').innerHTML=childText+targetText;
// }