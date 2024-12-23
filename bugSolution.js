function foo(a, b) {
  // Explicit type conversion using parseInt
  return parseInt(a) + parseInt(b);
}

console.log(foo(1, '1')); // Output: 2

//Alternative solution using Number()
function foo2(a, b) {
  return Number(a) + Number(b);
}

console.log(foo2(1, '1')); //Output: 2