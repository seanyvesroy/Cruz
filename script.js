// Function to toggle the navbar visibility
const hamburger = document.querySelector(".hamburger");
const menubar = document.querySelector(".menubar");
const menuItems = document.querySelector(".menubar ul li a");
const body = document.body; // Reference to the body element

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Close the menubar and remove the active hamburger state
    menubar.classList.remove("active");
    hamburger.classList.remove("hamburger-active");
    body.classList.remove("no-scroll"); // Allow scrolling again

    // Delay the scrolling by 0.5 seconds (500ms)
    setTimeout(() => {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Ensures the section is aligned at the top
      });
    }, 350); // 500ms delay
  });
});

// Toggle the active class to show the menubar and lock scrolling
hamburger.addEventListener("click", () => {
  menubar.classList.toggle("active");
  hamburger.classList.toggle("hamburger-active");
  
  // Toggle the no-scroll class on the body
  if (menubar.classList.contains("active")) {
    body.classList.add("no-scroll");
    const scrollPosition = window.scrollY;
    menubar.style.top = `${scrollPosition}px`;
  } else {
    body.classList.remove("no-scroll");
  }
});
function toggleService(serviceItem) {
  const image = serviceItem.querySelector("img");
  const description = serviceItem.querySelector(".service-description");

  if (image.style.display === "none") {
    // Show the image and hide the description
    image.style.display = "block";
    description.style.display = "none";
  } else {
    // Hide the image and show the description
    image.style.display = "none";
    description.style.display = "block";
  }
}
