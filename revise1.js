console.dir(document);

/** 
 * Single selector:
 * getElementById   |   querySelector
 * 
 * Multiple Selector:
 * getElementsByTagName  |   getElementsByClassName |   querySelectorAll
 * 
*/

//GETELEMENTBYID

var id=document.getElementById("main-head");

id.textContent="Hello world";

//GETELEMENTBYTAGNAME

var tag=document.getElementsByTagName("label");
tag[0].textContent="Add User";

var li=document.getElementsByTagName("li");

for(var i=0; i<li.length; i++){
    li[i].textContent=`Id ${i+1}`;
}



//GETELEMENTSBYCLASSNAME

var item=document.getElementsByClassName("item");

console.log(item[0].textContent);
//item[0].textContent="Down";
/*
var btn=document.getElementsByClassName("btn");
console.log(btn[0].value);

btn[0].value="SEND";
*/

//QUERYSELECTOR

var user=document.querySelector(".item");
console.log(user.textContent);
//user.textContent="test";

var btn=document.querySelector("input[type='submit']");
btn.value="SEND";

var head=document.querySelector("header");
head.style.backgroundColor="rgb(31, 151, 77)";
head.style.borderBottom="5px solid rgb(71, 69, 69)";

//QUERYSELECTORALL

var alterOdd=document.querySelectorAll("li:nth-child(odd)");
var alterEven=document.querySelectorAll("li:nth-child(even)");

for(var i=0;i<alterOdd.length;i++){
    console.log(`${alterOdd[i].textContent} ${i}`);
    alterOdd[i].style.backgroundColor="#ccc";
    alterOdd[i].style.color="rgb(71, 69, 69)";
    console.log(`${alterEven[i].textContent} ${i}`);
    alterEven[i].style.backgroundColor="rgb(71, 69, 69)";
    alterEven[i].style.color="#ccc";
}

