const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const question = document.getElementById('question');
const image = document.getElementById('display-image');

let yesSize = 1.2;

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

// When they finally click "Yes"
yesBtn.addEventListener('click', () => {
    question.innerHTML = "Yay! See you on the 14th! ❤️";
    image.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHIycXJ6Z3B6Z3B6Z3B6Z3B6Z3B6Z3B6Z3B6Z3B6Z3B6Jm09MQ/c76IJbxTc954WKWicP/giphy.gif";
    noBtn.style.display = "none";
});
