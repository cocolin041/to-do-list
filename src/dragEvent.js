function drag(ev) {
  ev.target.id = "drag";
  ev.dataTransfer.setData("div", ev.target.id);
}

function allowDrop(ev) {
  ev.preventDefault();
}

var drop = function(ev) {
  
  ev.preventDefault();
  var data = ev.dataTransfer.getData("div");
  
  var new_div = document.getElementsByClassName("new-div")[0];
  new_div.removeEventListener("drop", drop, true);
  new_div.className = document.getElementById(data).parentElement.className;

  var parent = document.getElementById(data).parentElement;
  ev.target.appendChild(parent.children[0]);
  ev.target.appendChild(parent.children[0]);
  ev.target.appendChild(parent.children[0]);

  new_div.children[0].setAttribute("draggable", "true");
  new_div.children[0].addEventListener("dragstart", function(event) {
    drag(event);
  });
  new_div.children[0].addEventListener("dragover", function() {
    createDiv(event);
    allowDrop(event);
  });
  document.getElementById(data).id = "";

  ev.target.style = "null";
  parent.remove();

}

function createDiv(ev) {
  var check_new_div = document.getElementsByClassName("new-div");
  if (check_new_div.length === 0) {

    var new_div = document.createElement("DIV");
    new_div.style.width = "620px";
    new_div.style.height = "70px";
    new_div.style.border = "none";

    new_div.addEventListener("drop", function(event) {
      drop(event);
    }, true);
    new_div.addEventListener("dragover", function(event) {
      allowDrop(event);
    });
    
    new_div.className = "new-div";
    ev.target.parentElement.parentElement.insertBefore(new_div, ev.target.parentElement);
    
  } else {
    
    check_new_div[0].remove();
    var this_task = ev.target;
    var new_div = document.createElement("DIV");
    new_div.style.width = "620px";
    new_div.style.height = "70px";
    new_div.style.border = "none";
    new_div.addEventListener("drop", drop, true);
    new_div.addEventListener("dragover", function(event) {
      allowDrop(event);
    });
    
    new_div.className = "new-div";
    ev.target.parentElement.parentElement.insertBefore(new_div, ev.target.parentElement);
  
  }
}