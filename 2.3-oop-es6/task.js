'use strict';

// Задача №1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    if (this.state * 1.5 > 100) {
      this._state = 100;
    } else {
      this._state = this.state * 1.5;
    }
  }

  set state(stateValue) {
    if (stateValue <= 0) {
      this._state = 0;
    } else if (stateValue >= 100) {
      this._state = 100;
    } else {
      this._state = stateValue;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'detective';
  }
}

// Задача №2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(key, value) {
    // Здесь мы ищем все книги, подходящие под условия. В реальных условиях наверное было бы правильно предположить, что подходящих книг может быть больше, чем одна и вернуть пользователю список.
    const result = this.books.filter(book => book[key] === value);
    // Поскольку условия тестов предполагают наличие только одной подходящей книги, то возвращаем первый и единственный элемент массива.
    return (result.length > 0) ? result[0] : null;
  }

  giveBookByName(bookName) {
    const position = this.books.findIndex((book => book.name === bookName));
    return (position != -1) ? this.books.splice(position, 1)[0] : null;
  }

}

// Задача №3
class StudentLog {
  constructor(name) {
    this.name = name;
    this.grades = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    const incorrectGrades = (/[^1-5]?[1-5]./g);
    if (incorrectGrades.test(grade)) {
      return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`
    } else if (this.grades[subject]) {
      this.grades[subject].push(grade);
      return this.grades[subject].length;
    } else {
      this.grades[subject] = [grade];
      return 1;
    }
  }

  getAverageBySubject(subject) {
    if (Object.keys(this.grades).includes(subject)) {
      return this.grades[subject].reduce((akk, elem) => akk += elem, 0) / this.grades[subject].length;
    } else {
      return 0;
    }
  }

  getTotalAverage() {
      let totalAverage = 0;
      for (let item in this.grades) {
        totalAverage += this.getAverageBySubject(item);
      }
      totalAverage = totalAverage / Object.keys(this.grades).length;
      return totalAverage;
    }  
}

// const log = new StudentLog('Олег Никифоров');

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(15, 'geometry');
// log.addGrade(4, 'geometry');
// log.addGrade(8, 'geometry');
// log.addGrade('p', 'geometry');

// console.log(log.getAverageBySubject('geometry')); // 4.5
// console.log(log.getAverageBySubject('algebra')); // 3
// console.log(log.getAverageBySubject('math')); // 0

// console.log(log.getTotalAverage()); // 3,75

