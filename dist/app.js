const nextbtnDOM = document.querySelector('.next-btn');
const main1DOM = document.querySelector('.main-1');
const main2DOM = document.querySelector('.main-2');
const circle1DOM = document.querySelector('.circle1');
const circle2DOM = document.querySelector('.circle2');
const step2DOM = document.querySelector('.step2')


nextbtnDOM.addEventListener('click', () => {
    main2DOM.style.display = 'block'
    main1DOM.remove();

})