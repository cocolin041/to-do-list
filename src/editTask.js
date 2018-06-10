//when click pencil => open content & button
function editTask(x) {
  var bg_title = x.parentElement.parentElement;
  var bg_content = bg_title.nextElementSibling;
  var cancel_add_btn = bg_content.nextElementSibling;

  bg_content.style.display = "block";
  cancel_add_btn.style.display = "block";

  //change pen color => blue
  x.style.color = "blue";
}