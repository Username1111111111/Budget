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

// Income label
let chooseIncome = document.querySelector(".choose-income"),
    // "Do you have savings"-checkbox
    savings = document.querySelector("#savings"),
    // Summ input
    p3 = document.querySelector("#sum"),
    // Right side's output year
    yearValue = document.querySelector(".year-value"),
    // Right side's output month
    monthValue = document.querySelector(".month-value"),
    // Right side's output day
    dayValue = document.querySelector(".day-value");

//----------------------------------------------------------------------------//

let money, time;

startCalc.addEventListener('click', function () {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
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
        rightSideBlockValues[4].textContent += appData.optionalExpenses[i] +  ' ';
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: {},
    detectDayBudget: function () {
        appData.moneyPerDay = +(appData.budget / 30).toFixed();
        alert("Бюджет на 1 день: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay <= 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Хз какой уровень достатка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: {},
    chooseIncome: function () {
        let items;
        for (let i = 0; i < 1; i++) {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
            if (typeof (items) === 'string' && typeof (items) != null && items != '' && typeof (items) != undefined) {
                appData.income = items.split(", ");
                appData.income.push(prompt('Может что-то еще?', ''));
                appData.income.sort();
            } else {
                i--;
            }
        }
        console.log("Способы доп. заработка: ");
        appData.income.forEach((element, index) => {
            console.log(`${index+1}) ${element}`);
        });
    }
};

console.log("Наша программа включает в себя данные: ");
for (let key in appData) {
    console.log(key);
}