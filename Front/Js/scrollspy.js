document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll("section");
    const menu_highlighters = document.querySelectorAll(".HeaderHighlighter");
    const menu_links = document.querySelectorAll(".HeaderLink");
    const headerBlur = document.querySelector("#headerBlur"); 
    const bigLogo = document.querySelector("#WelcomeLogo");
    const smallLogo = document.querySelector("#HeaderLogo");
    const mainPhoto = document.querySelector("#MainPhoto")
    const makeActive = (function (link) {
        menu_highlighters[0].style.left = link == 0 ? "48.4%" : menu_highlighters[link].style.left;
        menu_links[link].style.opacity = 1;
    });


    //const removeActive = (link) => menu_highlighters[link].style.opacity = "0";
    //const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

    const sectionMargin = 200;


    let currentActive = 0;

    window.addEventListener("scroll", () => {
        if($(window).scrollTop() > 350)
        {
            headerBlur.style.height = "6.6vw";
            bigLogo.style.opacity = "0";
            smallLogo.style.opacity = "1";
        }
        else
        {
            headerBlur.style.height = "";
            bigLogo.style.opacity = "";
            smallLogo.style.opacity = "";
        }
        mainPhoto.style.backgroundPositionY = "" + $(window).scrollTop() * 0.5 + "px";
        var current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            current = 5;
        }
        if (current !== currentActive && current != 6) {
            menu_links[currentActive].style.opacity = 0.7;
            currentActive = current;
            makeActive(current);
        }
    });
}, false);