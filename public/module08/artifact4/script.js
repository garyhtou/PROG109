//A name field should only allow alpha characters, a phone field should only accept numbers or numbers and dashes, an email must have the '@' and '.com, .net, etc'.

function validateForm() {
	// clear previous error messages
	document.getElementById("errorMessages").innerHTML = "";

	function firstName() {
		//1) Create variable
		var validFirstname = false;

		//2) read value from HTML
		var firstname = document.getElementById("firstname").value;

		//3) Do validation
		var errorMessages = "";
		if (
			firstname === null ||
			firstname === "" ||
			firstname.length >= 20 ||
			!firstName.match(/^[a-zA-Z]$/)
		)
			errorMessages +=
				"<p>The firstname is required, cannot be greater than 20 characters, and must only comain alpha values</p>";
		else validFirstname = true;

		//4) Send error message to HTML
		document.getElementById("errorMessages").innerHTML += errorMessages;

		//5) return status of each field
		return validFirstname;
	}

	function lastName() {
		//1) Create variable
		var validLastname = false;

		//2) read value from HTML
		var lastname = document.getElementById("lastname").value;

		//3) Do validation
		var errorMessages = "";
		if (
			lastname === null ||
			lastname === "" ||
			lastname.length >= 50 ||
			!firstName.match(/^[a-zA-Z]$/)
		)
			errorMessages +=
				"<p>The firstname is required, cannot be greater than 20 characters, and must only comain alpha values</p>";
		else validLastname = true;

		//4) Send error message to HMTL
		document.getElementById("errorMessages").innerHTML += errorMessages;

		//5) return status of each field
		return validLastname;
	}

	function email() {
		//1) create a variable to control status of each field.  Assume that they are not valid
		var validEmail = false;

		//2) create variables to read the values from html
		const email = document.querySelector("#EMail").value;

		//3) do the validation
		var errorMessages = "";
		if (
			email === "null" ||
			lastname === "" ||
			!email.match(/^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/)
		) {
			errorMessages += "<p>Email is required, must contain a @ and domain</p>";
		} else validEmail = true;
		
		//4) send error messages
		document.getElementById("errorMessages").innerHTML += errorMessages;

		//5) return the status of each field
		return validEmail;
	}

	function phone() {
		//1) create a variable to control status of each field.  Assume that they are not valid
		var validPhone = false;
		//2) create variables to read the values from html 
		const phone = document.getElementById("phone").value;
		
		//3) do the validation
		var errorMessages = "";
if (isNaN(phone) || phone.length <=15 || phone===null || phone==="")
		errorMessages = "<p>Phone number should only contains number and must not be longer than 15 digits"
//send error message. For example errorMessages = "<p>Invalid phone number </p>";
else
  return true; //Or assign the value to a variable. For example validPhone = true;


		//4) send error messages 
		
		//5) return the status of each field

//You can also do pattern matching by using the match() method from the string object
var numbers=/^[0-9]+$/;
if (phone===null||phone ==="" ||phone.length>15|| !phone.match(numbers))
//...
else
//...
	}
}
