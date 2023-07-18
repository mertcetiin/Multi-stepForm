const nextbtnDOM = document.querySelector('.next-btn');
const main1DOM = document.querySelector('.main-1');
const main2DOM = document.querySelector('.main-2');
const circle1DOM = document.querySelector('.circle1');
const circle2DOM = document.querySelector('.circle2');

nextbtnDOM.addEventListener('click', () => {
    main2DOM.style.display = 'block';
    main1DOM.style.display = 'none';

    circle2DOM.classList.toggle('active');
    circle1DOM.classList.add('active');
});



const planSelectDOM = document.querySelector('.planSelect');
const planCircleDOM = document.querySelector('.planCircle');
const monthlyDOM = document.querySelector('.monthly');
const yearlyDOM = document.querySelector('.yearly');

planCircleDOM.addEventListener('click', () => {
     planCircleDOM.classList.toggle('moved');

     monthlyDOM.classList.toggle('active-monthly');
    // monthlyDOM.classList.remove()
    // yearlyDOM.classList.toggle('active-yearly');
});
 

const goback1DOM = document.querySelector('.go-back1');

goback1DOM.addEventListener('click', () => {
    main1DOM.style.display = 'block';
    main2DOM.style.display = 'none';

    circle2DOM.classList.toggle('active');
    circle1DOM.classList.remove('active');
});



// const nextbtn1DOM = document.querySelector('.next-btn1');

// nextbtn1DOM.addEventListener('click', () => {
    
// })