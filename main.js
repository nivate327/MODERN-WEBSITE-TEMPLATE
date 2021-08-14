let btnscroll=document.getElementById("btnscroll");

window.onscroll=function(){
  scrollTopFunction();
}

const scrollTopFunction=()=>
{
  if(document.body.scrollTop>20 || document.documentElement.scrollTop>20)
  {
   btnscroll.style.display="block"; 
  }
  else{
    btnscroll.style.display="none";
  }
}

let up=()=>
{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}
