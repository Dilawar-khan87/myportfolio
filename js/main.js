// This file contains JavaScript code for any interactive features of the website, such as form validation or dynamic content loading.

// Example of a simple form validation function
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}

// Example of dynamic content loading
document.addEventListener('DOMContentLoaded', () => {
    const portfolioSection = document.getElementById('portfolio');
    // Load portfolio items dynamically here
});