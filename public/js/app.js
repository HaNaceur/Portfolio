//Allow to do the typewriter effect

const TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  const i = this.loopNum % this.toRotate.length;
  const fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = "<span class=\"wrap\">"+this.txt+"</span>";

  const that = this;
  let delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  const elements = document.getElementsByClassName("txt-rotate");
  for (var i=0; i<elements.length; i++) {
    const toRotate = elements[i].getAttribute("data-rotate");
    const period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};



//Allow to click on navbarDiv

function navbarDivClickOn(){

  document.querySelector(".navbar__home").addEventListener("click", redirectHomePage);
  function redirectHomePage() {
    window.location.replace("/");
  }

  document.querySelector(".navbar__aboutme").addEventListener("click", redirectAboutmePage);
  function redirectAboutmePage() {
    window.location.replace("/aboutme");
  }

  document.querySelector(".navbar__projects").addEventListener("click", redirectProjectsPage);
  function redirectProjectsPage() {
    window.location.replace("/projects");
  }

  document.querySelector(".navbar__contact").addEventListener("click", redirectContactPage);
  function redirectContactPage() {
    window.location.replace("/contact");
  }


}

navbarDivClickOn();


// mailer

const contactForm = document.querySelector(".app-form");

let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e)=>{
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value ,
    subject: subject.value,
    message: message.value
  };

  console.log(formData);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/contact");
  xhr.setRequestHeader("content-type","application/json");
  xhr.onload = function (){
    console.log(xhr.responseText);
    if(xhr.responseText == "success"){
      alert("Email sent");
      name.value = " " ;
      email.value = " ";
      subject.value = " ";
      message.value = " ";
    }else{
      alert("Something went wrong!");
    }

  };

  xhr.send(JSON.stringify(formData));
});

//Menu Hamburger

/*function menuHamburger (){
  const hamburgerMenu = document.querySelector(".navbar__menu");
  const navbarElm = document.querySelector(".header__navbar");
  hamburgerMenu.addEventListener("click",()=>(
    navbarElm.style.marginLeft = "100%"
  ));
}

menuHamburger();*/
