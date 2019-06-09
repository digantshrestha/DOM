//EVENTS
    // var btn1=document.querySelector("input[type='submit']");
    //btn1.addEventListener("click", btnClick);

    // function btnClick(e){
    //     e.preventDefault();//this part is mostly done for input of type submit
    //     console.log("you clicked");
    // }
    //OR
    // btn1.addEventListener("click", (e)=>{
    //     e.preventDefault();
    //     console.log("you clicked");
    // });

    // var btn2=document.querySelector("#btnId");
    // btn2.addEventListener("click", btnClick);

    // function btnClick(e){
    //     var li=document.querySelector(".items");
    //     for(var i=0; i<li.children.length;i++){
    //         if(i%2==0){
    //             li.children[i].style.backgroundColor="#ccc";
    //         }else{
    //             li.children[i].style.backgroundColor="#f4f4f4";
    //         }
    //     }
    //     // console.log(e.target);
    //     // console.log(e.target.id);
    //     // console.log(e.target.className);
    //     // console.log();
    //     // console.log(e.altKey);
    //     // console.log(e.shiftKey);
    //     // console.log(e.ctrlKey);

    //     console.log(e.clientX);/*this lets you know from which 
    //         position in the window(document) the mouse has been clicked in x-axis*/
    //     console.log(e.clientY);/*this lets you know from which 
    //         position in the window(document) the mouse has been clicked in y-axis*/

    //     console.log(e.offsetX);/*this lets you know from which 
    //         position in the element(content) the mouse has been clicked in x-axis*/
    //     console.log(e.offsetY);/*this lets you know from which 
    //         position in the element(content) the mouse has been clicked in y-axis*/
    // }

    //Different mouse events

    // var btn=document.querySelector(".btnClass");
    // btn.addEventListener("dblclick", runEvent);

    // function runEvent(e){
    //     var list=document.querySelector(".items");
    //     for(var i=0; i<list.children.length; i++){
    //         if(i%2==0){
    //             list.children[i].style.backgroundColor="#f4f4f4";
    //         }else{
    //             list.children[i].style.backgroundColor="#ccc";
    //         }
    //     }
    // }

    // var submit=document.querySelector("input[type='submit']");
    // submit.addEventListener("click", sender);

    // function sender(s){
    //     s.preventDefault();
    //     submit.value="Submitted";
    //     submit.style.width="15%";
    //     console.log(submit.style.width);
    //     var list=document.querySelector(".items");
    //     list.style.display="none";
    //     btn.textContent="show";
    // }

    // btn.addEventListener("dblclick", shower);
    // var list=document.querySelector(".items");

    // function shower(){
    //     list.style.display="";
    //     btn.textContent="Click Me";
    // }

    // var box=document.querySelector("#box");
    // box.addEventListener("mousemove", hover);

    // function hover(e){
    //     document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
    //     console.log(e.offsetX+" "+e.offsetY);
    // }

    var input=document.querySelector("input[type='text']");
    var form=document.querySelector("form");

    //input.addEventListener("keydown", runEvent);
    //input.addEventListener("keyup", runEvent);
    // input.addEventListener("focus",runEvent);
    // input.addEventListener("blur",runEvent);
    // input.addEventListener("cut",runEvent);
    // input.addEventListener("paste",runEvent);
    //input.addEventListener("input",runEvent);

    //function runEvent(e){
        // var output=document.getElementById("output");
        // output.innerHTML="<li>"+input.value+"</li>";
        //console.log(e.type);
    //}

    // var select=document.getElementById("selector");
    // select.addEventListener("change", changer);

    // function changer(e){
        
    //     var header=document.querySelector("header");
    //     if(select.value=="1"){
    //         header.style.backgroundColor="red";
    //     }else if(select.value=="2"){
    //         header.style.backgroundColor="blue";
    //     }else if(select.value=="3"){
    //         header.style.backgroundColor="orange";
    //     }else{
    //         header.style.backgroundColor="";
    //     }
    // }

    // form.addEventListener("submit", submitter);

    // function submitter(e){
    //     e.preventDefault();
    //     var sub=document.querySelector("input[type='submit']");
    //     sub.value="Submitted";
    //     sub.style.width="15%";
    // }




    