document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll("section");
    const menu_links = document.querySelectorAll(".HeaderLink");
    const makeActive = (function(link) {
        menu_links[link].style.opacity = 1;
        console.log("Making Active " + link);
    });


    //const removeActive = (link) => menu_highlighters[link].style.opacity = "0";
    //const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
    const sectionMargin = 300;


    let currentActive = 0;

    window.addEventListener("scroll", () => {
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