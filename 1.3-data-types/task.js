"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    percent = 0.01 * percent;
    contribution = +contribution;
    amount = +amount;

    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const targetYear = date.getFullYear();
    const targetMonth = date.getMonth();

    let termInMonths = (targetYear - currentYear) * 12 + (targetMonth - currentMonth); // Срок кредита в месяцах

    termInMonths = (termInMonths === 0) ? 1 : termInMonths; // Если выплата кредита будет в том же месяце, в котором кредит был выдан, то будем считать сроком кредита 1 месяц во избежание математических коллизий.

    if ([percent, contribution, amount, termInMonths].some(item => isNaN(item) || item < 0)) {
        console.error('Некорректные данные');
        return;
    }

    if (contribution > amount) {
        console.error('Сумма первоначального взноса больше суммы кредита');
        return;
    }

    const monthlyPercent = percent / 12;
    const creditBody = amount - contribution;

    let monthlyPayment;

    if (percent === 0) {
        // В случае нулевой процентной ставки по кредиту в формуле для расчета ежемесячного платежа происходит деление на 0 и в итоге возвращается NaN. На этот случай нужна другая формула.
        monthlyPayment = creditBody / termInMonths;
    } else {
        monthlyPayment = creditBody * monthlyPercent * (1 + 1 / (((1 + monthlyPercent)**termInMonths) - 1));
    }

    const totalAmount = monthlyPayment * termInMonths;

    console.log(+totalAmount.toFixed(2));
    return +totalAmount.toFixed(2);
}

function getGreeting(name) {

    // Проще, конечно, было бы задать name = 'Аноним' в качестве значения аргумента по умолчанию, но раз уж в условии требуется проверка:)...

    name = (name) ? name : 'Аноним';

    console.log(`Привет, мир! Меня зовут ${name}.`);
    return `Привет, мир! Меня зовут ${name}.`;
}