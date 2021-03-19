'use strict';

class AlarmClock {

  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(alarmTime, fn, id) {

    if (!id) throw new Error('Невозможно идентифицировать будильник, параметр id не передан');

    if (this.alarmCollection.some(alarm => alarm.id == id)) {
        console.error('Будильник с таким id уже существует');
        return;
      }

    this.alarmCollection.push({ alarmTime, fn, id });
  }

  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id != id);
    return this.alarmCollection.findIndex(alarm => alarm.id != id) !== -1;
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;
    const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`;
    return `${hours}:${minutes}`;
  }

  start() {
    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(alarm => checkClock(alarm));
      }, 10);
    }

    const checkClock = (alarm) => {
      if (this.getCurrentFormattedTime() === alarm.alarmTime) {
        alarm.fn();
        this.stop();
      }
    }
  }
  
  stop() {
    if (this.timerId !== undefined) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach((alarm, i) => {
      console.log(`Будильник №${i + 1} заведен на ${alarm.alarmTime}`);
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

// Тестирование

function testCase() {

  const alarm1 = new AlarmClock();
  
  const alarmFn = function() {
    console.log('alarm1: извольте вставать, барин');
  }

  function getCurrentFormattedTime() {
    const now = new Date();
    const hours = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;
    const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`;
    return `${hours}:${minutes}`;
  }

  function getFormattedTestTime(delay) {
    const now = new Date();
    const hours = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;
    const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`;
    return `${hours}:${+minutes + +delay}`;
  }

  const timePlusOneMin = getFormattedTestTime(1);
  const timePlusTwoMin = getFormattedTestTime(2);

  
  alarm1.addClock(getCurrentFormattedTime(), alarmFn, 1);
  alarm1.addClock(getFormattedTestTime(1), alarmFn, 1);
  alarm1.addClock(getFormattedTestTime(1), alarmFn, 2);
  alarm1.addClock(getFormattedTestTime(1), alarmFn, 3);
  alarm1.addClock(getFormattedTestTime(2), alarmFn, 4);

  alarm1.printAlarms();
  
  alarm1.removeClock(4);

  alarm1.printAlarms();
  
  console.log(alarm1);
  alarm1.start();
  
  // alarm1.clearAlarms();
  // alarm1.printAlarms();
}

testCase();