const sections = document.querySelectorAll('section');

const observerOptions = {
  root: null, // use the viewport
  threshold: 0.2 // trigger when 20% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stop observing after it appears (optional)
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});