$("#button1").on("click", function() {
    var currentHeight = $("#box").height();
    $("#box").height(currentHeight + 100);
    var currentWidth = $("#box").width();
    $("#box").width(currentWidth + 100);
})

$("#button2").on("click", function() {
    $("#box").css('background-color', 'blue');
})

$("#button3").on("click", function() {
    $("#box").fadeOut("slow");
})

$("#button4").on("click", function() {
    $("#box").height(150);
    $("#box").width(150);
    $("#box").css('background-color', 'orange');
    $("#box").fadeIn();
})

