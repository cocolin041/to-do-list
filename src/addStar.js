//when click star => if the star is black (make it orange), if it's orange (make it black)
function addStar(x) {
  var bg_title = x.parentElement.parentElement;
  var star_task = bg_title.parentElement;
  //if the task is delete, 
  if (x.previousElementSibling.previousElementSibling.nodeName === "DEL") {
    return;
  } else if (x.className === "fas fa-star star-black") {
    x.className = "fas fa-star star-orange";
    bg_title.style.background = "#FFF2DC";
  } else {
    x.className = "fas fa-star star-black";
    bg_title.style.background = "#F2F2F2";
  }
  //everytime click star, check the star position once
  moveStarUp();
}