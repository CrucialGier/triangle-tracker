$(document).ready(function() {
  $("#submit").click(function(event) {
    var length1 = parseInt($("#first-length").val());
    var length2 = parseInt($("#second-length").val());
    var length3 = parseInt($("#third-length").val());

    if (length1 === length2 && length1 === length3) {
      $("#result").text("equilateral");
    } else if ((length1 + length2) <= length3 || ((length2 + length3)) <= length1 || ((length1 + length3) <= length2)) {
      $("#result").text("non-existant")
    } else if (length1 === length2 || length2 === length3 || length3 === length1) {
      $("#result").text("isosceles");
    } else if (length1 !== length2 && length1 !== length3 && length2 !== length3) {
      $("#result").text("scalene");
    };

    event.preventDefault();
  });
});
