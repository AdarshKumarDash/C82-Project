canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent, last_x, last_y;
var color, line_width;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouseEvent = "mousedown";
    color = document.getElementById("Color").value;
    if (color == "") {
        color = "red";
    }
    line_width = document.getElementById("line-width").value;
    if (line_width == "") {
        line_width = 3;
    }
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.arc(last_x, last_y, 40, 0, 2*Math.PI);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
