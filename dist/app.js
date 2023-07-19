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


const iconsBtnDOM = document.querySelector('.icons');
const btnicon1DOM = document.querySelector('.btn-icon1');
const btnicon2DOM = document.querySelector('.btn-icon2');
const btnicon3DOM = document.querySelector('.btn-icon3');

iconsBtnDOM.addEventListener('click', (e) => {
    const clickedButton = e.target.closest('button')

    btnicon1DOM.style.backgroundColor = ''
    btnicon2DOM.style.backgroundColor = ''
    btnicon3DOM.style.backgroundColor = '';

    if (clickedButton === btnicon1DOM) {
        btnicon1DOM.style.backgroundColor = 'rgba(233, 247, 252)';
    } else if (clickedButton === btnicon2DOM) {
        btnicon2DOM.style.backgroundColor = 'rgba(233, 247, 252)';
    } else if (clickedButton === btnicon3DOM) {
        btnicon3DOM.style.backgroundColor = 'rgba(233, 247, 252)';
    }
});


const planSelectDOM = document.querySelector('.planSelect');
const planCircleDOM = document.querySelector('.planCircle');
const monthlyDOM = document.querySelector('.monthly');
const yearlyDOM = document.querySelector('.yearly');
const yearlyfreeDOM = document.querySelectorAll('.yearly-free');
let yearlyFreeVisible = false;

planCircleDOM.addEventListener('click', () => {
    planCircleDOM.classList.toggle('moved');
    monthlyDOM.classList.toggle('active-monthly');
    yearlyDOM.classList.toggle('active-yearly');

    if (yearlyFreeVisible) {
        yearlyfreeDOM.forEach(element => {
            element.style.display = 'none';
        });
        yearlyFreeVisible = false;
    } else {
        yearlyfreeDOM.forEach(element => {
            element.style.display = 'block';
        });
        yearlyFreeVisible = true;
    }
});

const goback1DOM = document.querySelector('.go-back1');

goback1DOM.addEventListener('click', () => {
    main1DOM.style.display = 'block';
    main2DOM.style.display = 'none';

    circle2DOM.classList.toggle('active');
    circle1DOM.classList.remove('active');
});



const nextbtn1DOM = document.querySelector('.next-btn1');
const main3DOM = document.querySelector('.main-3')
const circle3DOM = document.querySelector('.circle3');

nextbtn1DOM.addEventListener('click', () => {

    main3DOM.style.display = 'block';
    main2DOM.style.display = 'none';

    circle2DOM.classList.remove('active')
    circle3DOM.classList.toggle('active')
});

const goback2DOM = document.querySelector('.go-back2');

goback2DOM.addEventListener('click', () => {
    main2DOM.style.display = 'block';
    main3DOM.style.display = 'none';

    circle2DOM.classList.toggle('active');
    circle3DOM.classList.remove('active');
});

const checkboxDivs = document.querySelectorAll('.checkbox-label');

checkboxDivs.forEach((checkboxDiv) => {
    checkboxDiv.addEventListener('click', () => {
        const checkbox = checkboxDiv.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;

        if (checkbox.checked) {
            checkboxDiv.querySelector('div').classList.add('selected');
        } else {
            checkboxDiv.querySelector('div').classList.remove('selected');
        }
    });
});