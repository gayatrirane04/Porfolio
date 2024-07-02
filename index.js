const header =document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY >130);
});

let menu=document.querySelector('#menu-icon');
let menulist=document.querySelector('.menulist');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
};

window.onscroll =() =>{
    menu.classList.remove('bx-x');
    menulist.classList.remove('open');
};
  
var typed = new Typed(".input",{
    strings:["Competetive Programmer.","Machine Learning.","Backend/Database."],
    typeSpeed:120,
    backSpeed:70,
    loop:true
})

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').textContent = data;
    })
    .catch(error => {
        document.getElementById('response').textContent = 'An error occurred: ' + error.message;
    });
});

