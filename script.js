const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
let button = document.querySelector("#btn")
let viewPhoto = document.querySelector("#viewPhoto");
let viewAbout = document.querySelector("#viewAbout");
let interview = document.querySelector("#interview");
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
button.addEventListener('click', function(){
  viewPhoto.style.display="block";
  viewAbout.style.display="block";
  interview.style.display="block";
  button.style.display="none";
});