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
    if (this._state * 1.5 > 100) {
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
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
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

// const library = new Library("Библиотека имени Ленина");

// library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
// library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// Задача №3
class StudentLog {
  constructor(name) {
    this.name = name;
    this._grades = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    const incorrectGrades = (/[^1-5]|[1-5]{2}/);
    if (incorrectGrades.test(grade)) {
      return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`
    } else if (this._grades[subject]) {
      this._grades[subject].push(grade);
      return this._grades[subject].length;
    } else {
      this._grades[subject] = [grade];
      return 1;
    }
  }

  getAverageBySubject(subject) {
    if (Object.keys(this._grades).includes(subject)) {
      return this._grades[subject].reduce((akk, elem) => akk += elem, 0) / this._grades[subject].length;
    } else {
      return 0;
    }
  }

  getTotalAverage() {
      let totalAverage = 0;
      for (let item in this._grades) {
        totalAverage += this.getAverageBySubject(item);
      }
      totalAverage = totalAverage / Object.keys(this._grades).length;
      return totalAverage;
    }  
}

// const log = new StudentLog('Олег Никифоров');

// log.addGrade('g2', 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(155, 'geometry');
// log.addGrade(4, 'geometry');
// log.addGrade(8, 'geometry');
// log.addGrade('p5', 'geometry');

// console.log(log.getAverageBySubject('geometry')); // 4.5
// console.log(log.getAverageBySubject('algebra')); // 3
// console.log(log.getAverageBySubject('math')); // 0

// console.log(log.getTotalAverage()); // 3,75

