document.addEventListener('DOMContentLoaded', function() {
    // Photo carousel
    const images = [
        'images/206BF27B-2711-445C-AFD3-E2741D2A99EE.png',
        'images/IMG_6139.jpeg',
        'images/dji_mimo_20250916_164820_20250916164820_1758140453410_photo.jpeg'
    ];
    let currentIndex = 0;

    const imageElement = document.querySelector('#carousel-image');
    const nextButton = document.querySelector('#next-button');
    const prevButton = document.querySelector('#prev-button');

    function updateImage() {
        imageElement.src = images[currentIndex];
    }

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    updateImage();

    // Falling hearts animation
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        document.body.appendChild(heart);
        setTimeout(() => {
            document.body.removeChild(heart);
        }, 3000); // Remove the heart after 3 seconds
    }

    setInterval(createHeart, 500); // Create a heart every half second

    // Yes/No button handlers
    const yesButton = document.querySelector('#yes-button');
    const noButton = document.querySelector('#no-button');

    yesButton.addEventListener('click', function() {
        alert('You clicked YES!');
    });

    noButton.addEventListener('click', function() {
        alert('You clicked NO!');
    });
});
