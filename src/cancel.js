//when click cancel => close content & button
//if it's on the new adding note => delete the editing note
function Cancel(x) {
  var cancel_add_btn = x.parentElement;
  var bg_content = cancel_add_btn.previousElementSibling;
  var add_task = document.getElementById("add-task");
  
  //if the cancel is on the new adding note, but not add task
  if (x.parentElement.parentElement.className === "add-active") {
    var bg_title = bg_content.previousElementSibling;
    var title_right = bg_title.children[1];
    var trashcan = title_right.children[3];
    Delete(trashcan);
    add_task.style.display = "block";

  } else { 
    //if it's on normal note
    bg_content.style.display = "none";
    cancel_add_btn.style.display = "none";
    add_task.style.display = "block";
  
    //change pen color => black
    var bg_title = bg_content.previousElementSibling;
    var pen = bg_title.children[1].children[1];
    pen.style.color = "black";
  }
}