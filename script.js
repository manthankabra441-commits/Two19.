document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Optional: stop observing once it's visible
        }
      });
    }, observerOptions);
  
    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });
  
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        
        // If it's already active, we don't necessarily close it, or maybe we do
        // Let's toggle it
        const isActive = item.classList.contains('active');
        
        // Close all other accordions (optional, but typical for this kind of UI)
        document.querySelectorAll('.accordion-item').forEach(accItem => {
          accItem.classList.remove('active');
          // Hide details button on active, show on inactive
          const detailsBtn = accItem.querySelector('.btn-small');
          if (detailsBtn) detailsBtn.style.display = 'inline-flex';
        });
        
        if (!isActive) {
          item.classList.add('active');
          const detailsBtn = item.querySelector('.btn-small');
          if (detailsBtn) detailsBtn.style.display = 'none'; // Hide details button when active
        }
      });
    });

    // Tag toggle basic interaction
    const tags = document.querySelectorAll('.hero-tags .tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
        });
    });

    // Mobile hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileBackdrop = document.getElementById('mobileMenuBackdrop');
    const mobileClose = document.querySelector('.mobile-menu-close');

    function openMenu() {
        mobileMenu.classList.add('open');
        mobileBackdrop.classList.add('open');
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        mobileMenu.classList.remove('open');
        mobileBackdrop.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', openMenu);
    if (mobileClose) mobileClose.addEventListener('click', closeMenu);
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMenu);
    mobileMenu && mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
  });
