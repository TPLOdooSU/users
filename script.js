document.getElementById('upload-container').addEventListener('click', function() {
    document.getElementById('file-input').click();
});
document.getElementById('file-input').addEventListener('change', function(event) {
    const files = event.target.files;
    const imagePreview = document.getElementById('image-preview');

    Array.from(files).forEach((file) => {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('position-relative', 'd-inline-block', 'mr-5');

            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('img-thumbnail', 'mb-3');
            img.style.width = '100px';

            const removeButton = document.createElement('button');
            removeButton.textContent = '×';
            removeButton.classList.add('btn', 'btn-light', 'position-absolute', 'top-0', 'right-0', 'btn-sm');
            removeButton.style.transform = 'translate(50%, -50%)';
            removeButton.style.borderRadius = '50%';

            // Remove the image on clicking the button
            removeButton.addEventListener('click', function() {
                imgContainer.remove();
            });

            imgContainer.appendChild(img);
            imgContainer.appendChild(removeButton);
            imagePreview.appendChild(imgContainer);
        };

        reader.readAsDataURL(file);
    });
});

