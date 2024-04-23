/*
Mencari mengubah angka fizz buzz
Buat fungsi yang menerima parameter data array
Kembalikan dalam bentuk boolean
*/

// built-in version
const fizzBuzz = (arr) => {
  return arr.map((item) => {
    if (item % 3 === 0 && item % 5 === 0) {
      return "fizz buzz";
    } else if (item % 3 === 0) {
      return "fizz";
    } else if (item % 5 === 0) {
      return "buzz";
    } else {
      return item;
    }
  });
};

// for version
const fizzBuzzFor = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            arr[i] = "fizz buzz"
        } else if (arr[i] % 3 === 0) {
            arr[i] = "fizz"
        } else if (arr[i] % 5 === 0) {
            arr[i] = "buzz"
        } else {
            arr[i]
        }
    }
    return arr
}

console.log(fizzBuzz([8 ,3 ,9 ,2 ,5]));
console.log(fizzBuzz([3 ,4 ,6 ,7 ,9]));
console.log(fizzBuzz([4, 5, 9, 15, 19]));
console.log(fizzBuzz([2 ,4 ,7 ,8 ,1]));
console.log(fizzBuzzFor([8 ,3 ,9 ,2 ,5]));
console.log(fizzBuzzFor([3 ,4 ,6 ,7 ,9]));
console.log(fizzBuzzFor([4, 5, 9, 15, 19]));
console.log(fizzBuzzFor([2 ,4 ,7 ,8 ,1]));