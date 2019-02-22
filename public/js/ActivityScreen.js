$("ActivityScreen").ready(function(){
  $('.dropdown-submenu a.dropdown-button1').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});