const input_b=document.getElementById("inp1");
const buttons=document.querySelectorAll("button");
let string=" ";
let arr=Array.from(buttons)
arr.forEach(button =>{
button.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
        
         string=eval(string)
         inp1.value=string
        
        }
        else if(e.target.innerText==="AC"){
        
             string="";  
             inp1.value=string
             return; 
        }else if(e.target.innerText==="DEL"){
        
           string=string.slice(0,-1)
           inp1.value=string
           return; 
        
        }
        
       
        string+=e.target.innerText
        inp1.value=string


})
})
