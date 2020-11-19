var images = document.getElementsByClassName("RobotOrAward");
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", function(e) {
        document.getElementById(event.target.id + "Text").style.opacity = "1";
    });
    images[i].addEventListener("mouseleave", function(e) {
        document.getElementById(event.target.id + "Text").style.opacity = "0.7";
    });
}