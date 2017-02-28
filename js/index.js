

$(document).ready(function() {
  var entry = '';
  var result='';
  var current='';
  $('button').click(function() {
    var curvar=$(this).attr("value");
    if(curvar=='='){
      
     return $("#line").html(entry+"="+eval(entry)) , $("#current").html(0);
    }
    if(entry == 0 ){
     current = $(this).attr("value");
     entry = $(this).attr("value");
    }
    else
    {current += $(this).attr("value");
    entry += $(this).attr("value");}
    
    switch($(this).attr("value")){
      case 'ce':
        entry='0';
        current='0';
      case 'ac':
        entry='0';
        current='0';
    }
     
    if(curvar=="+" || curvar==="-" || curvar==="*" || curvar=="&divide;" )
     current='';
   if(current == '')
     {
       $("#current").html("0"); 
     }
    else
     {
       $("#current").html(current);
       $("#line").html(entry);
     }
  });
  
});