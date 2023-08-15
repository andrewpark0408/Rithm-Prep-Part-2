// ## multiples

// Implement a function called **multiples** that accepts two numbers: **_x_** and **_n_**.

// The function should return the first **_n_** multiples of the number **_x_**.

// Assume that **_x_** is a positive integer.

function multiples(x, n) {
  let final = [];

  for (let i = 1; i <= n; i++) {
    final.push(x * i);
  }
  return final;
}

multiples(3, 4); // [3, 6, 9, 12]
multiples(2, 5); // [2, 4, 6, 8, 10]
console.log(multiples(3, 4));
console.log(multiples(2, 5));
