/**
 * Algorithm 3 : Idea – Use an ordered dictionary.
 */

class OrderedDictionnary {
  // Key as number, value as a count
  private dictionary: Map<number, number>;

  constructor() {
    this.dictionary = new Map<number, number>();
  }

  insert(num: number): void {
    if (!this.dictionary.has(num)) {
      this.dictionary.set(num, 1);
    } else {
      this.dictionary.set(num, this.dictionary.get(num)! + 1);
    }
  }

  get(key: number): number | null {
    if (this.dictionary.has(key)) {
      return this.dictionary.get(key)!; // Return the count of the number
    }
    return null;
  }

  getKeys(): number[] {
    return [...this.dictionary.keys()].sort((a, b) => b - a);
  }
}

const findThirdLargest3 = (array: number[]): number => {
  const dictionnary = new OrderedDictionnary();

  for (let num of array) {
    dictionnary.insert(num);
  }

  let keys = dictionnary.getKeys();

  console.log("====>", keys);

  if (dictionnary.get(keys[0])! > 2) {
    return keys[0];
  } else if (dictionnary.get(keys[1])! > 1 || dictionnary.get(keys[0]) === 2) {
    return keys[1];
  }

  return keys[2];
};

console.log(findThirdLargest3([66,3,4,55,22]));
