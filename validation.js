function validate(){
   let name=document.getElementById("name").value
   let contact=document.getElementById("contact").value
   let age=document.getElementById("age").value
   let email=document.getElementById("email").value

   if(name==""){
   alert("enter the name")
   document.getElementById("name").focus()
   return false
   }
   else if(contact==""){
    alert("please enter contact number")
     document.getElementById("contact").focus
     return false
   }
   else if(isNaN(contact)){
    alert(" contact number should be in a digets")
    document.getElementById("contact").focus()
    return false
   }
   else if(contact.length>10||contact.length<10){
    alert(" enter valid number")
    document.getElementById("contact").focus()
    return false
   }
   else if(age==""){
    let errorage=document.getElementById("errorage")
    errorage.innerHTML="please fill up this field"
    let a=document.getElementById("errorage").focus()
    return false
   }
   else if(email==""){
    alert(" enter the email")
    document.getElementById("email").focus()
    return false
   }
   else if(!(email.includes("@"))){
    alert(" enter the valid email")
    document.getElementById("email").focus()
    return false
   }

}