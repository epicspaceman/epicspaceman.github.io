/* var input = document.getElementById("input1");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    if (document.getElementById('input1').value === "show resume") {
        show_image('resume.png');
    }
  }
})

function show_image(src) {
    var img = document.createElement("img");
    img.src = src;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
} */

var i = 0;
var text = 'Hello World!';

function typewriter() {
    if (i < text.length){
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
    }
    setTimeout(typewriter, 150);
}