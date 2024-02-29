// Получение целого числа из переданного диапазона
function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// Получение случайного элемента массива (с адаптивом к длине массива)
const getRandomArrayElem = (array) =>
  array[getRandomInteger(0, array.length - 1)];

// Генератор случайного уникального id в диапазоне
function createIdGenerator(min, max) {
  const previousIds = [];

  return () => {
    let currentId = getRandomInteger(min, max);

    if (previousIds.length >= max - min + 1) {
      return null;
    }

    while (previousIds.includes(currentId)) {
      currentId = getRandomInteger(min, max);
    }

    previousIds.push(currentId);
    return currentId;
  };
}

export {getRandomInteger, getRandomArrayElem, createIdGenerator};
