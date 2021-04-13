let circle = document.getElementById('circle');
var y;
var x;
const onMouseMove = (e) => {

    x = -5 + e.pageX;
    y = -5 + e.pageY;
    circle.style.transform = "translate(" + x + "px, " + (y) + "px)"
}

document.addEventListener('mousemove', onMouseMove);