document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const imageContainer = document.getElementById('imageContainer');

    let yesSize = 1;
    let noSize = 1;

    noButton.addEventListener('click', function() {
        noSize -= 0.1;
        yesSize += 0.2;
        noButton.style.transform = `scale(${noSize})`;
        yesButton.style.transform = `scale(${yesSize})`;
    });

    yesButton.addEventListener('click', function() {
        imageContainer.style.display = 'block';
    });
});