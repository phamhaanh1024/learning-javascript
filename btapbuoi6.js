// 4: Viết hàm chia một mảng thành các mảng con có kích thước nhất định.
// arr = [2, 1, 3, 45, 34, 67, 65, 32, 55, 34, 77, 90, 100];
// const smallArr = (arr, number) => {
//     for (let i = 0; i < arr.length - number + 1; i++) {
//         let newArr = [];
//         for (let j = 0; j < number; j++) {
//             newArr.push(arr[i + j]);
//         }
//         console.log(newArr);
//         newArr.clear;
//     }
// };
// smallArr(arr, 3);

//5: Tìm giá trị trung bình của các số trong một mảng.
// arrNumber = [2, 1, 3, 45, 34, 67, 65, 32, 55, 34, 77, 90, 100]
// const average = (arr) => {
//     let sum = 0
//     count = 0
//     arrNumber.forEach((element) => {
//         sum += element
//         count++
//     })
//     return sum / count
// }
// console.log(average([2, 1, 3, 45, 34, 67]))

// 7: Viết hàm đảo ngược từng từ trong một chuỗi.
// const reverseString = (string) => {
//     let newString = string.split(" ")
//     let word = ""
//     newString.forEach(element => {
//         word += element.split("").reverse().join("") + " ";
//     });
//     return word
// }
// console.log(reverseString("Hello world"))

// 8: Tìm chuỗi dài nhất trong một mảng các chuỗi.const mainString = (["PHP", "Javascript", "Java", "Python", "C++"] findString = (string) => {
// const arrString = ["PHP", "Javascript", "Java", "Python", "C++"]
// const maxWord = (string) => {
//     let max = 0,
//         word = "";
//     for (let i = 0; i < arrString.length; i++) {
//         if (arrString[i].length > max) {
//             max = arrString[i].length;
//             word = arrString[i];
//         }
//     }
//     return word;
// };
// console.log(maxWord(arrString))

// 9: Viết hàm thực hiện phép cộng 2 ma trận số nguyên.
// let arr1 = [
//         [1, 2, 3],
//         [2, 3, 4],
//     ],
//     arr2 = [
//         [4, 5, 6],
//         [5, 6, 7],
//     ];
// const sumArr = (arr1, arr2) => {
//     let arr3 = [
//         [],
//         []
//     ]
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr1[i].length; j++) {
//             arr3[i][j] = arr1[i][j] + arr2[i][j];
//         }
//     }
//     return arr3;
// }
// console.log(sumArr(arr1, arr2));
//12: Viết hàm tính tổng các số chia hết cho 3 hoặc 5 trong một khoảng từ 0 đến n.
// const sum = arr.filter((number) => number % 3 === 0 || number % 5 === 0);

// console.log(sum.reduce((x, y) => x + y));