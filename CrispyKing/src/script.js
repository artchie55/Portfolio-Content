const carousel = document.getElementById('carousel');

const dragging = (e) => {
    console.log(e.pageX);
}

carousel.addEventListener("mousemove", dragging);


console.log("Hello world!");

document.getElementById("test").innerHTML = 
"The text from the intro paragraph is: "