function showArrow(target){
  if($("#arrow")){
    removeArrow();
  }
  $(target).append('<span id="arrow"> </span>')
}

function removeArrow(){
  $("#arrow").remove();
}

function checkForArrow(target){
   var hT = $(target).offset().top;
   var hH = $(target).outerHeight();
   var wH = $(window).height();
   var wS = $(this).scrollTop();

   if(target != '#main'){
     if (wS > (hT+hH-wH/1.5)){
         removeArrow();
         showArrow(target+'-li');
     }
   }
   else{
     removeArrow();
   }
}
