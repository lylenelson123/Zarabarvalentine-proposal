// Photo Carousel Functionality

const images = [
    'images/206BF27B-2711-445C-AFD3-E2741D2A99EE.png',
    'images/IMG_6139.jpeg',
    'images/dji_mimo_20250916_164820_20250916164820_1758140453410_photo.jpeg',
];

let currentIndex = 0;

function showImage(index) {
    const imageElement = document.getElementById('carousel');
    imageElement.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function initCarousel() {
    showImage(currentIndex);
    document.getElementById('prevButton').addEventListener('click', prevImage);
    document.getElementById('nextButton').addEventListener('click', nextImage);
}

window.onload = initCarousel;

// Optional: Add CSS animations
const imageElement = document.getElementById('carousel');
imageElement.style.transition = 'opacity 0.5s';
setInterval(() => {
    imageElement.style.opacity = '0';
    setTimeout(() => {
        nextImage();
        imageElement.style.opacity = '1';
    }, 500);
}, 5000);