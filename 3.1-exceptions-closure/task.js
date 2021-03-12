'use strict';

// Задача №1
function parseCount(str) {
  const result = parseInt(str);
  const error = new Error('Невалидное значение');

  if (result !== result) {
    throw error;
  } else {
    return result;
  }
}

function validateCount(str) {
  try {
    return parseCount(str);
  } catch(error) {
    return error;
  }
}

validateCount('11px');
validateCount('px11');
validateCount(' ');

// Задача №2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.exists = function() {
      if ([a, b, c].some(item => (a + b + c) - item < item)) {
        throw new Error('Треугольник с такими сторонами не существует');
      } else {
        return true;
      }
    }();
  }

  getPerimeter() {
      return +(this.a + this.b + this.c).toFixed(3);
  }

  getArea() {
      const p = this.getPerimeter() / 2;
      return +(Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c))).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(error) {
    return {
      getPerimeter: function() {
        return 'Ошибка! Треугольник не существует';
      },
      getArea: function() {
        return 'Ошибка! Треугольник не существует';
      }
    };
  }
}

getTriangle(10, 10, 30);
console.log(getTriangle(10, 10, 10).getPerimeter());
console.log(getTriangle(10, 10, 20).getArea());