"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    // Проверяем корректность поля percent
    if (!percent && percent !== 0) return 'Заполните поле "Процентная ставка"';
    percent = 0.01 * percent;
    if (percent < 0) return 'Процентная ставка по кредиту не может быть отрицательной';
    if (typeof percent !== 'number' || percent !== percent) return 'Некорректные данные в поле "Процентная ставка"';

    // Проверяем корректность поля contribution
    if (!contribution && contribution !== 0) return 'Заполните поле "Начальный взнос"';
    contribution = +contribution;
    if (contribution < 0) return 'Начальный взнос не может быть отрицательным';
    if (typeof contribution != 'number' || contribution != contribution) return 'Некорректные данные в поле "Начальный взнос"';

    // Проверяем корректность поля amount
    if (!amount && amount !== 0) return 'Заполните поле "Общая стоимость"';
    amount = +amount;
    if (amount <= 0) return 'Общая стоимость должна быть больше нуля';
    if (typeof amount != 'number' || amount !== amount) return 'Некорректные данные в поле "Общая стоимость"';

    if (contribution > amount) {
        return 'Сумма начального взноса не может быть меньше суммы кредита';
    }

    // Проверяем корректность поля date
    if (!date.getDate()) return 'Укажите дату погашения кредита';

    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const targetYear = date.getFullYear();
    const targetMonth = date.getMonth();

    let termInMonths = (targetYear - currentYear) * 12 + (targetMonth - currentMonth); // Срок кредита в месяцах

    if (termInMonths === 0) termInMonths = 1; // Если выплата кредита будет в том же месяце, в котором кредит был выдан, то будем считать сроком кредита 1 месяц во избежание математических коллизий.
    if (termInMonths < 0) return 'Срок кредита не может быть отрицательным';

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

    return +totalAmount.toFixed(2);
}

function getGreeting(name) {

    if (!name || !name.trim()) name = 'Аноним';

    return `Привет, мир! Меня зовут ${name}.`;
}
