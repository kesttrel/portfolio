(function(){
    'use strict'
    console.log('reading js');

    const home = document.querySelector('#hero');
    const work = document.querySelector('#work');
    const about = document.querySelector('#about');
    const contact = document.querySelector('#contact');
    const link1 = document.querySelector("#link1");
    const link2 = document.querySelector("#link2");
    const link3 = document.querySelector("#link3");
    const link4 = document.querySelector("#link4");

    link1.addEventListener('click', function(){
       work.classList.remove('showing');
       about.classList.remove('showing');
       contact.classList.remove('showing');
       work.className = 'hidden'
       about.className = 'hidden'
       contact.className = 'hidden'
       home.className = 'showing'
       link1.style.color = 'salmon'
       link2.style.color = 'white'
       link3.style.color = 'white'
       link4.style.color = 'white'
    })
    link2.addEventListener('click', function() {
       home.classList.remove('showing');
       about.classList.remove('showing');
       contact.classList.remove('showing');
       home.className = 'hidden'
       about.className = 'hidden'
       contact.className = 'hidden'
       work.className = 'showing'
       link2.style.color = 'salmon'
       link1.style.color = 'white'
       link3.style.color = 'white'
       link4.style.color = 'white'
    })
    link3.addEventListener('click', function() {
        home.classList.remove('showing');
        work.classList.remove('showing');
        contact.classList.remove('showing');
        home.className = 'hidden'
        work.className = 'hidden'
        contact.className = 'hidden'
        about.className = 'showing'
        link3.style.color = 'salmon'
        link1.style.color = 'white'
        link2.style.color = 'white'
        link4.style.color = 'white'
     })
    link4.addEventListener('click', function() {
        home.classList.remove('showing');
        work.classList.remove('showing');
        about.classList.remove('showing');
        home.className = 'hidden'
        work.className = 'hidden'
        about.className = 'hidden'
        contact.className = 'showing'
        link4.style.color = 'salmon'
        link1.style.color = 'white'
        link2.style.color = 'white'
        link3.style.color = 'white'
    })
})();