 /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }
/**
   * Hero type effect
   */
 $(document).ready(function () {
    $("#namedefine").fadeIn(5000);
  });
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }
  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer){
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });
        let portfolioFilters =select('#portfolio-flters li', true);
        on('click', '#portfolio-flters li', function(e) {
          
          e.preventDefault();
          portfolioFilters.forEach(function(el){
            el.classList.remove('filter-active');
          });
            this.classList.add('filter-active')
            portfolioIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            portfolioIsotope.on('arrangeComplete',function(){
              AOS.refresh()
            });
        },true);
    } 
  });
  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox =GLightbox({
    selector :'.portfolio-lightbox'
  });
/**
   * Portfolio details slider
   */
 new Swiper('.portfolio-details-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});
  // ------------------------
  // Testimonials
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  // ------------------------
   /**
   * Animation on scroll
   */
  AOS.init({
    // easing: 'ease-in-out-sine'
    duration: 1000,
    easing: 'ease-in-out-sine',
    mirror: false
  });
  
  