//move orange star up, orange stars' position must be put above black stars
function moveStarUp() {
  var star_black = document.getElementsByClassName("star-black");
  var star_orange = document.getElementsByClassName("star-orange");
  var to_so_list = document.getElementById("to-do-list");

  if (star_black.length > 0) {
    var first_star_black = star_black[0];
    var first_star_black_task = first_star_black.parentElement.parentElement.parentElement;
    for (i = 0; i < star_orange.length; i++) {
      var star_orange_task = star_orange[i].parentElement.parentElement.parentElement;
      to_so_list.insertBefore(star_orange_task, first_star_black_task);
    }
  } else {
    var count_task = document.getElementById("count-task");
    for (i = 0; i < star_orange.length; i++) {
      var star_orange_task = star_orange[i].parentElement.parentElement.parentElement;
      to_so_list.insertBefore(star_orange_task, count_task);
    }
  }
}