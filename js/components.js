
  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.global-header');
    const toggle = document.getElementById('menu-toggle-trigger');
    const menu = document.getElementById('mobile-nav-overlay');

    // 1. Transparent-to-Solid Scroll Transition Tracker
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
        // FIX: Explicitly forces pure transparency when returned to the absolute top of the viewport
        navbar.style.backgroundColor = "transparent"; 
      }
    });

    // 2. Mobile Responsive Hamburg Drawer Menu Click Triggers
    if (toggle && menu) {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('mobile-menu-active');
      });

      document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
          menu.classList.remove('mobile-menu-active');
        }
      });
    }

    // 3. LUXURY PRELOADER HOLD DISMISS TIMER ENGINE (1.8 Seconds)
    setTimeout(() => {
      const preloader = document.getElementById('app-preloader-shroud');
      if (preloader) {
        preloader.classList.add('shroud-clear');
      }
    }, 1800);
  });
