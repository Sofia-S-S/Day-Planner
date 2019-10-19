/* variables */
// Show time amd date
function startTime() {
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
  var t = setTimeout(startTime, 500);
  // cheack current hour
  var hourNow = dt.getHours();

  //compare current hour to task hour and change color
  $(".timeBlock").each(function() {
    var blockHour = parseInt($(this).attr("id"));
    /* color the tr present*/
    if (blockHour > hourNow) {
      $(this)
        .children("td")
        .eq(1)
        .children("textarea")
        .attr("style", "background: gray");
    } else if (blockHour === hourNow) {
      /* color the tr past*/
      $(this)
        .children("td")
        .eq(1)
        .children("textarea")
        .attr("style", "background: red");
    } else {
      /* color the tr past*/
      $(this)
        .children("td")
        .eq(1)
        .children("textarea")
        .attr("style", "background: yellow");
    }
  });
}
/* helper functions */

/* events */
$(document).ready(function() {
  var dailyTasks = JSON.parse(localStorage.getItem("myDay")) || {};

  /* clicking save button */
  $(".js-save").on("click", function() {
    /* get the key and the value */
    var key = $(this).data("key");
    var value = $(`#${key}`).val();

    // save it local storage
    dailyTasks[key] = value;
    localStorage.setItem("myDay", JSON.stringify(dailyTasks));
    /*if (hourNow < dailyTasks[key]) {
        alert("green");
      }*/
  });
  /* init */

  /* pull from local storage */
  $("#hour-9").val(dailyTasks["hour-9"]);
  $("#hour-10").val(dailyTasks["hour-10"]);
  $("#hour-11").val(dailyTasks["hour-11"]);
  $("#hour-12").val(dailyTasks["hour-12"]);
  $("#hour-1").val(dailyTasks["hour-1"]);
  $("#hour-2").val(dailyTasks["hour-2"]);
  $("#hour-3").val(dailyTasks["hour-3"]);
  $("#hour-4").val(dailyTasks["hour-4"]);
  $("#hour-5").val(dailyTasks["hour-5"]);
});
