const nextbtnDOM = document.querySelector('.next-btn');
const main1DOM = document.querySelector('.main-1');
const main2DOM = document.querySelector('.main-2');
const circle1DOM = document.querySelector('.circle1');
const circle2DOM = document.querySelector('.circle2');
const planSelectDOM = document.querySelector('.planSelect')
const planCircleDOM = document.querySelector('.planCircle');
const monthlyDOM = document.querySelector('.monthly');
const yearlyDOM = document.querySelector('.yearly');

nextbtnDOM.addEventListener('click', () => {
    main2DOM.style.display = 'block'
    main1DOM.remove();

    circle1DOM.classList.add('active');
    circle2DOM.classList.add('active');
});

planCircleDOM.addEventListener('click', () => {
    planCircleDOM.classList.toggle('moved');

    monthlyDOM.classList.toggle('active-monthly');
    yearlyDOM.classList.toggle('active-yearly');
});

