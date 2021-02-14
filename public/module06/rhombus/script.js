function getVal(elementId) {
	return document.getElementById(elementId).value;
}

function createRhombus(height, colorEven, colorOdd, symbol) {
	console.log(height, colorEven, colorOdd, symbol);
	height = height * 2;

	const display = document.querySelector("#rhombusDisplay");
	var text = "";

	// row
	for (var row = 0; row < height; row++) {
		text += "<div class='rhombusRow'>";
		// col
		const numCols = row < height / 2 ? (row + 1) * 2 : (height - row) * 2;
		for (var col = 1; col <= numCols; col++) {
			const even = (col <= numCols / 2 ? col : col - numCols / 2) % 2 === 0;
			text += `<span style="color: ${
				even ? colorEven : colorOdd
			}">${symbol}</span>`;
		}
		text += "</div>";
	}

	display.innerHTML = text;
}
