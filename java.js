const Inputbox = document.getElementById("input-box");
const List = document.getElementById("list");
function Addtask(){
        if(Inputbox.value==''){
        alert('Please enter a task');
    }
    else{
            let li= document.createElement("li");
            li.innerHTML=Inputbox.value;
            List.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
    Inputbox.value="";
    savedata();
} 

List.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data",List.innerHTML)
}
function showlist()
{
    List.innerHTML=localStorage.getItem("data");
}
showlist();
