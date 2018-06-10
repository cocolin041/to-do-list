//when click add task button(save the new adding note) => open task bar, close content & button
function Save(x) {
  var cancel_add_btn = x.parentElement;
  var bg_content = cancel_add_btn.previousElementSibling;
  var add_active = cancel_add_btn.parentElement;
  var add_task = document.getElementById("add-task");
  var bg_title = bg_content.previousElementSibling;
  var title_right = bg_title.children[1];
  var title = title_right.children[0];
  
  if (title.value === "") {
    alert("title cannot be blank");
  } else {

    //if it's a new note => when click add task, move under orange star
    if (x.parentElement.parentElement.className === "add-active") {
      var star_black = document.getElementsByClassName("star-black");
      var to_do_list = document.getElementById("to-do-list");
      if (star_black.length > 0) {
        to_do_list.insertBefore(x.parentElement.parentElement, star_black[star_black.length-1].parentElement.parentElement.parentElement);
      }
      add_active.className = "exist-task in-progress";
      x.innerHTML = "＋ Save";
    }

    add_task.style.display = "block";
    bg_content.style.display = "none";
    cancel_add_btn.style.display = "none";

    //change pen color => black
    var bg_title = bg_content.previousElementSibling;
    var pen = bg_title.children[1].children[1];
    pen.style.color = "black";

    //check whether there's new orange star needs to be moved up
    moveStarUp();

    //create a div to put comment, date, and file icon
    var icon_under_title = document.createElement("DIV");
    icon_under_title.className = "icon-under-title";
    
    checkComment(x);
  }
}
function checkComment(x) {
  var bg_content = x.parentElement.previousElementSibling;
  var icon_on_title = document.getElementsByClassName("icon-on-title")[0];

  //check if there's comment
  var comment = bg_content.children[2];
  var comment_value = comment.children[1].children[1].value;
  if (comment_value !== "") {
    icon_on_title.children[2].style.display = "inline-block";
  } else {
    icon_on_title.children[2].style.display = "none";
  }

  //check if there's date
  var date = bg_content.children[0];
  var date_value = date.children[1].children[1].value;
  if (date_value !== "") {
    icon_on_title.children[0].style.display = "inline-block";
    var date_value = date_value.split("");
    var deadline = date_value[5] + date_value[6] + "/" + date_value[8] + date_value[9];
    var show_date = document.createElement("SPAN");
    show_date.innerHTML = deadline;

    if (icon_on_title.children[0].children.length > 0) {
      icon_on_title.children[0].children[0].remove();
      icon_on_title.children[0].appendChild(show_date);
    } else {
      icon_on_title.children[0].appendChild(show_date);
    }
  } else {
    icon_on_title.children[0].style.display = "none";
  }

  count_task_fn();
}