var red = document.getElementById('menu');
const nav2 = document.querySelector('.overlay-nav-main-wrap');
const topcontainer2 = document.querySelector('.top-container2');
const burger2 = document.querySelector('.hamburger');

    menu.addEventListener('click', menuActive);

    function menuActive(){
        nav2.classList.toggle('nav-open');
        topcontainer2.classList.toggle('nav-open');
        burger2.classList.toggle('open');

    };

      const formInputs2 = document.querySelectorAll(".floating-contact-form .form-container .form-input");
      const contactIcon2 = document.querySelector(".floating-contact-form .contact-icon");
      const formContainer2 = document.querySelector(".floating-contact-form .form-container");
      const xBtn2 = document.querySelector(".menu-close");
      const contactBtn4 = document.querySelector(".contact-button1")
      const contactBtn5 = document.querySelector(".contact-button2")
     

      contactIcon2.addEventListener('click', () => {
        formContainer2.classList.toggle("active");
      })
      xBtn2.addEventListener('click', () => {
        formContainer2.classList.toggle("active");
      })
      contactBtn4.addEventListener('click', () => {
        formContainer2.classList.toggle("active");
      })
      contactBtn5.addEventListener('click', () => {
        formContainer2.classList.toggle("active");
      })

      formInputs2.forEach(i => {
        i.addEventListener("focus", () => {
          i.previousElementSibling.classList.add("active");
        })
      })
     
      formInputs2.forEach(i => {
        i.addEventListener("blur", () => {
          if(i.value === ""){
          i.previousElementSibling.classList.remove("active");
          }
        });
      });


      /* Intersection Observers */
      const cards = document.querySelectorAll('.choose-us-card');
      const cards2 = document.querySelectorAll('.card');
      const teammembers = document.querySelectorAll('.team-member2');

      const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px 220px 0px'
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
      cards2.forEach(card => {
        appearOnScroll.observe(card);
      });
      teammembers.forEach(teammember => {
        appearOnScroll.observe(teammember);
      });


      const luke = document.getElementById("luke");
      const teamopenLuke = document.querySelector(".team-open.luke");
      const anthony = document.getElementById("anthony");
      const teamopenAnthony = document.querySelector(".team-open.anthony");
      const fletcher = document.getElementById("fletcher");
      const teamopenFletcher = document.querySelector(".team-open.fletcher");
      const checkmarkLuke = document.querySelector(".team-open.luke .team-open-icon");
      const checkmarkAnthony = document.querySelector(".team-open.anthony .team-open-icon");
      const checkmarkFletcher = document.querySelector(".team-open.fletcher .team-open-icon");
     

      luke.addEventListener('click', () => {
        teamopenLuke.classList.add("active");
      })
      anthony.addEventListener('click', () => {
        teamopenAnthony.classList.add("active");
      })
      fletcher.addEventListener('click', () => {
        teamopenFletcher.classList.add("active");
      })
      checkmarkLuke.addEventListener('click', () => {
        teamopenLuke.classList.remove("active");
      })
      checkmarkAnthony.addEventListener('click', () => {
        teamopenAnthony.classList.remove("active");
      })
      checkmarkFletcher.addEventListener('click', () => {
        teamopenFletcher.classList.remove("active");
      })

