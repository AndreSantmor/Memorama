export const randomInt = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

/* Creates a random Array with unique values */
export const randomArray = (len: number, max: number, min: number) => {
  const a: Set<number> = new Set();
  while (a.size < len) a.add(randomInt(max, min));
  return Array.from(a);
};

/* Returns an array shuffled randomly */
export const shuffle = (array: Array<number>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const createRandomArray = (cardsNumber: number = 10) => {
  const arr1: Array<number> = randomArray(cardsNumber, 252, 1);
  const arr2: Array<number> = arr1.slice();
  const aux: Array<number> = arr1.concat(arr2);
  return shuffle(aux);
};
