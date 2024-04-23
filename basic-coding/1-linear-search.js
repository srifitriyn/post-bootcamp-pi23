/* 
Mencari data pada array
Buat fungsi yang menerima parameter angka yg ingin dicari dan data array
Kembalikan dalam bentuk number
Kembalikan undefined jika tidak dikembalikan 
*/

// built-in function version
const findNum = (num, arr) => {
    return arr.find((number) => number === num)
}

// for version
const findNumFor = (num, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return arr[i];
        }
    }
    return undefined
}


console.log(findNum(3, [8 ,3 ,9 ,2 ,5]))
console.log(findNum(10, [8 ,3 ,9 ,2 ,5]))
console.log(findNumFor(3, [8 ,3 ,9 ,2 ,5]))
console.log(findNumFor(10, [8 ,3 ,9 ,2 ,5]))