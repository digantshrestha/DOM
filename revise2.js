//PARENTELEMENT

var itemList=document.getElementById("itemsId");
//console.log(itemList.parentElement.textContent);

//itemList.parentElement.style.background="red";

//CHILDNODE

console.log(itemList.childNodes[0]);

//CHILDREN
console.log(itemList.children);

for(i of itemList.children){
    console.log(i);
}

//FIRSTCHILD
console.log(itemList.firstChild);//includes line break

//FIRSTELEMENTCHILD
console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent="Content Changed";
//itemList.firstElementChild.style.color="red";

//LASTCHILD
console.log(itemList.lastChild);//includes line break

//LASTELEMENTCHILD
console.log(itemList.lastElementChild.textContent);
//itemList.lastElementChild.textContent="No Value!!!";

//NEXTSIBLING
console.log(itemList.nextSibling);//includes line break

//NEXTELEMENTSIBLING
console.log(itemList.nextElementSibling.textContent);
//itemList.nextElementSibling.textContent="hello";
//console.log(itemList.nextElementSibling.textContent);
//itemList.nextElementSibling.textContent =
//    `${itemList.nextElementSibling.textContent} world`;
//console.log(itemList.nextElementSibling.textContent);

//PREVIOUSSIBLING
console.log(itemList.previousSibling);//includes line break

//PREVIOUSELEMENTSIBLING
console.log(itemList.previousElementSibling);
//var pre1=itemList.previousElementSibling;
/*
var result;
for(var i of pre1.children){
    if(i.value==="Submit"){
        result=i.value;
    }else{
        result="The required value doesnt exist";
    }
}
console.log(result);
*/

//CREATEELEMENT
var newLine=document.createElement("p");
newLine.className="lineClass";
newLine.id="lineId";
console.log(newLine);
var content=document.createTextNode("Text has been added");
newLine.appendChild(content);
console.log(newLine.textContent);

var form=document.querySelector("form");
var input=document.querySelector("form input[type='text']");

//form.insertBefore(newLine, input);







