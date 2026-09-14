function upDate(element) {
    console.log("Mouse over");
    console.log(element.alt);
    console.log(element.src);

    document.getElementById("image").innerHTML = element.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + element.src + "')";
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML =
        "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
