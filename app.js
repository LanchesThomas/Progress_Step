// CONST BUTTON
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

// CONST STEP
const steps = document.querySelectorAll('.step');



// CURRENT ACTIVE
let currentActive = 1;
nextButton.classList.add('button-active');

// PROGRESS BAR
const progressBar = document.querySelector('.progress');

steps.forEach((step) => {
    step.classList.add('inactive');
});

// EVENEMENT BOUTON NEXT / PREV
nextButton.addEventListener('click', () => {
    currentActive++;
    prevButton.classList.remove('button-inactive');

    if (currentActive >= steps.length) {
        currentActive = steps.length;
        nextButton.classList.add('button-inactive');
    }

    update();
});

prevButton.addEventListener('click', () => {
    currentActive--;
    nextButton.classList.remove('button-inactive');

    if (currentActive < 1 || currentActive == 1) {
        currentActive = 1;
        prevButton.classList.add('button-inactive');
    }

    update();
});

// FONCTION UPDATE
function update() {
    steps.forEach((step, idx) => {
        if (idx < currentActive) {
            step.classList.add('active');
            step.classList.remove('inactive');
            nextButton.classList.add('button-active');
            prevButton.classList.add('button-active');
        } else {
            step.classList.remove('active');
            step.classList.add('inactive');
        }
    })

    const active = document.querySelectorAll('.active');
    
    progressBar.style.width = (active.length - 1) / (steps.length - 1) * 100 + '%';
}





