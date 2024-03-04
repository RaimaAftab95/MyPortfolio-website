//   var typed = new Typed('#typed-text', {
//     strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
//     typeSpeed: 50, // typing speed in milliseconds
//     backSpeed: 50, // backspacing speed in milliseconds
//     loop: true // loop infinitely
//   });
// ********scroll to top********
// Get the scroll-to-top element
const scrollToTop = document.getElementById('scroll-to-top');

// Get the section2 element
const section2 = document.getElementById('About');

// Check if the scroll position is below the section1
window.addEventListener('scroll', function () {
  const section1OffsetTop = section2.offsetTop;
  const scrollPosition = window.scrollY + window.innerHeight;

  // Display the scroll-to-top icon only if the scroll position is below section1
  if (scrollPosition >= section1OffsetTop) {
    scrollToTop.style.display = 'block';
  } else {
    scrollToTop.style.display = 'none';
  }
});