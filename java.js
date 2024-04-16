let switch2 = document.querySelector("#switch");
let bodyEl = document.querySelector("body");
let darkmode = false;




    
switch2.addEventListener('change',(Event) =>{
darkmode = Event.target.checked;
if (darkmode) {
    bodyEl.classList.add("dark");
    
}
else{
    bodyEl.classList.remove("dark");
}
}
 ) 