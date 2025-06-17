const getRandomInteger = (firstValue, secondValue) => {
  const lower = Math.min(Math.abs(firstValue), Math.abs(secondValue));
  const upper = Math.max(Math.abs(firstValue), Math.abs(secondValue));
  const randomDigit = lower + Math.random() * (upper + 1 - lower);
  return Math.floor(randomDigit);
};

// Возвращает в заданном диапазоне случайное значение, которое отсутсвует в массиве использованных значений (reservedValues)
const getUniqueNumber = (reservedValues, from = 0, to = reservedValues.length + 5) => {
  let result = getRandomInteger(from, to);
  if (reservedValues.length >= to) {
    return undefined;
  } else {
    while (reservedValues.includes(result)) {
      result = getRandomInteger(from, to);
    }
    reservedValues.push(result);
    return result;
  }
};

const getUniqueArrayValues = (array, amount = 4) => {
  const values = [];
  const usedNumbers = [];
  for (let i = 0; i < amount; i++) {
    values.push(array[getUniqueNumber(usedNumbers, 0, array.length - 1)]);
  }
  return values;
}

export {getUniqueArrayValues};
