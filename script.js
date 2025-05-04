// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = href;
      }
    });
  });
  
  // Fade-in animation on load
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.style.opacity = '0';
      setTimeout(() => {
        el.style.opacity = '1';
      }, 100);
    });
  });