const toggleBtn = document.getElementById('toggle-btn');
const navbarLinks = document.getElementById('navbar-links');
const navBarSocial = document.getElementById('navbar-social');

toggleBtn.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active');
})