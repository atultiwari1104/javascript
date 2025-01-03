//three type class id tag  always return single node
//  getElementsbyclassName=using node list and node list is form the array 
//name[index value].innerHtml=using for changing the content with the tages
//name[index value].textcontent=only for content
//ECMA==is a standerd for scripting langauge including javascript actionscript 
//ECMA full form is European Computer Manufacturers Association
//HOSITING==is a built in a langauge behaviour that moves variable funcation and class decleration to the top of their scope before code executation
//ES6

let head=document.getElementById("head")
console.log(head)
document.write("<h1>hello i am atul</h1>")
Document.write("hello from js")


let content=document.getElementsByClassName("content")
console.log(content)
content[0].innerHTML="<i>hello</i>"
content[1].textContent="hello i am atul"

