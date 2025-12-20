// Mobile header - hide on scroll down, show on scroll up
(function() {
  let lastScrollTop = 0;
  const header = document.getElementById('main-header');
  let scrollThreshold = 5; // Minimum scroll distance to trigger
  let isScrolling;

  window.addEventListener('scroll', function() {
    // Clear timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Only hide/show if we've scrolled past the threshold
      if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          // Scrolling down & past 100px
          header.classList.add('header-hidden');
        } else {
          // Scrolling up
          header.classList.remove('header-hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }
    }, 50);
  }, false);
})();
