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

// Right (output) block
let rightSideBlock = document.querySelector('div.result');

// 0 - Income
// 1 - Day budget
// 2 - Income level
// 3 - Expenses
// 4 - Optional expenses
// 5 - Additional income
// 6 - Month savaings
// 7 - Year savings
let rightSideBlockValues = [...rightSideBlock.querySelectorAll('div[class$="-value"]')];

// 0 - Item1
// 1 - Price1
// 2 - Item2
// 3 - Price2
let inputs = document.getElementsByClassName('expenses-item');

// 0 - OptExp1 
// 1 - OptExp2
// 2 - OptExp3
let optExpenses = document.querySelectorAll(".optionalexpenses-item");

// Income label
let p1 = document.querySelector(".choose-income"),
    // "Do you have savings"-checkbox
    p2 = document.querySelector("#savings"),
    // Summ label
    p3 = document.querySelector("[for='sum']"),
    // Right side's output year
    p4 = document.querySelector(".year-value"),
    // Right side's output month
    p5 = document.querySelector(".month-value"),
    // Right side's output day
    p6 = document.querySelector(".day-value");