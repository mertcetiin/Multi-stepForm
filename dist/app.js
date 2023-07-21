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

const yearlyfeeDOM = document.querySelector('.yearly-fee');
const monthlyfeeDOM = document.querySelector('.monthly-fee');

let yearlyFreeVisible = false;

planCircleDOM.addEventListener('click', () => {
    planCircleDOM.classList.toggle('moved');
    monthlyDOM.classList.toggle('active-monthly');
    yearlyDOM.classList.toggle('active-yearly');


    if (yearlyFreeVisible) {
        yearlyfreeDOM.forEach(element => {
            element.style.display = 'none';
            yearlyfeeDOM.style.display = 'none';
            monthlyfeeDOM.style.display = 'block';
        });
        yearlyFreeVisible = false;
        const checked = false;
        switchPrice(checked);
    } else {
        yearlyfreeDOM.forEach(element => {
            element.style.display = 'block';
            yearlyfeeDOM.style.display = 'block';
            monthlyfeeDOM.style.display = 'none';
        });
        yearlyFreeVisible = true;
    }
    const checked = true;
    switchPrice(checked);

    selectPlanYearly()
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



const nextbtn2DOM = document.querySelector('.next-btn2');
const main4DOM = document.querySelector('.main-4');
const circle4DOM = document.querySelector('.circle4');

nextbtn2DOM.addEventListener('click', () => {
    main4DOM.style.display = 'block';
    main3DOM.style.display = 'none';

    circle4DOM.classList.toggle('active')
    circle3DOM.classList.remove('active')
});


const goback3DOM = document.querySelector('.go-back3');

goback3DOM.addEventListener('click', () => {
    main3DOM.style.display = 'block';
    main4DOM.style.display = 'none';

    circle3DOM.classList.toggle('active');
    circle4DOM.classList.remove('active');
});

const changeLinkDOM = document.getElementById('changeLink');

changeLinkDOM.addEventListener('click', (e) => {
    e.preventDefault();
    main2DOM.style.display = 'block'
    main4DOM.style.display = 'none'

    circle2DOM.classList.toggle('active');
    circle4DOM.classList.remove('active');
});

selectPlanYearly()

function switchPrice(checked) {
    const yearlyPrice = [90, 120, 150];
    const monthlyPrice = [9, 12, 15];
    const prices = document.querySelectorAll(".plan-priced");
    if (checked) {
        prices[0].innerHTML = `$${yearlyPrice[0]}/yr`;
        prices[1].innerHTML = `$${yearlyPrice[1]}/yr`;
        prices[2].innerHTML = `$${yearlyPrice[2]}/yr`;
        setTime(true)
    } else {
        prices[0].innerHTML = `$${monthlyPrice[0]}/mo`;
        prices[1].innerHTML = `$${monthlyPrice[1]}/mo`;
        prices[2].innerHTML = `$${monthlyPrice[2]}/mo`;
        setTime(false)
    }
}

const checked = false;
switchPrice(checked)


function selectPlanYearly() {
    const planYearly = [10, 20, 20];
    const yearlyFeeElements = document.querySelectorAll('.yearly-fee');

    yearlyFeeElements.forEach((element, index) => {
        element[0].textContent = `+$${planYearly[index]}/yr`;
    });
}