//TRAVERSING THE DOM

var itemList=document.querySelector("#itemsId");
//parentElement=parentNode//samething 

//PARENTELEMENT
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor="#f4f4f4";

//PARENTNODE
//console.log(itemList.parentNode);
//itemList.parentElement.style.backgroundColor="#f4f4f4";

//CHILDNODE
console.log(itemList.childNodes);//it includes line break

//CHILDREN
console.log(itemList.children);
console.log(itemList.children[0]);//children is like an array
//itemList.children[0].style.backgroundColor="#ccc";

//FIRSTCHILD
console.log(itemList.firstChild);//it includes line break

//FIRSTELEMENTCHILD
console.log(itemList.firstElementChild);
//itemList.firstElementChild.style.color="red";
//itemList.firstElementChild.textContent="hello 1";

//LASTCHILD
console.log(itemList.lastChild);//it includes line break

//LASTELEMENTCHILD
console.log(itemList.lastElementChild);

//NEXTSIBLING
console.log(itemList.nextSibling);//it includes line break

//NEXTELEMENTSIBLING
console.log(itemList.nextElementSibling);

//PREVIOUSSIBLING
console.log(itemList.previousSibling);//it includes line break

//PRVIOUSELEMENTSIBLING
console.log(itemList.previousElementSibling);


//CREATEELEMENT

//create a div
var newDiv=document.createElement("div");

newDiv.className="classDiv";/*creating a class in div
 eg. <div class="classDiv"></div>*/
 newDiv.id="idDiv";/*creating a class in div
 eg. <div id="idDiv"></div>*/

console.log(newDiv);

//adding contents in the created element
//first create a textNode

var content=document.createTextNode("Hello World");

/*now add it to the created element with appendChild 
as we are going to add child in it*/
newDiv.appendChild(content);

//adding the created text content in the DOM

var container=document.querySelector("header .container");
var h1=document.querySelector("header h1");

//container.insertBefore(newDiv, h1);
/**
 * syntax:
 * whereDoYouWantToInsert.insertBefore(whatDoYouWantToInsert, 
 *      beforeWhatDoYouWantToInsert)
 */
//we can style, change text etc of the content that we created

//newDiv.style.color="red";













