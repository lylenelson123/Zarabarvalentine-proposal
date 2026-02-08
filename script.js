// Get button elements
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// Carousel items
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Function to show a specific item
function showItem(index) {
    carouselItems.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
}

// Show the first item initially
showItem(currentIndex);

// Next button click handler
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showItem(currentIndex);
    createFallingHearts();
});

// Previous button click handler
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showItem(currentIndex);
    createFallingHearts();
});

// Yes button click handler
yesBtn.addEventListener('click', () => {
    alert('You clicked Yes!');
});

// No button click handler
noBtn.addEventListener('click', () => {
    alert('You clicked No!');
});

// Function to create falling hearts animation
function createFallingHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animation = 'fall 2s ease-in';
    document.body.appendChild(heart);

    // Remove heart after animation
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// CSS for hearts animation
const style = document.createElement('style');
style.textContent = `
    .heart {
        width: 20px;
        height: 20px;
        background: red;
        position: absolute;
        top: 0;
        opacity: 0.8;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    @keyframes fall {
        to {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);