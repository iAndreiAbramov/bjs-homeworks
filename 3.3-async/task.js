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
      }, 1000);
    }

    const checkClock = (alarm) => {
      if (this.getCurrentFormattedTime() === alarm.alarmTime) {
        alarm.fn();
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

  const alarm = new AlarmClock();

  alarm.addClock('16:30', () => console.log('Вставай'), 1);

  alarm.addClock('16:31', () => {
    console.log('Вставай, а то проспишь');
    alarm.removeClock(2);
  }, 2);

  alarm.addClock('16:32', () => {
    console.log('Вставай');
    alarm.clearAlarms();
    alarm.printAlarms();
  }, 3);

  alarm.start();

}

testCase();