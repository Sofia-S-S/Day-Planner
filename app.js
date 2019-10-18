/* variables */
// Show time amd date
function startTime() {
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
  var t = setTimeout(startTime, 500);
  // cheack current hour
  var hourNow = dt.getHours();
  console.log(hourNow);
}
/* helper functions */

/* events */
$(document).ready(function() {
  var dailyTasks = JSON.parse(localStorage.getItem("myDay")) || {};
  console.log(dailyTasks);
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

//compare current hour to task hour and change color
/*if ((hourNow = 9)) {
    $("#hour-9").css("background", "red");
  }
  if ((hourNow = 10)) {
    $("#hour-9").css("background", "gray");
    $("#hour-10").css("background", "red");
  }
  if ((hourNow = 11)) {
    $("#hour-9").css("background", "gray");
    $("#hour-10").css("background", "gray");
    $("#hour-11").css("background", "red");
  }
  if ((hourNow = 12)) {
    $("#hour-9").css("background", "gray");
    $("#hour-10").css("background", "gray");
    $("#hour-11").css("background", "gray");
    $("#hour-12").css("background", "red");
  }
  if ((hourNow = 1)) {
    $("#hour-9").css("background", "gray");
    $("#hour-10").css("background", "gray");
    $("#hour-11").css("background", "gray");
    $("#hour-12").css("background", "gray");
    $("#hour-1").css("background", "red");
  }
  if ((hourNow = 2)) {
    $("#hour-9").css("background", "gray");
    $("#hour-10").css("background", "gray");
    $("#hour-11").css("background", "gray");
    $("#hour-12").css("background", "gray");
    $("#hour-1").css("background", "gray");
    $("#hour-2").css("background", "red");
  }
  if ((hourNow = 3)) {
    $("#hour-9").css("background", "gray");
    $("#hour-10").css("background", "gray");
    $("#hour-11").css("background", "gray");
    $("#hour-12").css("background", "gray");
    $("#hour-1").css("background", "gray");
    $("#hour-2").css("background", "gray");
    $("#hour-3").css("background", "red");
  }
  if ((hourNow = 4)) {
    $("#hour-9").css("background", "gray");
    $("#hour-10").css("background", "gray");
    $("#hour-11").css("background", "gray");
    $("#hour-12").css("background", "gray");
    $("#hour-1").css("background", "gray");
    $("#hour-2").css("background", "gray");
    $("#hour-3").css("background", "gray");
    $("#hour-4").css("background", "red");
  }
  if ((hourNow = 5)) {
    $("#hour-9").css("background", "gray");
    $("#hour-10").css("background", "gray");
    $("#hour-11").css("background", "gray");
    $("#hour-12").css("background", "gray");
    $("#hour-1").css("background", "gray");
    $("#hour-2").css("background", "gray");
    $("#hour-3").css("background", "gray");
    $("#hour-4").css("background", "gray");
    $("#hour-5").css("background", "red");
  }
  if ((hourNow = 5)) {
    $("#hour-9").css("background", "gray");
    $("#hour-10").css("background", "gray");
    $("#hour-11").css("background", "gray");
    $("#hour-12").css("background", "gray");
    $("#hour-1").css("background", "gray");
    $("#hour-2").css("background", "gray");
    $("#hour-3").css("background", "gray");
    $("#hour-4").css("background", "gray");
    $("#hour-5").css("background", "red");
  }*/
/*document.body.textarea.style.backgroundColor = "red";*/
