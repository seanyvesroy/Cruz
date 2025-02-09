
// Function to toggle the navbar visibility
const hamburger = document.querySelector(".hamburger");
const menubar = document.querySelector(".menubar");
const menuItems = document.querySelector(".menubar ul li a")

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Ensures the section is aligned at the top
      });
      menubar.classList.remove("active"); // Remove active class to close the menubar
      hamburger.classList.remove("hamburger-active"); 
    });
  });
// Toggle the active class to show the menubar
hamburger.addEventListener("click", () => {
  menubar.classList.toggle("active");
  hamburger.classList.toggle("hamburger-active");
  const scrollPosition = window.scrollY;
  menubar.style.top = `${scrollPosition}px`;
});



