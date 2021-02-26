function add() {
	// get name of item to be added
	const item = document.querySelector("#add").value;

	// if unable to find element or if input field is blank, exit
	if (!item || item === "") {
		// add an error message
		document.querySelector("#error-message").innerHTML =
			"Please enter an item!";
		return;
	}

	// Create new element
	const newElement = document.createElement("li");
	newElement.innerText = item;

	// add the element
	document.querySelector("ul#todo").appendChild(newElement);

	// clear the input field and existing error messages
	document.querySelector("input#add").value = "";
	document.querySelector("#error-message").innerHTML = "";
}
