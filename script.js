const photos = [
    'images/206BF27B-2711-445C-AFD3-E2741D2A99EE.png',
    'images/IMG_6139.jpeg',
    'images/dji_mimo_20250916_164820_20250916164820_1758140453410_photo.jpeg'
];

const photoCarousel = document.querySelector('.photo-carousel');
let currentPhotoIndex = 0;

function updateCarousel() {
    photoCarousel.src = photos[currentPhotoIndex];
}

const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');
const heartAnimation = document.querySelector('.heart-animation');

yesButton.addEventListener('click', () => {
    heartAnimation.classList.add('animate');
    setTimeout(() => {
        heartAnimation.classList.remove('animate');
    }, 1000);
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updateCarousel();
});

noButton.addEventListener('click', () => {
    heartAnimation.classList.remove('animate');
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updateCarousel();
});

// Initialize the carousel with the first photo
updateCarousel();
