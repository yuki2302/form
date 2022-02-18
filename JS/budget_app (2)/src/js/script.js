let expensesItem = document.getElementsByClassName('expenses-item'), // Введите обязательные расходы
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), // Введите необязательные расходы
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2], // Расчет дневного бюджета
    chooseIncome = document.querySelector('.choose-income'), // Введите статьи возможного дохода через запятую
    
    checkSavings = document.querySelector('.savings'), // Есть ли накопления
    chooseSum = document.querySelector('.choose-sum'), // Сумма
    choosePercent = document.querySelector('.choose-percent'), // Процент

    startBtn = document.getElementById('start'), // Начать расчет

    budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;

optionalExpensesBtn.disabled = true;
optionalExpensesItem.disabled = true;
countBudgetBtn.disabled = true;

startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD:', '');
    
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Введите бюджет на месяц:', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    optionalExpensesBtn.disabled = false;
    optionalExpensesItem.disabled = false;
    countBudgetBtn.disabled = false;
});






let appData = {
    budget: money,
    timeData: time

};
