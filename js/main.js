let startCalc = document.getElementById('start');

let rightSideBlock = document.querySelector('div.result');
let rightSideBlockValues = [...rightSideBlock.querySelectorAll('div[class$="-value"]')];

// for (let i = 0; i < rightSideBlockValues.length; i++ ) {
// 	console.log(rightSideBlockValues[i]);
// }

let inputs = document.getElementsByClassName('expenses-item');

let butns = document.getElementsByTagName("button"),
    expenses = butns[0],
    optExpenses = butns[1],
    countBtn = butns[2];

let optexs = document.querySelectorAll(".optionalexpenses-item");

let p1 = document.querySelector(".choose-income"),
    p2 = document.querySelector("#savings"),
    p3 = document.querySelector("[for='sum']"),
    p4 = document.querySelector(".year-value"),
    p5 = document.querySelector(".month-value"),
    p6 = document.querySelector(".day-value");