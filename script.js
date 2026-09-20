function upDate(element) {

    console.log("Mouseover event triggered");

    var image = document.getElementById("image");

    image.style.backgroundImage = "url('" + element.src + "')";
    image.innerHTML = element.alt;
}


function unDo() {

    console.log("Mouseleave event triggered");

    var image = document.getElementById("image");

    image.style.backgroundImage = "none";
    image.innerHTML =
        "Hover over an image below to display it here.";
}


function focusFunction(element) {

    console.log("Focus event triggered");

    var image = document.getElementById("image");

    var img = element.querySelector("img");

    image.style.backgroundImage =
        "url('" + img.src + "')";

    image.innerHTML = img.alt;
}


function blurFunction() {

    console.log("Blur event triggered");

    var image = document.getElementById("image");

    image.style.backgroundImage = "none";
    image.innerHTML =
        "Hover over an image below to display it here.";
}


function addTabFocus() {

    console.log("Page loaded - adding tabindex");

    var figures = document.querySelectorAll("figure");

    for (var i = 0; i < figures.length; i++) {

        figures[i].setAttribute("tabindex", "0");

        console.log(
            "Added tabindex to figure " + (i + 1)
        );
    }
}
