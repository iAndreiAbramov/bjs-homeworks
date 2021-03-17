'use strict';

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

console.log(weapons);

function getNames() {
  return weapons.map(item => item.name);
}

function getCountReliableWeapons(durability) {
  return weapons.filter(item => item.durability > durability).length;
}

function hasReliableWeapons(durability) {
  return weapons.some(item => item.durability > durability);
}

function getReliableWeaponsNames(durability) {
  return weapons.reduce((result, elem) => {
    if (elem.durability > durability) result.push(elem.name);
    return result;
  }, []);
}

function getTotalDamage() {
  return weapons.reduce((summ, elem) => summ += elem.attack, 0);
}

function getValuestCountToSumValues(arr, target) {
  let result;
  let summ = 0;
  if (arr.some((item, index) => {
    summ += item;
    if (summ >= target) {
      result = index + 1;
      return true;
    }
  })) return result;

  return arr.length;
}

console.log(getValuestCountToSumValues([1, 2, 3, 5, 2, 7, 3, 5, 2], 10));
console.log(getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 20));