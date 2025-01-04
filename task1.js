let li=document.getElementsByTagName("li")
   for(let i=0;i<=10;i++){
    if(i%2==0){
        console.log(li[i])
       li[i].style.background="red"
    }
    else{
        console.log(li[i])
    } 
 }