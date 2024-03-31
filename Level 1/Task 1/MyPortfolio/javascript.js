// scroll Section


window.onscroll = () => {
  let header = document.querySelector("header");

  header.classList.toggle("stickly", window.scrollY > 100);
};


// 9fa5b3f8-1d2d-4a5c-9073-c3806c2ea441 



let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() =>{
  Sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset +height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classlist.add('active');
      });
    }
  });
}