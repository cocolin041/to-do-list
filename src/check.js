function check(x) {
  var star = x.nextElementSibling.children[2];

  //move to the last
  var bg_title = x.parentElement;
  var exist_task = bg_title.parentElement;
  var title_right = x.nextElementSibling;

  //complete
  if (title_right.children[0].nodeName === "INPUT") {

    //remove the mark => change title-left background to white (checkbox background to white)
    x.style.background = "#4A90E2";
    //change the bg_title background to original
    bg_title.style.background = "#F2F2F2";

    //create delete element
    var del_element = document.createElement("DEL");
    var input_value = title_right.children[0].value;
    del_element.innerHTML = input_value;
    del_element.style.color = "#9B9B9B";
    //replace input element with delete element
    title_right.replaceChild(del_element, title_right.children[0]);

    //change star color => black 
    star.className = "fas fa-star star-black";
    moveStarUp();

    //create add-to-remove to realize insertBefore
    var star_black = document.getElementsByClassName("star-black");
    if (star_black.length > 0) {
      var last_star_black = star_black[star_black.length - 1];
      var count_task = document.getElementById("count-task");
      var last_star_black_task = last_star_black.parentElement.parentElement.parentElement;
      last_star_black_task.parentElement.insertBefore(exist_task, count_task);
      //after insertBefore has been done, remove this created element
    }

    //change task status from in-progress to complete
    x.parentElement.parentElement.className = "exist-task complete";

  } else {
    //remove complete

    //show the mark => change title-left background to blue (checkbox background to blue)
    x.style.background = "white";

    //create input
    var input_element = document.createElement("INPUT");
    input_element.setAttribute("type", "text");
    //let input value same as the delte value
    input_element.value = title_right.children[0].innerHTML;
    //replace delete element with input element
    title_right.replaceChild(input_element, title_right.children[0]);

    //change status from complete to in-progress
    x.parentElement.parentElement.className = "exist-task in-progress";
  }
  //re-distribute task status
  var active = document.getElementsByClassName("active")[0];
  changeStatus(active);

  count_task_fn();
}