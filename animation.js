const container=document.querySelector(".container")
const box=document.querySelector(".small_con")
const imag=document.querySelector(".image")
const h1=document.querySelector(".heading")
const h2=document.querySelector(".bb")
const button=document.querySelector(".button")
container.addEventListener("mousemove",(e)=>{
    let Apagex=(window.innerWidth/2 - e.pageX)/25;
    let Apagey=(window.innerWidth/2 - e.pageY)/25;
    box.style.transform=`rotateY(${Apagex}deg) rotateX(${Apagey}deg)`;
    

})
//inaminate in
container.addEventListener("mouseenter",(e)=>{
   box.style.transform=`none`
   h1.style.transform="translateZ(150px)";
   h2.style.transform="translateZ(125px)";
   button.style.transform="translateZ(100px)";
   imag.style.transform="translateZ(200px) rotateZ(-45deg)";
   
})
container.addEventListener("mouseleave",(e)=>{
    box.style.transition="0.5s ease-out"
    box.style.transform=`rotateY(0deg) rotateX(0deg)`;
    h1.style.transform="translateZ(0px)";
    h2.style.transform="translateZ(0px)";
   button.style.transform="translateZ(0px)";
   imag.style.transform="translateZ(0px) rotateX(0deg)";

})
