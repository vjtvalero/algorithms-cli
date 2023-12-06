function reverse(string) {
  return Array.from(string).reverse().join("");
}

let argument = process.argv[2];
console.log(reverse(argument));
