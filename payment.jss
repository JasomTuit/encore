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
    });

    document.getElementById('expiry-date').addEventListener('input', function() {
        formatExpiryDate(this);
    });

    document.getElementById('secret-number').addEventListener('input', function() {
        let value = this.value.replace(/\D/g, ''); // Allow only numbers
        this.value = value;
    });
