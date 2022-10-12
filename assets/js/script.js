// Checks the address of the current page and adds a class named "active-page" to any link on the page that matches whats in the address bar
$(function(){
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('active-page');
    }
  });
});

// Hamburger Menu
$(document).ready(function() {
  var $menu = $("#menu"),
  $menulink = $(".header-menu-link");
  
  $menulink.click(function() {
    $menulink.toggleClass("open");
    $menu.toggleClass("open");
    return false;
  });
});