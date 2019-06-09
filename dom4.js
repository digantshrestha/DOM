var btn=document.querySelector(".btnClass");

btn.addEventListener("click", btnClick);

function btnClick(e){
    if(btn.textContent=="show"){
        var items=document.querySelector(".items");
        items.style.display="";
        btn.textContent="hide";
    }else{
        var items=document.querySelector(".items");
        items.style.display="none";
        btn.textContent="show";        
    }
    
}

var form=document.getElementById("myFormId");
var items=document.getElementById("itemsId");

form.addEventListener("submit", addItems);

function addItems(e){
    e.preventDefault();
    var content=document.getElementById("formBar").value;
    if(content==""){
        alert("Please enter value");
    }else{
        var li=document.createElement("li");
        li.className="item";
        li.appendChild(document.createTextNode(content));
        var btnLi=document.createElement("button");
        btnLi.className="cBtn";
        btnLi.appendChild(document.createTextNode("X"));
        li.appendChild(btnLi);
        items.appendChild(li);
        document.getElementById("formBar").value="";
    }
}

var li=document.querySelector("#itemsId");
li.addEventListener("click", close);

function close(e){
    if(e.target.className=="cBtn"){
        e.target.parentElement.remove();
    }
}   

