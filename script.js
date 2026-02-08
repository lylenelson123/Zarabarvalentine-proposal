const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const question = document.getElementById('question');
const successMessage = document.getElementById('success-message');

const carouselItems = document.querySelectorAll('.carousel-item');
const imageCaptions = ['Our car selfie vibes 🚗', 'Our cozy moments together 🏠', 'Our mountain adventure 🏔️'];
let currentIndex = 0;

function showItem(index) {
    carouselItems.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
    document.getElementById('image-caption').textContent = imageCaptions[index];
}

showItem(currentIndex);

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showItem(currentIndex);
    createFallingHearts();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showItem(currentIndex);
    createFallingHearts();
});

yesBtn.addEventListener('click', () => {
    question.innerHTML = '<span class="zara-name">Zara</span>, I knew you\'d say yes! 💕';
    successMessage.classList.remove('hidden');
    noBtn.style.display = 'none';
    yesBtn.textContent = 'I love you! 💝';
    yesBtn.style.pointerEvents = 'none';
    
    for (let i = 0; i < 20; i++) {
        setTimeout(createFallingHearts, i * 100);
    }
});

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

function createFallingHearts() {
    const heartsContainer = document.getElementById('falling-hearts');
    if (!heartsContainer) return;
    
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.textContent = ['❤️', '💕', '💖', '💗', '💝', '💘'][Math.floor(Math.random() * 6)];
    
    const left = Math.random() * window.innerWidth;
    const duration = 5 + Math.random() * 5;
    
    heart.style.left = left + 'px';
    heart.style.animationDuration = duration + 's';
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createFallingHearts, 500);
