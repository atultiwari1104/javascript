//function collor(){
 //  let cont =document.getElementById("container")
  // console.log(cont) 
   //cont[0].classList.toggle("colorr")
//}
//let c=document.querySelector(".container")
//c.style.color="blue"


//let b=document.querySelectorAll(".container")
//console.log(b)
//b[1].computedStyleMap.color="red" 

let b=document.querySelector("#btn")
b.addEventListener("click",function(){
    alert("add event fire")
    b.computedStyleMap.color="red"
})

