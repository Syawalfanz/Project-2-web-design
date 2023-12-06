function validateForm() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var message = document.getElementById("message").value;

            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            var phonePattern = /^\d{10}$/;

            if (name === "") {
                alert("Name must be filled out");
                return false;
            }

            if (!email.match(emailPattern)) {
                alert("Invalid email address");
                return false;
            }

            if (!phone.match(phonePattern)) {
                alert("Invalid phone number (10 digits required)");
                return false;
            }

            if (message === "") {
                alert("Message must be filled out");
                return false;
            }

            return true;
        }

        function submitform() {
            alert("Thanks for submitting your form.");

        }