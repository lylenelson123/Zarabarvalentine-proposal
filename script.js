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
    // Change the question text
    question.innerHTML = '<span class="zara-name">Zara</span>, I knew you\'d say yes! 💕';
    successMessage.classList.remove('hidden');
    noBtn.style.display = 'none';
    yesBtn.textContent = 'I love you! 💝';
    yesBtn.style.pointerEvents = 'none';
    
    // Add celebration mode to body (basketball arena background)
    document.body.classList.add('celebration-mode');
    
    // Show celebration container
    const celebrationContainer = document.getElementById('celebration-container');
    if (celebrationContainer) {
        setTimeout(() => {
            celebrationContainer.classList.add('show');
        }, 500);
    }
    
    // Create massive confetti explosion (200+ pieces)
    createConfettiExplosion(250);
    
    // Add pulsing lights
    createPulsingLights();
    
    // Create particle bursts
    createParticleBursts();
    
    // Continue falling hearts
    for (let i = 0; i < 30; i++) {
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

// Create confetti explosion
function createConfettiExplosion(count) {
    const colors = ['#ff69b4', '#ff1493', '#ff6b9d', '#ffc0cb', '#ff85c1', '#e91e63', '#f48fb1', '#ffb6c1'];
    const heartsContainer = document.getElementById('falling-hearts');
    if (!heartsContainer) return;
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random color
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            // Random shape (some rectangles, some circles)
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            } else {
                confetti.style.width = (5 + Math.random() * 10) + 'px';
                confetti.style.height = (15 + Math.random() * 20) + 'px';
            }
            
            // Random position
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10%';
            
            // Random animation duration
            const duration = 3 + Math.random() * 4;
            confetti.style.animationDuration = duration + 's';
            
            // Random rotation speed
            confetti.style.setProperty('--rotate-speed', (Math.random() * 720 - 360) + 'deg');
            
            heartsContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }, i * 20);
    }
}

// Create pulsing lights
function createPulsingLights() {
    const colors = [
        'radial-gradient(circle, rgba(255, 105, 180, 0.8), transparent)',
        'radial-gradient(circle, rgba(255, 20, 147, 0.8), transparent)',
        'radial-gradient(circle, rgba(233, 30, 99, 0.8), transparent)',
        'radial-gradient(circle, rgba(255, 192, 203, 0.8), transparent)'
    ];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const light = document.createElement('div');
            light.classList.add('pulsing-light');
            light.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            // Random position
            light.style.left = Math.random() * window.innerWidth + 'px';
            light.style.top = Math.random() * window.innerHeight + 'px';
            
            // Random animation delay
            light.style.animationDelay = Math.random() * 1 + 's';
            
            document.body.appendChild(light);
            
            // Remove after animation
            setTimeout(() => {
                light.remove();
            }, 8000);
        }, i * 300);
    }
}

// Create particle bursts
function createParticleBursts() {
    const heartParticles = document.getElementById('heart-particles');
    if (!heartParticles) return;
    
    const burstCount = 5;
    const particlesPerBurst = 15;
    
    for (let burst = 0; burst < burstCount; burst++) {
        setTimeout(() => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            for (let i = 0; i < particlesPerBurst; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle-burst');
                
                // Random emoji
                const emojis = ['💖', '💕', '💗', '💝', '✨', '🎉', '🏀', '❤️'];
                particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                particle.style.fontSize = (20 + Math.random() * 20) + 'px';
                
                // Start from center
                particle.style.left = centerX + 'px';
                particle.style.top = centerY + 'px';
                
                // Random direction
                const angle = (Math.PI * 2 * i) / particlesPerBurst;
                const distance = 150 + Math.random() * 200;
                const burstX = Math.cos(angle) * distance;
                const burstY = Math.sin(angle) * distance;
                
                particle.style.setProperty('--burst-x', burstX + 'px');
                particle.style.setProperty('--burst-y', burstY + 'px');
                
                heartParticles.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 1000);
            }
        }, burst * 800);
    }
}

setInterval(createFallingHearts, 500);
