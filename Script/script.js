document.addEventListener('DOMContentLoaded', () => {
  // Get all navigation buttons
  const navButtons = document.querySelectorAll('.nav-btn');
  const contentDivs = document.querySelectorAll('.content_box > div:not(.slider-navigation)');
  
  // Add click event listeners to each button
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const slideIndex = parseInt(btn.dataset.slide);
      contentDivs[slideIndex].scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Optional: Track which slide is currently visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Array.from(contentDivs).indexOf(entry.target);
        navButtons.forEach(btn => btn.classList.remove('active'));
        navButtons[index].classList.add('active');
      }
    });
  }, { threshold: 0.7 });
  
  // Observe each content div
  contentDivs.forEach(div => observer.observe(div));
});
