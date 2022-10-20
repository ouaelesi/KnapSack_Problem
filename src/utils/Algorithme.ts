let items: { weight: number; value: number; id: number }[] = [
  {
    id: 1,
    weight: 2,
    value: 2,
  },
  {
    id: 2,
    weight: 2,
    value: 5,
  },
  {
    id: 3,
    weight: 4,
    value: 2,
  },
  {
    id: 4,
    weight: 2,
    value: 5,
  },
  {
    id: 5,
    weight: 3,
    value: 5,
  },
  {
    id: 6,
    weight: 2,
    value: 4,
  },
];
const SacWieght: number = 6;

export function calc_max(
  items: Array<{ weight: number; value: number }>,
  SacWeight: number
): number[][] {
  let Matrix: number[][] = [];
  // Initiate the Matrix table
  for (let i: number = 0; i <= items.length; i++) {
    Matrix[i] = [];
  }
  for (let i: number = 0; i <= SacWeight; i++) {
    Matrix[0][i] = 0;
  }
  // We iterate on items
  for (let i: number = 1; i <= items.length; i++) {
    for (let j: number = 0; j <= SacWeight; j++) {
      if (items[i - 1].weight > j) {
        Matrix[i][j] = Matrix[i - 1][j];
      } else {
        Matrix[i][j] =
          Matrix[i - 1][j] >
          Matrix[i - 1][j - items[i - 1].weight] + items[i - 1].value
            ? Matrix[i - 1][j]
            : Matrix[i - 1][j - items[i - 1].weight] + items[i - 1].value;
      }
    }
  }
  return Matrix;
}

// Get the items in the Bag :
export function insertedItems(
  Matrix: number[][],
  items: { weight: number; value: number; id: number }[]
): number[] {
  let nb_items: number = Matrix.length - 1;
  let maxWeight = Matrix[nb_items].length - 1;
  let result: number = Matrix[nb_items][maxWeight];
  let itemsSolution: number[] = [];

  for (let i: number = nb_items; i > 0 && result > 0; i--) {
    if (result != Matrix[i - 1][maxWeight]) {
      itemsSolution.push(i-1);
      result -= items[i - 1].value;
      maxWeight -= items[i - 1].weight;
    } 
  }

  return itemsSolution;
}
