
// Function to toggle the navbar visibility
const hamburger = document.querySelector(".hamburger");
const menubar = document.querySelector(".menubar");
const menuItems = document.querySelector(".menubar ul li a")

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Close the menubar and remove the active hamburger state
    menubar.classList.remove("active");
    hamburger.classList.remove("hamburger-active");

    // Delay the scrolling by 0.5 seconds (500ms)
    setTimeout(() => {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Ensures the section is aligned at the top
      });
    }, 350); // 500ms delay
  });
});
// Toggle the active class to show the menubar
hamburger.addEventListener("click", () => {
  menubar.classList.toggle("active");
  hamburger.classList.toggle("hamburger-active");
  const scrollPosition = window.scrollY;
  menubar.style.top = `${scrollPosition}px`;
});



