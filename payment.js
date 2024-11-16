function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    value = value.replace(/(.{4})(?=.)/g, '$1 '); // Add space every 4 digits
    input.value = value;
}

function formatExpiryDate(input) {
    let value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4); // Add slash after 2 digits
    }
    input.value = value;
}

document.getElementById('card-number').addEventListener('input', function() {
    formatCardNumber(this);
    validateInputs();
});

document.getElementById('expiry-date').addEventListener('input', function() {
    formatExpiryDate(this);
    validateInputs();
});

document.getElementById('secret-number').addEventListener('input', function() {
    let value = this.value.replace(/\D/g, ''); // Allow only numbers
    this.value = value;
    validateInputs();
});

function validateInputs() {
    const cardNumberInput = document.getElementById('card-number');
    const expiryDateInput = document.getElementById('expiry-date');
    const secretNumberInput = document.getElementById('secret-number');
    const payNowButton = document.querySelector('.button');

    const cardNumber = cardNumberInput.value.trim().replace(/\s/g, '');
    const expiryDate = expiryDateInput.value.trim();
    const secretNumber = secretNumberInput.value.trim();

    if (cardNumber.length === 16 && expiryDate.length === 5 && secretNumber.length === 3) {
        payNowButton.style.pointerEvents = 'auto';
        payNowButton.style.opacity = '1';
        payNowButton.removeAttribute('disabled');
    } else {
        payNowButton.style.pointerEvents = 'none';
        payNowButton.style.opacity = '0.5';
        payNowButton.setAttribute('disabled', 'true');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const payNowButton = document.querySelector('.button');
    payNowButton.style.pointerEvents = 'none';
    payNowButton.style.opacity = '0.5';
    payNowButton.setAttribute('disabled', 'true');

    payNowButton.addEventListener('click', function(event) {
        if (payNowButton.hasAttribute('disabled')) {
            event.preventDefault();
        } else {
            window.location.href = 'success.html';
        }
    });
});