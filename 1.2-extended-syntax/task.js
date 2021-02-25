'use strict';

function getResult(a, b, c) {

    a = +a;
    b = +b;
    c = +c;

    if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number') {
        console.error('Некорректно заданы аргументы');
        return;
    }

    const result = [];

    let D = Math.pow(b, 2) - 4 * a * c;

    if (D === 0) result.push((-b / 2 * a));
    if (D > 0) {
        result.push(((-b + Math.sqrt(D)) / (2 * a)));
        result.push(((-b - Math.sqrt(D)) / (2 * a)));
    }

    return result;
}

function getAverageMark(marks) {

    let num = marks.length;

    if (num === 0) return 0;

    const totalCount = marks.slice(0, 5).reduce((sum, cur) => sum += cur);

    return (num < 5) ? totalCount / num : totalCount / 5;

}

function askDrink(name, dateOfBirthday) {

    let currentDate = new Date();

    const currentYear = currentDate.getFullYear();

    const birthYear = dateOfBirthday.getFullYear();

    const majorityAge = 18;
 
    if (currentYear >= birthYear + majorityAge) {
        return(`Не желаете ли олд-фэшн, ${name}?`)
    } else {
        return(`Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`)
    }
}