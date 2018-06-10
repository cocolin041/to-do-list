function drag(ev) {
  ev.dataTransfer.setData("div", ev.target);
}
function createDiv(ev) {
  var check_new_div = document.getElementsByClassName("new-div");
  if (check_new_div.length === 0) {
    var this_task = ev.target;
    var new_div = document.createElement("DIV");
    new_div.addEventListener("ondrop")
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
