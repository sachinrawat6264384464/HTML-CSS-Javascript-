const btn=document.querySelector(".button")
const type=document.querySelector("#type")
const card=document.querySelector(".card")
let change=0
btn.addEventListener("click",function(){
   if(change==0){
     btn.style.backgroundColor="red"
     btn.innerText="Unfollow"
     card.style.backgroundColor=""
         
     type.innerText="Friends"
     change=1
     }else{
      btn.style.backgroundColor="rgb(30, 83, 206)"
      btn.innerText="Follow"
      type.style.backgroundColor=""
      card.style.backgroundColor=""
      type.innerText="stranger"
      change=0
     
     }

})
//second for love  and like button start form here
const  con=document.querySelector(".card2")
const love=document.querySelector("#i")

con.addEventListener("dblclick", function(){
    love.style.transform="translate(-50%, -50%) scale(1)"
    love.style.opacity="0.8"
    love.style.color="red"
    love2.style.color="red"
    setTimeout(function(){
     love.style.transform="translate(-50%, -50%) scale(0)"
    }, 1000);
    setTimeout(function(){
     love.style.transform="translate(-50%, -50%) scale(0)"
    }, 2000);
    



})
//for like button start form here
const love2= document.querySelector("#love")
let click1 = true
love2.addEventListener("click", function(){
     if(click1==true){
     love2.style.color="red"
     
     
     click1=false
     }else{
     love2.style.color=""
    
     click1=true
     }  

})
// cursor code stqrt from here on
const crcr=document.querySelector(".cursor");
const body=document.querySelector(".main")
 body.addEventListener("mousemove",function(move){
 crcr.style.left=move.x+"px"
 crcr.style.top=move.y+"px"
 
 
 
 })   