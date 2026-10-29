document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // 2. Active Link Highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 3. Interactive Skills Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillBoxes = document.querySelectorAll('.skill-box');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        skillBoxes.forEach(box => {
          const boxCategory = box.getAttribute('data-category');

          if (filterValue === 'all' || filterValue === boxCategory) {
            box.classList.remove('hide');
            box.classList.add('show');
          } else {
            box.classList.remove('show');
            box.classList.add('hide');
          }
        });
      });
    });
  }
});