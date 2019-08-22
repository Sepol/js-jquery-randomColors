$(document).ready(function() {
  $("#addBlock").click(function() {
    var randName = GetNumber(0, 0xffffff).toString(16);
    $("#block").prepend(
      "<div class='block " + randName + "'>" + randName + "</div>"
    );
    $("." + randName).css("background", "#" + randName);
  });

  function GetNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
