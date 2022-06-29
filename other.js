var red = document.getElementById('menu');
const nav = document.querySelector('.overlay-nav-main-wrap');
const topcontainer = document.querySelector('.top-container2');
const burger = document.querySelector('.hamburger');

    menu.addEventListener('click', menuActive);

    function menuActive(){
        nav.classList.toggle('nav-open');
        topcontainer.classList.toggle('nav-open');
        burger.classList.toggle('open');

    };

      const formInputs = document.querySelectorAll(".floating-contact-form .form-container .form-input");
      const contactIcon = document.querySelector(".floating-contact-form .contact-icon");
      const formContainer = document.querySelector(".floating-contact-form .form-container");
      const xBtn = document.querySelector(".menu-close");
      const contactBtn1 = document.querySelector(".contact-button1")
      const contactBtn2 = document.querySelector(".contact-button2")
     

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


      /* Intersection Observers */
      const cards = document.querySelectorAll('.choose-us-card');
      const cards2 = document.querySelectorAll('.card');
      const teammembers = document.querySelectorAll('.team-member2');

      const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px'
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

