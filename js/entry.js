function validateEmail(e) {
	// Event handler for #entryForm submit event
	// A valid email is (at least one number or letter)@(at least one number or letter).(2 letters)
	let regex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-z]{2}/;
	// If email validation fails...
	if (!regex.test(document.getElementById("email").value)) {
		// ... change placeholder message and prevent form submission
		document.getElementById("email").value = "";
		document.getElementById("email").placeholder = "Email is invalid";
		document.getElementById("email").focus();
		e.preventDefault();
	}
}
document.getElementById("entryForm").addEventListener("submit", validateEmail);


