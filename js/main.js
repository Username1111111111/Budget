// Start calculation button
let startCalc = document.getElementById('start');

// Other buttons
let butns = document.getElementsByTagName("button"),
    // Expenses button
    expensesBtn = butns[0],
    // Optional expenses button
    optExpensesBtn = butns[1],
    // Day budget button
    countDayBudgetBtn = butns[2];
// 3 - Start button

// Right (output) block
let rightSideBlock = document.querySelector('div.result');

// 0 - Budget
// 1 - Day budget
// 2 - Income level
// 3 - Expenses
// 4 - Optional expenses
// 5 - Additional income
// 6 - Month savings
// 7 - Year savings
let rightSideBlockValues = [...rightSideBlock.querySelectorAll('div[class$="-value"]')];

// 0 - Item1
// 1 - Price1
// 2 - Item2
// 3 - Price2
let expensesItem = document.getElementsByClassName('expenses-item');

// 0 - OptExp1 
// 1 - OptExp2
// 2 - OptExp3
let optExpensesItem = document.querySelectorAll(".optionalexpenses-item");

// Optional income label
let chooseOptIncome = document.querySelector(".choose-income"),
    // "Do you have savings"-checkbox
    savingsCheckbox = document.querySelector("#savings"),
    // Summ input
    summValue = document.querySelector("#sum"),
    // Percent input
    percentValue = document.querySelector("#percent"),
    // Right side's output year
    yearValue = document.querySelector(".year-value"),
    // Right side's output month
    monthValue = document.querySelector(".month-value"),
    // Right side's output day
    dayValue = document.querySelector(".day-value");

//----------------------------------------------------------------------------//

let money, time;

startCalc.addEventListener('click', function () {
    money = +prompt("Your monthly budget?");
    time = prompt("Type in Date in format of YYYY-MM-DD", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Your monthly budget?");
    }
    appData.budget = money;
    appData.timeData = time;
    rightSideBlockValues[0].textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i += 2) {
        let a = expensesItem[i].value,
            b = expensesItem[i + 1].value;

        if (typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 2;
        }
    }
    rightSideBlockValues[3].textContent = sum;
});

optExpensesBtn.addEventListener('click', function () {
    let c;
    for (let i = 0; i < optExpensesItem.length; i++) {
        c = optExpensesItem[i].value;
        appData.optionalExpenses[i] = c;
        rightSideBlockValues[4].textContent += appData.optionalExpenses[i] + ' ';
    }
});

countDayBudgetBtn.addEventListener('click', function () {
    appData.moneyPerDay = +(appData.budget / 30).toFixed();
    rightSideBlockValues[1].textContent = appData.moneyPerDay;
    if (appData.moneyPerDay <= 100) {
        rightSideBlockValues[2].textContent = "Minimal income level";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
        rightSideBlockValues[2].textContent = "Average income level";
    } else if (appData.moneyPerDay > 2000) {
        rightSideBlockValues[2].textContent = "High income level";
    } else {
        rightSideBlockValues[2].textContent = "Dunno income level";
    }
});

chooseOptIncome.addEventListener('input', function () {
    let items = chooseOptIncome.value;
    appData.income = items.split(", ");
    rightSideBlockValues[5].textContent = appData.income;
});

savingsCheckbox.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

summValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +summValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100  * percent;

        rightSideBlockValues[6].textContent = appData.monthIncome.toFixed(1);
        rightSideBlockValues[7].textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +summValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100  * percent;

        rightSideBlockValues[6].textContent = appData.monthIncome.toFixed(1);
        rightSideBlockValues[7].textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};