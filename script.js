// ===== Sticky Header JavaScript =====

const header = document.querySelector('.sticky-header');
let hasScrolled = false;

// Scroll event listener
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  
  if (scrollY > 50) {
    header.classList.add('scrolled');
    hasScrolled = true;
  } else {
    header.classList.remove('scrolled');
    hasScrolled = false;
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Smooth scroll for anchor links (alternative approach)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

console.log('Sticky header is ready! 🚀');
