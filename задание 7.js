let arr = [5, 9, 8, 17, 8, 6, 99, null];
console.log(arr.filter(n => n%2 == 0).length);
console.log(arr.filter(n => n%2 != 0).length);