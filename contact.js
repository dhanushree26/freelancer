// ... rest of your JavaScript ...

// Validate email and phone number fields
function validateForm() {
    // ... existing validation code ...

    // Validate email
    const email = document.getElementById('email');
    if (!isValidEmail(email.value)) {
        const error = document.getElementById('email-error');
        error.textContent = 'Invalid email address.';
        error.style.display = 'block';
        isValid = false;
    }

    // Validate phone number
    const phone = document.getElementById('phone');
    if (!isValidPhoneNumber(phone.value)) {
        const error = document.getElementById('phone-error');
        error.textContent = 'Invalid phone number.';
        error.style.display = 'block';
        isValid = false;
    }

    return isValid;
}

// Function to validate email (you can customize this)
function isValidEmail(email) {
    // Use a regular expression or email validation library
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate phone number (you can customize this)
function isValidPhoneNumber(phoneNumber) {
    // Use a regular expression or phone number validation library
    const phoneRegex = /^\d{10}$/; // Example for 10-digit US phone numbers
    return phoneRegex.test(phoneNumber);
}