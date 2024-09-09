// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profile-form');
    const submitBtn = document.getElementById('submit-btn');
    const successModal = document.getElementById('success-modal');
    const closeButton = document.querySelector('.close-button');

    // Function to validate form fields
    function validateForm() {
        let isValid = true;

        // Clear previous error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => {
            msg.textContent = '';
            msg.style.display = 'none';
        });

        // Validate First Name
        const firstName = document.getElementById('first-name');
        if (firstName.value.trim() === '') {
            const error = document.getElementById('first-name-error');
            error.textContent = 'First name is required.';
            error.style.display = 'block';
            isValid = false;
        }

        // Validate Last Name
        const lastName = document.getElementById('last-name');
        if (lastName.value.trim() === '') {
            const error = document.getElementById('last-name-error');
            error.textContent = 'Last name is required.';
            error.style.display = 'block';
            isValid = false;
        }

        // Validate Gender
        const gender = document.getElementById('gender');
        if (gender.value === '') {
            const error = document.getElementById('gender-error');
            error.textContent = 'Please select your gender.';
            error.style.display = 'block';
            isValid = false;
        }

        // Validate Bio
        const bio = document.getElementById('bio');
        if (bio.value.trim() === '') {
            const error = document.getElementById('bio-error');
            error.textContent = 'Bio is required.';
            error.style.display = 'block';
            isValid = false;
        }

        return isValid;
    }

    // Function to show success modal
    function showSuccessModal() {
        successModal.style.display = 'block';
    }

    // Function to close success modal
    function closeSuccessModal() {
        successModal.style.display = 'none';
    }

    // Event listener for form submission
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            // Simulate form submission (e.g., send data to server)
            // For demonstration, we'll just show the success modal
            showSuccessModal();

            // Optionally, reset the form
            document.getElementById('profile-form').reset();
            document.getElementById('bio').value = '';
        }
    });

    // Event listener for closing the modal
    closeButton.addEventListener('click', closeSuccessModal);

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target == successModal) {
            closeSuccessModal();
        }
    });
});
