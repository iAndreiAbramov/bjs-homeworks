'use strict';

function getResult(a, b, c) {

    if (typeof (+a) != 'number' || typeof (+b) != 'number' || typeof (+c) != 'number') {
        console.error('Некорректно заданы аргументы');
        return;
    }

    const result = [];

    let D = Math.pow(b, 2) - 4 * a * c;

    if (D === 0) result.push((-b / 2 * a));
    if (D > 0) {
        result.push(((-1*b + Math.pow(D, 0.5)) / (2 * a)));
        result.push(((-1*b - Math.pow(D, 0.5)) / (2 * a)));
    }

    return result;
}

function getAverageMark(marks) {

    let num = marks.length;

    if (num === 0) return 0;

    if (num > 5) {
        return marks.slice(0, 5).reduce((sum, cur) => sum += cur) / 5;
    } else {
        return marks.reduce((sum, cur) => sum += cur) / num;
    }

}

function askDrink(name, dateOfBirthday) {

    let currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    // console.log(currentYear);
    const currentMonth = currentDate.getMonth();
    // console.log(currentMonth);
    const currentDay = currentDate.getDate();
    // console.log(currentDay);

    const birthYear = dateOfBirthday.getFullYear();
    // console.log(dateOfBirthday, birthYear);
    const birthMonth = dateOfBirthday.getMonth();
    // console.log(dateOfBirthday, birthMonth);
    const birthDay = dateOfBirthday.getDate();
    // console.log(dateOfBirthday, birthDay);

    const ageMonths = (currentYear - birthYear) * 12 + (currentMonth - birthMonth);
    // console.log(ageMonths);

    if (ageMonths > 216  || (ageMonths === 216 && currentDay >= birthDay)) {
        alert(`Не желаете ли олд-фэшн, ${name}?`)
    } else if (ageMonths > 0 || (ageMonths === 0 && currentDay >= birthDay)) {
        alert(`Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`)
    } else {
        alert(`Простите, ${name}, но Вы еще не родились. Давайте не будем торопить события.`)
    }
}