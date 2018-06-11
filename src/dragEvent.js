function drag(ev) {
  ev.target.id = "drag";
  ev.dataTransfer.setData("div", ev.target.id);
}
function createDiv(ev) {
  var check_new_div = document.getElementsByClassName("new-div");
  if (check_new_div.length === 0) {
    var this_task = ev.target;
    var new_div = document.createElement("DIV");
    new_div.addEventListener("ondrop", drop(event));
    new_div.addEventListener("ondragover", allowDrop(event));
    new_div.className = "new-div";
    ev.target.parentElement.parentElement.insertBefore(new_div, ev.target.parentElement);
    
  } else {
    
    
    check_new_div[0].remove();
    var this_task = ev.target;
    var new_div = document.createElement("DIV");
    new_div.className = "new-div";
    ev.target.parentElement.parentElement.insertBefore(new_div, ev.target.parentElement);
    
  }
}
function allowDrop(ev) {
  ev.preventDefault();
}
function drop(ev) {
  console.log("drop");
  
  ev.preventDefault();
  var data = ev.dataTransfer.getData("div");
  ev.target.appendChild(document.getElementById(data));
  
}