//back end
function Task(name,category) {
  this.taskName = name;
  this.categoryName = category;
}

//front-end
$(document).ready(function() {
  $("#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTaskName = $("input#new-task-name").val();

    var inputtedCategoryName = $("#new-category-name").val();
    console.log(inputtedCategoryName);

    var newTask = new Task(inputtedTaskName,inputtedCategoryName);
    $("input#new-task-name").val("");
    $("#new-category-name").val("");

    if (inputtedCategoryName === "Business") {
      $("#business-tasks").append("<li><span class= 'task'>" + newTask.taskName + "</span></li>");
    } else if (inputtedCategoryName === "Personal") {
      $("#personal-tasks").append("<li><span class= 'task'>" + newTask.taskName + "</span></li>");
    }

    $(".lists").show();

    $("li").click(function() {
      $(this).addClass('strikethrough');
      //code for toggling back and forth
      // $(this).toggleClass('strikethrough');
});

  })
})
