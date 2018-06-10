function count_task_fn() {
  var in_progress_task = document.getElementsByClassName("in-progress");
  var count_task = document.getElementById("count-task");
  //alert(in_progress_task.length);
  count_task.innerHTML = in_progress_task.length + " tasks left";
}
//setInterval(count_task_fn, 100);