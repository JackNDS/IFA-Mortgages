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
      const xBtn = document.querySelector(".fa-xmark");
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