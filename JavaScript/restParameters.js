function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
  }
  console.log(sum(1, 2, 3));
  console.log(sum(4, 5, 6, 7)); 
  console.log(sum(10, 20, 30, 40, 50)); 