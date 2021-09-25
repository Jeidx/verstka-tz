
let header = document.querySelector('.navigation');
let logo = document.querySelector('.logo-btn');
let body = document.querySelector('body');


let burgerMenu = document.querySelector('.burger-menu');
let burgerLink = document.querySelector('.burger');
let burgerArrow = document.querySelector('.burger-arrow');

let userBar = document.querySelector('.user-bar');
let logginMenu = document.querySelector('.loggin-menu');

let userIco = document.getElementById('userIco');

$(window).on("scroll", function() {
    $(header).toggleClass("active", $(this).scrollTop() > 50);
    $(".nav-links_item").toggleClass("active", $(this).scrollTop() > 50);
    $(logo).toggleClass("active", $(this).scrollTop() > 50);
});

burgerLink.addEventListener('click', function(){
    burgerMenu.classList.toggle('active');
    body.classList.toggle('active');
    burgerArrow.classList.toggle('active');
    logginMenu.classList.remove('active')
})
userBar.onclick = () =>{
    logginMenu.classList.toggle('active')
    userIco.classList.toggle('active')
}





