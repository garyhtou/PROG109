document.querySelector('#myform').addEventListener('submit', validateForm);

function validateForm(e) {
	console.log('VALIDATING FORM');

	// clear previous error messages
	document.getElementById('errorMessages').innerHTML = '';

	var validators = [name, email, message];

	// run all validators, if any is false, don't submit form
	const results = validators.map((v) => v());
	if (
		!results.every((r) => {
			console.log(r);
			return r === true;
		})
	) {
		console.log('Preventing default form submit');
		e.preventDefault();
	}

	// validators
	function name() {
		const value = document.querySelector('#name').value;
		const valid = typeof value !== 'undefined' && value.trim() !== '';

		if (!valid) {
			document.getElementById('errorMessages').innerHTML +=
				'<p>The name is required.</p>';
		}

		return valid;
	}

	function email() {
		const value = document.querySelector('#email').value;
		const valid = value.match(/^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/) !== null;

		if (!valid) {
			document.getElementById('errorMessages').innerHTML +=
				'<p>Email is required and must contain an @ and domain</p>';
		}

		return valid;
	}

	function message() {
		const value = document.querySelector('#message').value;
		const valid = typeof value !== 'undefined' && value.trim() !== '';

		if (!valid) {
			document.getElementById('errorMessages').innerHTML +=
				'<p>The message is required.</p>';
		}

		return valid;
	}
}
