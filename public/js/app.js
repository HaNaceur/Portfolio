//Allow to do the typewriter effect

const TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
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

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  const that = this;
  let delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  const elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-rotate');
    const period = elements[i].getAttribute('data-period');
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


// Language anim
function animElm(){
  const myProgressAnim=document.getElementById('Progress_Status');
  myProgressAnim.addEventListener("mouseover",progressBar);  
}

function progressBar(event){
  document.getElementById('myprogressBarAn').style.width='80%';
  document.getElementById('myprogressBarAn').style.backgroundColor="var(--lightstellblue)";
  document.getElementById('myprogressBarAn').style.color='black';

  document.getElementById('myprogressBarFr').style.width='100%';
  document.getElementById('myprogressBarFr').style.backgroundColor="var(--lightstellblue)";
  document.getElementById('myprogressBarFr').style.color='black';

  document.getElementById('myprogressBarEs').style.width='40%';
  document.getElementById('myprogressBarEs').style.backgroundColor="var(--lightstellblue)";
  document.getElementById('myprogressBarEs').style.color='black';

  document.getElementById('myprogressBarAr').style.width='30%';
  document.getElementById('myprogressBarAr').style.backgroundColor="var(--lightstellblue)";
  document.getElementById('myprogressBarAr').style.color='black';
  //document.getElementById('myprogressBar').style.transition='color 3s ease background-color 0.5s ease';
}

//Allow to click on navbarDiv

function navbarDivClickOn(){

    document.querySelector(".navbar__home").addEventListener("click", redirectHomePage);
   function redirectHomePage() {
    window.location.replace("/");
   };

   document.querySelector(".navbar__parcours").addEventListener("click", redirectAboutmePage);
   function redirectAboutmePage() {
    window.location.replace("/aboutme");
   };

   document.querySelector(".navbar__projets").addEventListener("click", redirectProjectsPage);
   function redirectProjectsPage() {
    window.location.replace("/projects");
   };

   document.querySelector(".navbar__contacter").addEventListener("click", redirectContactPage);
   function redirectContactPage() {
    window.location.replace("/contact");
   };

   document.querySelector(".navbar__games").addEventListener("click", redirectGamesPage);
   function redirectGamesPage() {
    window.location.replace("/games");
   };

  }

  navbarDivClickOn();


//module.exports=animElm();
//module.exports=titleAnimation();