//when click + add task => create an add-active note
function addTask(x) {
  var add_task = document.getElementById("add-task");

  //div add-active
  var add_active = document.createElement("DIV");
  add_active.className = "add-active";
  
    //div bg-title
    var bg_title = document.createElement("DIV");
    bg_title.className = "bg-title";
      //title-left
      var title_left = document.createElement("DIV");
      title_left.className = "title-left";
      title_left.addEventListener("click", function() {
        check(this);
      })
        //icon check
        var icon_check = document.createElement("I");
        icon_check.className = "fas fa-check"; 
      //finish title_left => append title_left with icon check
      title_left.appendChild(icon_check);

      //title-right
      var title_right = document.createElement("DIV");
      title_right.className = "title-right";
        //input text
        var input_text = document.createElement("INPUT");
        input_text.setAttribute("type", "text");
        input_text.setAttribute("placeholder", "Type Something Here...");
        //icon pen
        var icon_pen = document.createElement("I");
        icon_pen.className = "fas fa-pencil-alt pen";
        icon_pen.addEventListener("click", function() {
          editTask(this);
        });
        icon_pen.style.color = "blue"; //change pen color => blue
        //icon star
        var icon_star = document.createElement("I");
        icon_star.className = "fas fa-star star-black";
        icon_star.addEventListener("click", function() {
          addStar(this);
        });
        //icon trashcan
        var icon_trashcan = document.createElement("I");
        icon_trashcan.className = "fas fa-trash-alt";
        icon_trashcan.addEventListener("click", function() {
          Delete(this);
        });
        //div ico-on-title
        var icon_on_title = document.createElement("DIV");
        icon_on_title.className = "icon-on-title";
          //icon calendar
          var calendar = document.createElement("I");
          calendar.className = "far fa-calendar-alt";
          //icon file
          var file = document.createElement("I");
          file.className = "far fa-file";
          //icon comment
          var comment = document.createElement("I");
          comment.className = "fas fa-comment-dots";
        //finish icon-on-title
        icon_on_title.appendChild(calendar);
        icon_on_title.appendChild(file);
        icon_on_title.appendChild(comment);

        //finish title_right => append title_right with input checkbox, input text, icon pen, icon star
        title_right.appendChild(input_text);
        title_right.appendChild(icon_pen);
        title_right.appendChild(icon_star);
        title_right.appendChild(icon_trashcan);
        title_right.appendChild(icon_on_title);

    //finish bg-title => bg-title append title_left and title_right
    bg_title.appendChild(title_left);
    bg_title.appendChild(title_right);

    //div bg-content
    var bg_content = document.createElement("DIV");
    bg_content.className = "bg-content";

      //div deadline
      var deadline = document.createElement("DIV");
      deadline.className = "deadline";

        //icon calendar
        var calendar = document.createElement("I");
        calendar.className = "far fa-calendar-alt";
        //div null
        var null_div = document.createElement("DIV");
          //text deadline
          var text_deadline = document.createElement("DIV");
          var text_deadline_node = document.createTextNode("Deadline");
          text_deadline.appendChild(text_deadline_node);
          //input date
          var input_date = document.createElement("INPUT");
          input_date.setAttribute("type", "date");
          input_date.setAttribute("placeholder", "yyyy/mm/dd");
          //input time
          var input_time = document.createElement("INPUT");
          input_time.setAttribute("type", "time");
          input_time.setAttribute("placeholder", "hh/mm");

        //finish null div => append div null with text deadline, input date, input time
        null_div.appendChild(text_deadline);
        null_div.appendChild(input_date);
        null_div.appendChild(input_time);

      //finish deadline => append deadline with icon calendar, div null
      deadline.appendChild(calendar);
      deadline.appendChild(null_div);

      //div file-upload
      var file_upload = document.createElement("DIV");
      file_upload.className = "file-upload";
        //icon file
        var icon_file = document.createElement("I");
        icon_file.className = "far fa-file";
        //div null
        var null_div = document.createElement("DIV");
          //text File
          var text_file = document.createElement("DIV");
          var text_file_node = document.createTextNode("File");
          text_file.appendChild(text_file_node);
          //button +
          var button_add = document.createElement("BUTTON");
          var button_add_text = document.createTextNode("+");
          button_add.appendChild(button_add_text);
        //finish div null => append div null with text file and button +
        null_div.appendChild(text_file);
        null_div.appendChild(button_add);

      //finish file-upload => append fileupload with icon_file and div null
      file_upload.appendChild(icon_file);
      file_upload.appendChild(null_div);

      //div comment
      var comment = document.createElement("DIV");
      comment.className = "comment";
        //icon comment
        var icon_comment = document.createElement("I");
        icon_comment.className = "fas fa-comment-dots";
        //div null
        var null_div = document.createElement("DIV");
          //text comment
          var text_comment = document.createElement("DIV");
          var text_comment_node= document.createTextNode("Comment");
          text_comment.appendChild(text_comment_node);
          //input text
          var input_text = document.createElement("INPUT");
          input_text.setAttribute("type", "text");
          input_text.setAttribute("placeholder", "Type your memo here...");
        //finish div null => append div null with text comment and input text
        null_div.appendChild(text_comment);
        null_div.appendChild(input_text);
      //finish div comment => append div comment with icon comment and div null
      comment.appendChild(icon_comment);
      comment.appendChild(null_div);

    //finish bg_content => append bg-content with deadline, file upload, and comment
    bg_content.appendChild(deadline);
    bg_content.appendChild(file_upload);
    bg_content.appendChild(comment);

    //div cancel-add-btn
    var cancel_add_btn = document.createElement("DIV");
    cancel_add_btn.className = "cancel-add-btn";
      //button cancel
      var button_cancel = document.createElement("BUTTON");
      button_cancel.className = "cancel-btn";
      button_cancel.addEventListener("click", function(){
        Cancel(this);
      });
      var button_cancel_text = document.createTextNode("Ｘ Cancel");
      button_cancel.appendChild(button_cancel_text);
      //button add
      var button_add = document.createElement("BUTTON");
      button_add.className = "add-btn";
      button_add.addEventListener("click", function(){
        Save(this);
      });
      var button_add_text = document.createTextNode("＋ Add Task");
      button_add.appendChild(button_add_text);
    //finish cancel-add-btn => append cancel-add-btn with button cancel and button add
    cancel_add_btn.appendChild(button_cancel);
    cancel_add_btn.appendChild(button_add);

  //finish add-active => append add-active with bg-title, bg-content, and cancel-add-btn
  add_active.appendChild(bg_title);
  add_active.appendChild(bg_content);
  add_active.appendChild(cancel_add_btn);
  
  //insert add-active just after #add(before the first children of #to-do-list)
  var to_do_list = document.getElementById("to-do-list");
  to_do_list.insertBefore(add_active, add_task.nextElementSibling);

  //close add bar
  x.style.display = "none";
}