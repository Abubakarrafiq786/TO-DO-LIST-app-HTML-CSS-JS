const innerBox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addtext(){
    if(innerBox.value === ''){
        alert("Plzz Add a Task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = innerBox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    innerBox.value="";
    saveData();
}

listcontainer.addEventListener("click", function(e) {
    console.log("Clicked element:", e.target);
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("Checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showData(){
    listcontainer.innerHTML  =  localStorage.getItem("data");
}






