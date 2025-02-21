const eye=document.querySelector(".small");
      const body=document.querySelector(".big");
      const over=document.querySelector(".overview");
      const cont=document.querySelector("#nv")
      const nav=document.querySelector("#nav")
      const images=document.querySelector(".container")
      const icce=document.querySelector("#icecreame")
      
      let val=true
      eye.addEventListener("click", function(){
        
          if(val==true){
             eye.style.top="6px"
             body.style.backgroundColor="rgb(159, 226, 191) "
             over.style.backgroundColor="#f8ddf2"
             eye.style.backgroundColor="green"
             cont.style.backgroundColor="hotpink"
             move.style.backgroundColor="#f4f4f4"
             movi.style.backgroundColor="rgb(232, 179, 179)"
             mov.style.backgroundColor="rgb(232, 179, 179)"
             mo.style.backgroundColor="rgb(232, 179, 179)"
             m.style.backgroundColor="rgb(232, 193, 193)"
             movv.style.backgroundColor="rgb(232, 179, 179)"
             movi.style.boxShadow="rgb(232, 179, 179) 3px 3px 0px"
             mo.style.boxShadow="rgb(232, 179, 179) 3px 3px 0px"
             mov.style.boxShadow="rgb(232, 179, 179) 3px 3px 0px"
             m.style.boxShadow="rgb(232, 179, 179) 3px 3px 0px"
             movv.style.boxShadow="rgb(232, 179, 179) 3px 3px 0px"
             nav.style.backgroundColor="#f8ddf2"
             images.style.backgroundImage="url(river.jpg)";
             icce.style.backgroundColor ="#edbdbd"
             //like.style.color="white"
             val=false
       
           }else{
       
             eye.style.top=""
             body.style.backgroundColor=""
              over.style.backgroundColor=""
              eye.style.backgroundColor=""
              cont.style.backgroundColor=""
              move.style.backgroundColor=""
              movi.style.backgroundColor=""
             mov.style.backgroundColor=""
             mo.style.backgroundColor=""
             m.style.backgroundColor=""
             movv.style.backgroundColor=""
             nav.style.backgroundColor=""
             images.style.backgroundImage=""
              //like.style.color=""
              val=true
           }
        
    
    })
/*cursor move menet code */
const move=document.querySelector(".move");
const movi=document.querySelector(".movi");
const mov=document.querySelector(".moves");
const mo=document.querySelector(".mo");
const m=document.querySelector(".m");
const movv=document.querySelector(".mov");
const bod=document.querySelector(".big");
bod.addEventListener("mousemove",function(moves){
move.style.left=moves.x+"px"
move.style.top=moves.y+"py"

movi.style.left=moves.x+"px"
movi.style.top=moves.y+"px"
mov.style.left=moves.x+"px"
mov.style.top=moves.y+"px"
mo.style.left=moves.x+"px"
mo.style.top=moves.y+"px"
m.style.left=moves.x+"px"
m.style.top=moves.y+"px"
movv.style.left=moves.x+"px"
movv.style.top=moves.y+"px"
})

/*/templates working for here
const like=document.querySelector("#love3");
const like2=document.querySelector("#love");
let likely=0
like.addEventListener("click",function(){
  if(likely==0){
    like.style.color="red"
    like2.style.color="red"
    likely=1
}else{
    like.style.color=""
    like2.style.color="white"
    likely=0

}
}) */ 
/*
const img=document.querySelector(".img");
img.addEventListener("dblclick",function(){
   like2.style.transform="scale(3)"
   like2.style.opacity="0.9"
   like2.style.color="red"
   like.style.color="red"
   setTimeout(function(){
   like2.style.transform="scale(0)"
   
   },1000)
   setTimeout(function(){
   like2.style.transform="scale(0)"
   
   },2000)

})*/
//api is working from here
const apii = "http://localhost/api.php"
const searchapi="http://localhost/api2.php?search=xyz"
let likely=0
const imagepath="https://example.com/images/vanilla.jpg"
let info =[]
console.log(info)
const getapi = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    info=data.ice_creams || []
    show(info)
    
};

const ice=document.querySelector('#icecreame');

const show=(data)=>{
    ice.innerHTML="";
    data.forEach( (items)=>{
             
             const box=document.createElement("div")
             const imgSrc = items.image.startsWith("http") ? items.image : imagepath + items.image;
               box.classList.add("templates")
               box.innerHTML=`
               <img class="img" src="${imgSrc}">
           <i id="love" class="ri-heart-3-fill"></i>
            <i id="love3" class="ri-heart-3-fill"></i>
            <h4 class="name">${items.name}</h4>
            <h3 class="rate">${items.brand}</h3>
            <h2 class="price">${items.price}</h2>`
            ice.appendChild(box)
                        
               
               
        });
        


document.querySelectorAll(".img").forEach((img) => { 
        img.addEventListener("dblclick", function () {
            let heart = img.nextElementSibling; // ✅ Get nearest heart icon
            heart.style.transform = "scale(3)";
            heart.style.opacity = "0.9";
            heart.style.color = "red";

            setTimeout(() => {
                heart.style.transform = "scale(0)";
            }, 1000);
        });
    });
   
    document.querySelector("#icecreame").addEventListener("click", function (event) {
    if (event.target.id === "love3") { // ✅ Ensure click is on #love3 icon
        let love3 = event.target;

        // Toggle red color on click
        if (love3.style.color === "red") {
            love3.style.color = ""; // Reset to default
        } else {
            love3.style.color = "red"; // Change to red
        }
    }
});
};

const searchbtn = document.querySelector(".search");
if (searchbtn) {
    searchbtn.addEventListener("input", (e) => {
        const values = e.target.value.toLowerCase();
        const fetchinfo = info.filter(item =>
            item.name.toLowerCase().includes(values) || 
            item.brand.toLowerCase().includes(values)
        );
        show(fetchinfo);
    });
}

getapi(apii);











//Call after defining the function

/*/search working
const search=document.querySelector("#btn")
const input=document.querySelector("#nav")
if(search){
        search.addEventListener("click", function(e){
          e.preventDefault();
          console.log("hello",e.value)

        })
    }else{
    
           console.log("path not found")
    }
*/