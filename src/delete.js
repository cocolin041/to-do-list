//when click delete(the trash can) => remove the whole note (class="exist-task")
//or when cancel the new adding note => delete the whole note (class="add-active")
function Delete(x) {
  var bg_title = x.parentElement.parentElement;
  var exist_task = bg_title.parentElement;
  exist_task.remove();

  var add_task = document.getElementById("add-task");
  add_task.style.display = "block";

  count_task_fn();
}