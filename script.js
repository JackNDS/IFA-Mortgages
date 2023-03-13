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
      const intervalTime = 3000;
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


        // Testimonials
        const slides = document.querySelectorAll('.slide');
        const intervalTime2 = 6500;
        const next2 = document.querySelector('#next2');
        const prev2 = document.querySelector('#prev2');
        let slideInterval2;
        const auto2 = true;

        const nextBg2 = () => {
          // Get current class
          const current = document.querySelector('.current2');
          // Remove current class
          current.classList.remove('current2')
          // Check for next background
          if(current.nextElementSibling) {
            //Add current to next sibling
            current.nextElementSibling.classList.add('current2');
          }
          else {
            // Add current to start
            slides[0].classList.add('current2');
          }
        }
  
        const prevBg2 = () => {
          // Get current class
          const current = document.querySelector('.current2');
          // Remove current class
          current.classList.remove('current2')
          // Check for prev background
          if(current.previousElementSibling) {
            //Add current to prev sibling
            current.previousElementSibling.classList.add('current2');
          }
          else {
            // Add current to last
            slides[slides.length - 1].classList.add('current2');
          }
        }
  
        // Auto Slide
        if(auto2) {
          // Run next bg at interval time
          slideInterval2 = setInterval(nextBg2, intervalTime2);
        }
  
        // Button Events
          next2.addEventListener('click', e => {
            nextBg2();
            if(auto2) {
              clearInterval(slideInterval2);
              slideInterval2 = setInterval(nextBg2, intervalTime2);
            }
          })
          prev2.addEventListener('click', e => {
            prevBg2();
            if(auto2) {
              clearInterval(slideInterval2);
              slideInterval2 = setInterval(nextBg2, intervalTime2);
            }
          })

 /* Intersection Observers */
      const cards = document.querySelectorAll('.card');
      const teammembers = document.querySelectorAll('.team-member');

      const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px 120px 0px'
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


      const formInputs = document.querySelectorAll(".floating-contact-form .form-container .form-input");
      const contactIcon = document.querySelector(".floating-contact-form .contact-icon");
      const formContainer = document.querySelector(".floating-contact-form .form-container");
      const xBtn = document.querySelector(".fa-xmark");
      const contactBtn1 = document.querySelector(".contact-button1")
      const contactBtn2 = document.querySelector(".contact-button2")
      const contactBtn3 = document.querySelector(".contact-button3")
     

      contactIcon.addEventListener('click', () => {
        formContainer.classList.toggle("active");
      })
      xBtn.addEventListener('click', () => {
        formContainer.classList.toggle("active");
      })
      contactBtn1.addEventListener('click', () => {
        formContainer.classList.toggle("active");
      })
      contactBtn2.addEventListener('click', () => {
        formContainer.classList.toggle("active");
      })
      contactBtn3.addEventListener('click', () => {
        formContainer.classList.toggle("active");
      })

      formInputs.forEach(i => {
        i.addEventListener("focus", () => {
          i.previousElementSibling.classList.add("active");
        })
      })
     
      formInputs.forEach(i => {
        i.addEventListener("blur", () => {
          if(i.value === ""){
          i.previousElementSibling.classList.remove("active");
          }
        });
      });