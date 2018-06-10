function changeStatus(x) {
  var in_progress = document.getElementsByClassName("in-progress");
  var complete = document.getElementsByClassName("complete");

  //clear all active
  var nav = x.parentElement.children;
  for (i = 0; i < nav.length; i++) {
    nav[i].className = "";
  }
  // add active class name only to the clicked status
  x.className = "active";

  if (x.children[0].innerHTML === "My Tasks") {

    // show all in-progress tasks
    for (i = 0; i < in_progress.length; i++) {
      in_progress[i].style.display = "block";
    }

    // show all complete tasks
    for (i = 0; i < complete.length; i++) {
      complete[i].style.display = "block";
    }

  } else if (x.children[0].innerHTML === "In Progress") {

    //show all in-progress tasks
    for (i = 0; i < in_progress.length; i++) {
      in_progress[i].style.display = "block";
    }

    //hide all complete tasks
    for (i = 0; i < complete.length; i++) {
      complete[i].style.display = "none";
    }

  } else {

    //hide all in-progress tasks
    for (i = 0; i < in_progress.length; i++) {
      in_progress[i].style.display = "none";
    }

    //show all complete tasks
    for (i = 0; i < complete.length; i++) {
      complete[i].style.display = "block";
    }

  }
}