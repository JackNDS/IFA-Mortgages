var red = document.getElementById('menu');
const nav = document.querySelector('.overlay-nav-main-wrap');
const topcontainer = document.querySelector('.top-container');
const burger = document.querySelector('.hamburger');

    menu.addEventListener('click', menuActive);

    function menuActive(){
        nav.classList.toggle('nav-open');
        topcontainer.classList.toggle('nav-open');
        burger.classList.toggle('open');

    };

/* Background Slider */    

      const background = document.querySelectorAll('.background');
      const next = document.querySelector('#next');
      const prev = document.querySelector('#prev');
      const auto = true;
      const intervalTime = 8000;
      let slideInterval;

      const nextBg = () => {
        // Get current class
        const current = document.querySelector('.current');
        // Remove current class
        current.classList.remove('current')
        // Check for next background
        if(current.nextElementSibling) {
          //Add current to next sibling
          current.nextElementSibling.classList.add('current');
        }
        else {
          // Add current to start
          background[0].classList.add('current');
        }
      }

      const prevBg = () => {
        // Get current class
        const current = document.querySelector('.current');
        // Remove current class
        current.classList.remove('current')
        // Check for prev background
        if(current.previousElementSibling) {
          //Add current to prev sibling
          current.previousElementSibling.classList.add('current');
        }
        else {
          // Add current to last
          background[background.length - 1].classList.add('current');
        }
      }

      // Auto Slide
      if(auto) {
        // Run next bg at interval time
        slideInterval = setInterval(nextBg, intervalTime);
      }

      // Button Events
        next.addEventListener('click', e => {
          nextBg();
          if(auto) {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextBg, intervalTime);
          }
        })
        prev.addEventListener('click', e => {
          prevBg();
          if(auto) {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextBg, intervalTime);
          }
        })


 /* Intersection Observers */
      const cards = document.querySelectorAll('.card');
      const teammembers = document.querySelectorAll('.team-member');

      const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px -120px 0px'
      };
      
      const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
      ) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add('fade-in');
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions);
      
      cards.forEach(card => {
        appearOnScroll.observe(card);
      });
      
      teammembers.forEach(teammember => {
        appearOnScroll.observe(teammember);
      });