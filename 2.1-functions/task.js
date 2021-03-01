"use strict";

// Задача №1

function getSolutions( a, b, c ) {

  const D = b**2 - 4*a*c;
  let x1, x2;

  const result = {
    D,
    roots : []
  };

  if (D === 0) {
    x1 = - b / (2*a);
    result.roots.push(x1);
  }

  if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2*a);
    x2 = (-b - Math.sqrt(D)) / (2*a);
    result.roots.push(x1);
    result.roots.push(x2);
  }
  
  return result;
}

function showSolutionsMessage(a, b, c) {
  const result = getSolutions(a, b, c);
  const D = result.D;
  const x1 = result.roots[0];
  const x2 = result.roots[1];

  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${D}`);
  if (D < 0) {
    console.log('Уравнение не имеет вещественных корней')
  }
  if (D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${x1}`);
  }
  if (D > 0) {
    console.log(`Уравнение имеет два корня X₁ = ${x1}, X2 = ${x2}`);
  }
}

// showSolutionsMessage(1, 2, 3);
// showSolutionsMessage(7, 20, -3);
// showSolutionsMessage(2, 4, 2);

// Задача №2

function getAverageMark(marks){
  if (marks.length > 0) {
    return marks.reduce((sum, cur) => sum += cur, 0) / marks.length;
  } else {
    return 0;
  }
}

function getAverageScore(data){

  const averageMarks = {
    average: 0,
  };

  if (Object.keys(data).length === 0) {
    return averageMarks;
  }

  let sumOfMarks = 0;
  for (let subject in data) {
    averageMarks[subject] = getAverageMark(data[subject]);
    sumOfMarks += averageMarks[subject];
  }

  averageMarks.average = sumOfMarks / (Object.keys(averageMarks).length - 1);

  return averageMarks;
}

// console.log(getAverageScore({
//   algebra: [2, 4, 5, 2, 3, 4],
//   geometry: [2, 4, 5],
//   russian: [3, 3, 4, 5],
//   physics: [5, 5],
//   music: [2, 2, 6],
//   english: [4, 4, 3],
//   poetry: [5, 3, 4],
//   chemistry: [2],
//   french: [4, 4],
// }));

// console.log(getAverageScore({
//   algebra: [],
//   geometry: [],
//   russian: [],
//   physics: [],
//   music: [],
//   english: [],
//   poetry: [],
//   chemistry: [],
//   french: [],
// }));

// console.log(getAverageScore({}));

// Задача №3

function getPersonData(secretData){

const firstName = getDecodedValue(secretData.aaa);
const lastName = getDecodedValue(secretData.bbb);

  return {
    firstName,
    lastName,
  }
}

function getDecodedValue(secret) {

  const secretName = {
    0: 'Родриго',
    1: 'Эмильо',
  };

  return secretName[secret];
}

// console.log( getPersonData({
//   aaa: 0,
//   bbb: 0,
// }));

// console.log( getPersonData({
//   aaa: 1,
//   bbb: 0,
// }));

// console.log( getPersonData({
//   aaa: 0,
//   bbb: 1,
// }));

// console.log( getPersonData({
//   aaa: 1,
//   bbb: 1,
// }));