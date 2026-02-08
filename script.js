const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const question = document.getElementById('question');
const successMessage = document.getElementById('success-message');
const photoGallery = document.getElementById('photo-gallery');
const heartParticlesContainer = document.getElementById('heart-particles');

let yesSize = 1.2;

// Photo gallery data with captions
const photos = [
    {
        url: 'images/image1.svg',
        caption: 'Our mountain adventure 🏔️'
    },
    {
        url: 'images/image2.svg',
        caption: 'Our cozy moments together 🏠'
    },
    {
        url: 'images/image3.svg',
        caption: 'Our car selfie vibes 🚗'
    }
];

let currentPhotoIndex = 0;

// Initialize photo gallery
function initGallery() {
    const carouselImage = document.getElementById('carousel-image');
    const imageCaption = document.getElementById('image-caption');
    const dotsContainer = document.getElementById('gallery-dots');
    
    // Create dots
    photos.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToPhoto(index));
        dotsContainer.appendChild(dot);
    });
    
    // Set first photo
    updatePhoto();
}

function updatePhoto() {
    const carouselImage = document.getElementById('carousel-image');
    const imageCaption = document.getElementById('image-caption');
    const dots = document.querySelectorAll('.dot');
    
    carouselImage.src = photos[currentPhotoIndex].url;
    imageCaption.textContent = photos[currentPhotoIndex].caption;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPhotoIndex);
    });
}

function goToPhoto(index) {
    currentPhotoIndex = index;
    updatePhoto();
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updatePhoto();
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updatePhoto();
}

// Gallery navigation
document.getElementById('next-btn').addEventListener('click', nextPhoto);
document.getElementById('prev-btn').addEventListener('click', prevPhoto);

// Auto-advance gallery every 4 seconds
setInterval(nextPhoto, 4000);

// Falling hearts animation
function createFallingHeart() {
    const heartsContainer = document.getElementById('falling-hearts');
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.textContent = ['❤️', '💕', '💖', '💗', '💝', '💘'][Math.floor(Math.random() * 6)];
    
    const left = Math.random() * 100;
    const duration = 5 + Math.random() * 5;
    const delay = Math.random() * 2;
    const size = 15 + Math.random() * 15;
    
    heart.style.left = `${left}%`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, (duration + delay) * 1000);
}

// Create falling hearts continuously
setInterval(createFallingHeart, 300);

// Create initial batch of hearts
for (let i = 0; i < 15; i++) {
    setTimeout(createFallingHeart, i * 200);
}

// When the "No" button is hovered, it moves!
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    // Make the Yes button bigger to "help" them choose
    yesSize += 0.2;
    yesBtn.style.transform = `scale(${yesSize})`;
});

// Create heart particles explosion
function createHeartParticles(x, y) {
    const hearts = ['💖', '💕', '💗', '💝', '💘', '❤️', '💓'];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'heart-particle';
        particle.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 100 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        heartParticlesContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
}

// When they finally click "Yes"
yesBtn.addEventListener('click', (e) => {
    // Create heart particles at button position
    const rect = yesBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    createHeartParticles(x, y);
    
    // Update UI
    question.innerHTML = '<span class="zara-name">Zara</span>, I knew you\'d say yes! 💕';
    successMessage.classList.remove('hidden');
    noBtn.style.display = "none";
    yesBtn.textContent = "I love you! 💝";
    yesBtn.style.pointerEvents = "none";
    
    // Create extra falling hearts
    for (let i = 0; i < 30; i++) {
        setTimeout(createFallingHeart, i * 100);
    }
});

// Initialize gallery on load
initGallery();
