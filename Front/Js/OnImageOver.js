var images = document.getElementsByClassName("RobotContainer");
console.log(images.length);
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", function(e) {
        document.getElementById(e.target.id + "Text").style.bottom = "0";
        document.getElementById(e.target.id + "Text").style.opacity = "1";
    }); 
    images[i].addEventListener("mouseleave", function(e) {
        document.getElementById(e.target.id + "Text").style.bottom = "-10%";
        document.getElementById(e.target.id + "Text").style.opacity = "0";
    });
}