//Navbar anim

function navbarElm(){
    const mynavBarAnim=document.getElementById('header__navbar');
    mynavBarAnim.addEventListener("click",navBar);  
  }
  
  function navBar(event){
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
  
  