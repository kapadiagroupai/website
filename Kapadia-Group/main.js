$(document).ready(function () {
    console.log("main.js loaded");

    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        console.log("Filtering by:", value);

        if (value == "all") {
            $(".post-box").show("1000");
        } else {
            $(".post-box").hide("1000").filter("." + value).show("1000");
        }
    });
    $(".filter-item").click(function (){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

let header=document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow",window.scrollY > 0);
});
