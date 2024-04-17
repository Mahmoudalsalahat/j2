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
  let Add = document.querySelector("#Add");
  let addshow1= document.querySelector("#addshow1");
  var formElement = document.getElementById("addshow1");
  const toggle = (show)=>{
    show.style.display = 'block';

  }
  Add.addEventListener("click", function(event) {
    toggle(formElement, Add);})