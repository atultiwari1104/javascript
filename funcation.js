
/*
function add(num1,num2){
    alert(num2+num1)
}
let num1=parseInt(prompt())
let num2=parseInt(prompt())

add(num2 ,num1)

function demo(){
   
    alert(num1+num2)
}
let num=10;
let num22=20;
console.log(demo())
*/
function code(a){
    return a*a*a
   }
let a=parseInt(prompt())
let ans=code(a)
for(i=0;i<=ans;i++) {
    for(j=0;j<=i;j++){
    document.write("*")
}
document.write("<br>")
}