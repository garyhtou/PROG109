// clear page of dots
document.querySelector("#clear").addEventListener("click", function (event) {
	Array.prototype.slice
		.call(document.querySelectorAll("div.dot"))
		.forEach((e) => e.parentNode.removeChild(e));

	// Let us stop the propagation of events
	event.stopPropagation();
});

// add dots on click
addEventListener("click", function (e) {
	const dot = document.createElement("div");
	dot.className = "dot";
	dot.style.backgroundColor = color;
	dot.style.height = size;
	dot.style.width = size;
	dot.style.left = e.pageX + "px";
	dot.style.top = e.pageY + "px";
	document.body.appendChild(dot);
});

// allow color selection
var color = "#4842f5";
const colorInput = document.querySelector("#color");
// set init color
colorInput.value = color;
// update var on color change
colorInput.addEventListener("input", (e) => {
	const newColor = e.target.value;
	color = newColor;
});

// allow size selection
var size = "10px";
const sizeInput = document.querySelector("#size");
// set init size
sizeInput.value = size.replace("px", "");
// update var on color change
sizeInput.addEventListener("input", (e) => {
	const newSize = e.target.value;
	size = newSize + "px";
});
