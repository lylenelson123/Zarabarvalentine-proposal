// photo gallery initialization
const images = ['206BF27B-2711-445C-AFD3-E2741D2A99EE.png', 'IMG_6139.jpeg', 'dji_mimo_20250916_164820_20250916164820_1758140453410_photo.jpeg'];
let currentIndex = 0;

function showImage(index) {
    const imageContainer = document.getElementById('carousel-image');
    imageContainer.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Auto-advance the carousel every 4 seconds
setInterval(nextImage, 4000);

// Button click handlers
document.getElementById('next-button').addEventListener('click', nextImage);
document.getElementById('previous-button').addEventListener('click', previousImage);

// Falling hearts animation
function createFallingHearts() {
    // Heart creation and falling animation logic
}

// No button hover effect
const noButton = document.getElementById('no-button');
noButton.style.pointerEvents = 'none';

// Yes button click handler with heart particles
const yesButton = document.getElementById('yes-button');
yesButton.addEventListener('click', function() {
    createFallingHearts();
    alert("I'm getting u the 14th, be ready :)");
});

// Initialize the first image
showImage(currentIndex);
