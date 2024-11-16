document.addEventListener('DOMContentLoaded', function() {
    const productImages = document.querySelectorAll('.product-image');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalContent = document.createElement('img');
    modalContent.classList.add('modal-content');
    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';

    modal.appendChild(modalContent);
    modal.appendChild(closeButton);
    document.body.appendChild(modal);

    productImages.forEach(image => {
        image.addEventListener('click', function() {
            modalContent.src = this.src;
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});