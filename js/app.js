$(document).ready(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active-nav-list');
        $('.nav-list').toggleClass('active-nav-list');
    });

});

$(document).ready(function() {
    $('.dropbtn1').click(function() {
        $(this).toggleClass('active-dropdown1');
        $('.dropdown-content1').toggleClass('active-dropdown1');
    });

});