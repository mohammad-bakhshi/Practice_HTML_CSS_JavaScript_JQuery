$(document).ready(function(){

$('div').click(function () { 
  let text=$('div').text();
  text+=text;
  $('div').text(text);
});
  });   