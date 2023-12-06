function validateForm() {
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var agreeCheckbox = document.getElementById("agree");
		var interestDropdown = document.getElementsByName("interest")[0];
        var contactMethodDropdown = document.getElementsByName("contactMethod")[0];

        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var phonePattern = /^\d{11}$/;

        if (name === "" || age === "" || phone === "") {
            alert("All fields must be filled out.");
            return false;
        }

		 if (isNaN(age) || parseInt(age) != age) {
            alert("Age must be a valid integer.");
            return false;
        }

        if (!email.match(emailPattern)) {
            alert("Invalid email address.");
            return false;
        }

        if (!phone.match(phonePattern)) {
            alert("Invalid phone number (11 digits required).");
            return false;
        }
		
		if (interestDropdown.value === "Select") {
            alert("Please select an interest option.");
            return false;
        }

        if (contactMethodDropdown.value === "") {
            alert("Please select a contact method.");
            return false;
        }

        if (!agreeCheckbox.checked) {
            alert("Please agree to have your information used solely for medical checks.");
            return false;
        }

        return true;
    }
	function submitform() {
	if (validateForm()){
	alert("Thank you for submitting. Please be patient while we process your form.");
	}
}