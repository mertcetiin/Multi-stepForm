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

    totalService();
});


const iconsBtnDOM = document.querySelector('.icons');
const btnicon1DOM = document.querySelector('.btn-icon1');
const btnicon2DOM = document.querySelector('.btn-icon2');
const btnicon3DOM = document.querySelector('.btn-icon3');

const selectedPlanInfo = document.getElementById('selectedPlanInfo');

iconsBtnDOM.addEventListener('click', (e) => {
    const clickedButton = e.target.closest('button')

    btnicon1DOM.style.backgroundColor = ''
    btnicon2DOM.style.backgroundColor = ''
    btnicon3DOM.style.backgroundColor = '';

    if (clickedButton === btnicon1DOM) {
        btnicon1DOM.style.backgroundColor = 'rgba(233, 247, 252)';
        selectedPlanInfo.textContent = `Arcade `;
    } else if (clickedButton === btnicon2DOM) {
        btnicon2DOM.style.backgroundColor = 'rgba(233, 247, 252)';
        selectedPlanInfo.textContent = 'Advanced ';
    } else if (clickedButton === btnicon3DOM) {
        btnicon3DOM.style.backgroundColor = 'rgba(233, 247, 252)';
        selectedPlanInfo.textContent = 'Pro ';
    }

    isPlan = true;
    planInfo();
    // switchPrice();
    // switchService();

    totalService();
});


const planSelectDOM = document.querySelector('.planSelect');
const planCircleDOM = document.querySelector('.planCircle');
const monthlyDOM = document.querySelector('.monthly');
const yearlyDOM = document.querySelector('.yearly');
const yearlyfreeDOM = document.querySelectorAll('.yearly-free');

const yearlyfeeDOM = document.querySelector('.yearly-fee');
const monthlyfeeDOM = document.querySelector('.monthly-fee');
const yearlyFree = document.querySelectorAll('.yearly-free');


let yearlyFreeVisible = false;

planCircleDOM.addEventListener('click', () => {
    planCircleDOM.classList.toggle('moved');
    monthlyDOM.classList.toggle('active-monthly');
    yearlyDOM.classList.toggle('active-yearly');

    const yearlyfreeDOM = document.querySelectorAll('.yearly-free');

    if (yearlyFreeVisible) {
        yearlyfreeDOM.forEach(element => {
            element.style.display = 'none';
        });
    } else {
        yearlyfreeDOM.forEach(element => {
            element.style.display = 'block';
        });
    }
    yearlyFreeVisible = !yearlyFreeVisible;


    switchPrice();
    switchService();

    planInfo();
    totalService();
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

    totalService();
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

        totalService();
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

    totalService();
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

    totalService();
});


const confirmDOM = document.querySelector('.confirm');
const main5DOM = document.querySelector('.main-5')

confirmDOM.addEventListener('click', () => {
    main4DOM.style.display = 'none'
    main5DOM.style.display = 'block'

    totalService();
})


const yearlyPrice = [90, 120, 150];
const monthlyPrice = [9, 12, 15];
let isyearlyPrice = true

function switchPrice() {
    const prices = document.querySelectorAll(".plan-priced");

    if (isyearlyPrice) {
        prices[0].innerHTML = `$${yearlyPrice[0]}/yr`;
        prices[1].innerHTML = `$${yearlyPrice[1]}/yr`;
        prices[2].innerHTML = `$${yearlyPrice[2]}/yr`;
    } else {
        prices[0].innerHTML = `$${monthlyPrice[0]}/mo`;
        prices[1].innerHTML = `$${monthlyPrice[1]}/mo`;
        prices[2].innerHTML = `$${monthlyPrice[2]}/mo`;
    }
    isyearlyPrice = !isyearlyPrice
}

const yearlyService = [10, 20, 20];
const monthlyService = [1, 2, 2];
let isService = true;

function switchService() {
    const monthlyFee = document.querySelectorAll('.monthly-fee');

    if (isService) {
        monthlyFee[0].innerHTML = `+$${yearlyService[0]}/yr`;
        monthlyFee[1].innerHTML = `+$${yearlyService[1]}/yr`;
        monthlyFee[2].innerHTML = `+$${yearlyService[2]}/yr`;
    } else {
        monthlyFee[0].innerHTML = `+$${monthlyService[0]}/mo`;
        monthlyFee[1].innerHTML = `+$${monthlyService[1]}/mo`;
        monthlyFee[2].innerHTML = `+$${monthlyService[2]}/mo`;
    }
    isService = !isService;
}

let isPlan = true;

function planInfo() {
    const selectedPlanInfo = document.getElementById('selectedPlanInfo');
    const planName = selectedPlanInfo.textContent.trim();
    let planText = planName.replace(/\s*\(.*?\)\s*/g, '');

    if (isPlan) {
        selectedPlanInfo.innerHTML = `${planText} (Yearly)`;
    } else {
        selectedPlanInfo.innerHTML = `${planText} (Monthly)`;
    }
    switchPrice();
    switchService();
}

let totalservicePlan = false;

function totalService() {
    const ons1DOM = document.querySelector('.ons-1');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    if (checkboxes.length > 0) {
        let selectedServices = "";

        checkboxes.forEach(checkbox => {
            const serviceName = checkbox.parentNode.querySelector('.service').innerText;
            selectedServices += `${serviceName} <br> <br>`;
        });

        selectedServices = selectedServices.slice(0, -2);
        ons1DOM.innerHTML = `<h3> ${selectedServices}</h3>`;
    } else {

    }
}