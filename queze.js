const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
]
var index=0
var correct=0
var wrong=0
let data=quizData.length
  
//qertion select from here
const que=document.querySelector("#questionBox")
//options select from here 
const options1=document.querySelector(".aa")
const options2=document.querySelector(".bb")
const options3=document.querySelector(".cc")
const options4=document.querySelector(".dd")
//this isfor select one ooption from here
const input=document.querySelectorAll("input")

// forEach loop for gating data form object and post into index.html page  
const loaqestion =()=>{

//first condition for end the quiz
if(data===index){
  return quizEnd()
}

var info=quizData[index]
//this condition is given for print data into index.htl page
que.innerHTML=`${index+1}) ${info.question}`
options1.innerHTML=`${info.a}`
options2.innerHTML=`${info.b}`
options3.innerHTML=`${info.c}`
options4.innerHTML=`${info.d}`


}

document.querySelector("#submit").addEventListener("click",()=>{
let ans=getanswer()
let date=quizData[index]
if(ans===date.correct){

correct++

}else{
wrong++
}
        index++
        loaqestion()
        remove()
        
})
function remove(){
input.forEach((valu)=>{
 valu.checked=false

})


}

const getanswer=()=>{
let ans="";

input.forEach((check)=>{
  if(check.checked){
      ans=check.value;
  }


 }
)
return ans
}

const gg= document.querySelector("container")[0]
const quizEnd=()=>{
   gg.innerHTML=`  <div class="col">
            <h3 id="questionBox">
                1) Lorem ipsum dolor sit${correct} amet, consectetur adipisicing elit Debitis?
            </h3>
        </div>`

}
loaqestion() 