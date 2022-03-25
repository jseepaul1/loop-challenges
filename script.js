// // Print odd number from 1-20
function oddNumber() {
  for (var i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
oddNumber();

// // Decreasing Multiples of 3
function divisibleByThree() {
  for (var i = 100; i >= 0; i--) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}
divisibleByThree();

// // Print the sequence
var arr = [4, 2.5, 1, -0.5, -2, -3.5];
function sequence() {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
sequence();

// Sigma
function sigma() {
  var sum = 0;
  for (i = 1; i <= 100; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
sigma();

// Factorial

function factorial() {
  var product = 1;
  for (i = 1; i <= 12; i++) {
    product = product * i;
  }
  console.log(product);
}
factorial();
