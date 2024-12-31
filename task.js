function fn(sum){
     sum=0
while(a>0){
    c=a%10
    sum=sum+c
    a =a/10
}
    console.log(parseInt(sum))
}
let a=parseInt(prompt("enter a number"));
console.log(fn())
