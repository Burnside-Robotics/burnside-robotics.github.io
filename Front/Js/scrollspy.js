document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll("section");
    const menu_highlighters = document.querySelectorAll(".HeaderHighlighter");
    const menu_links = document.querySelectorAll(".HeaderLink");
    const headerBlur = document.querySelector("#headerBlur");
    const bigLogo = document.querySelector("#WelcomeLogo");
    const smallLogo = document.querySelector("#HeaderLogo");
    const mainPhoto = document.querySelector("#MainPhoto");
    const infoArea = document.querySelector("#FirstInfoArea");
    const infoLine = document.querySelector("#infoLine");
    const makeActive = (function(link) {
        menu_highlighters[0].style.left = link == 0 ? "44%" : menu_highlighters[link].style.left;
        menu_links[link].style.opacity = 1;
        console.log("Making Active " + link);
    });


    //const removeActive = (link) => menu_highlighters[link].style.opacity = "0";
    //const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
    const sectionMargin = 200;


    let currentActive = 0;

    window.addEventListener("scroll", () => {
        if ($(window).scrollTop() > 250) {
            headerBlur.style.height = "6.6vw";
            bigLogo.style.opacity = "0";
            smallLogo.style.opacity = "1";
            infoArea.style.width = "92vw";
            infoArea.style.marginLeft = "0";
            infoLine.style.opacity = "1";
        } else {
            headerBlur.style.height = "";
            bigLogo.style.opacity = "";
            smallLogo.style.opacity = "";
            infoArea.style.width = "";
            infoArea.style.marginLeft = "";
            infoLine.style.opacity = "";
        }
        mainPhoto.style.backgroundPositionY = "" + $(window).scrollTop() * 0.5 + "px";
        var current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            current = 6;
        }
        if (current !== currentActive && current != 7) {
            menu_links[currentActive].style.opacity = 0.7;
            currentActive = current;
            makeActive(current);
        }
    });
}, false);