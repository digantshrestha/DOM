    //EXAMINE THE DOCUMENT OBJECT

//console.dir(document);
/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);

document.title = "JS";
console.log(document.title);// e can change value like this

console.log(document.head);
console.log(document.body);
console.log(document.all);
*/

//GETELEMENTBYID

/*
//console.log(document.getElementById("main-head"));
var id=document.getElementById("main-head");
console.log(document.getElementById("myFormId"));

var head=document.getElementById("main-head");
//head.textContent="hello";
//head.innerText="GoodBye";

var label=document.getElementById("labelId");
console.log(label.textContent);//textContent does not focus on style
console.log(label.innerText);//innerText focus on style

//label.innerHTML="<h1>Add Items</h1>";
//label.style.color="red";//we can change css property of the contents in DOM
*/

//GETELEMENTSBYCLASSNAME

/*
var item=document.getElementsByClassName("item");
console.log(item);
console.log(item[1]);

item[1].textContent=`Item 2 no longer exists`;
item[1].style.fontWeight="bold";
item[1].style.backgroundColor="yellow";
*/

/*
item.style.backgroundColor="red";
this part will not work because item is array and it will have to be looped through
*/ 

//GETELEMENTSBYTAGNAME
/*
var li=document.getElementsByTagName("li");

console.log(li);
console.log(li[3]);

li[3].textContent="text content changed";
li[3].style.fontStyle="italic";

for(i of li){
    i.style.backgroundColor="#f4f4f4";
}
*/

//QUERYSELECTOR

//queryselector only grabs one content and only grabs the firs one
/*
var header=document.querySelector("header");

header.style.backgroundColor="rgb(31, 151, 77)";
header.style.borderBottom="5px solid rgb(71, 69, 69)";

var input=document.querySelector("input");

//input.value="hello world";

var submit=document.querySelector("input[type='submit']");
submit.value="SEND";

var item=document.querySelector(".item");
item.style.color="red";

var lastItem=document.querySelector(".item:last-child");
lastItem.style.color="blue";

var secondItem=document.querySelector(".item:nth-child(2)");
secondItem.style.color="coral";
*/

//QUERYSELECTORALL

var li=document.querySelectorAll("li");

for(var i=0;i<li.length;i++){
    li[i].textContent=`Content ${i+1}`;
}

//alternate selection
var alterOdd=document.querySelectorAll("li:nth-child(odd)");/*this nth-child(odd) is
 a CSS property which selects the child which have odd number of position 
 */
var alterEven=document.querySelectorAll("li:nth-child(even)");/*this nth-child(even) is
 a CSS property which selects the child which have even number of position 
 */

for(var i=0; i<alterOdd.length; i++){
    alterOdd[i].style.backgroundColor="green";
    alterOdd[i].style.color="#fff";
    alterEven[i].style.backgroundColor="black";
    alterEven[i].style.color="#fff";
}
