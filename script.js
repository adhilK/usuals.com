const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click',()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active')

        //Animate Links
        navLinks.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');

    });
   
};

navSlide();

function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById('wrapper');
    li = document.getElementsByClassName('job');

    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('h3')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = 'none';
        }
    }
};

const searchBtn = document.getElementById('search-btn');
const search = document.getElementById('search');

var i = 0;
var message = 'eg. Painter, Engineer, Plumber';
var speed = 100;
var delay = 2500;

function searchbtn() {
    search.style.width = '80%';
    search.style.paddingLeft = '40px';
    search.style.cursor = 'text';
    search.focus();
    
    
    typeWriter();
    
};

setTimeout(function typeWriter() {
    if (i < message.length) {
        msg = search.getAttribute('placeholder') + message.charAt(i);
        search.setAttribute('placeholder', msg);
        i++;
        setTimeout(typeWriter, speed);
    }
}, delay)
//function typeWriter() {
//    if (i < message.length) {
//            msg = search.getAttribute('placeholder') + message.charAt(i);
//        search.setAttribute('placeholder', msg);
//        i++;
//        setTimeout(typeWriter, speed);
//    }
//}



searchbtn();