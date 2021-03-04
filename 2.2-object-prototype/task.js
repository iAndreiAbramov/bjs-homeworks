"use strict";

// Задача №1
String.prototype.isPalindrome = function() {
    const clearString = this.toLowerCase().split('').filter(item => item != ' ').join('');
    const reversedString = clearString.split('').reverse().join('');
    return clearString === reversedString;
};

// Задача №2
function getAverageMark(marks) {
    if (marks.length === 0) return 0;
    const average = marks.reduce((sum, cur )=> sum += cur) / marks.length;
    const roundedAverage = Math.round(average);
    return roundedAverage;
}

// Задача №3
function checkBirthday(birthday) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const birthDate = new Date(birthday);
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    const ageInMonths = (currentYear - birthYear)*12 + (currentMonth - birthMonth); // возраст юзера в месяцах
    const majorityInMonths = 18*12; // превращаем 18 лет в месяцы

    // Если возраст пользователя в месяцах больше 18*12 = 216, то он совершеннолетний
    // Если возраст пользователя в мес. равен 216, то проверяем, наступил ли день его рождения
    return (ageInMonths > majorityInMonths || ageInMonths === majorityInMonths && currentDay >= birthDay);
}