// 1. Viết chương trình nhận hai số làm đầu vào và hiển thị tổng của chúng.

// const sum = (a, b) => {
//     return a + b
// }

// console.log(sum(2, 3))

// 7. Viết chương trình nhận một danh sách các chuỗi làm đầu vào và sắp xếp danh sách theo thứ tự alphabet.
// const arr = ["Orange", "Mango", "Banana", "Apple"]
// arr.sort()
// console.log(arr)

// 8. Viết chương trình nhận một danh sách các số làm đầu vào và trả về số trung vị của các số..(Tìm số trung vị(số trung vị không phải số trung bình cộng))
// const arrN = [1, 2, 3, 4, 5];
// let median
// const findNumber = (arr) => {
//     if (arrN.length % 2 === 1) {
//         median = arrN[Math.floor(arrN.length / 2)]
//     } else {
//         median = (arrN[arrN.length / 2 - 1] + arrN[arrN.length / 2]) / 2
//     }
//     return median
// }
// console.log(findNumber(arrN))

// 10. Viết chương trình nhận một danh sách các chuỗi làm đầu vào và trả về số chuỗi chứa chữ 'a'.
// const arr = ["Orange", "Mango", "Banana", "Apple"]
// const findArr = arr.filter(element => element.includes('a'));
// console.log(findArr)

// Cấp Độ 2:
// 1. Viết chương trình nhận một danh sách các số làm đầu vào và trả về số lớn thứ hai trong danh sách.VD: [70, 11, 20, 4, 100] 👉 70
// const findNumber = (arr) => {
//     const a = arr.sort((a, b) => a - b);
//     return a[a.length - 2];
// };
// console.log(findNumber([70, 11, 20, 4, 100]));

// 5 Viết chương trình nhận một danh sách các số nguyên làm đầu vào và trả về tổng con tăng liên tiếp lớn nhất trong danh sách.
// const arr = [2, 4, 8, 4, 5, 9, 10, 13, 6, 7, 6, 8, 10, 12];
// let max = -Infinity

// let count = 0 //2  + 4 + 8
// for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {
//         count = count + arr[i]
//     } else if (arr[i - 1] < arr[i]) {
//         count = count + arr[i]
//     } else {
//         if (count > max) {
//             max = count
//         }
//         count = arr[i]
//     }
// }
// console.log(max)

// 2. Viết chương trình nhận một chuỗi làm đầu vào và hiển thị độ dài của chuỗi.

// const length = (string) => {
//     return string.length;
// };

// 3. Viết chương trình nhận một số làm đầu vào và hiển thị bình phương của số đó.
// const pow = (a) => {
//     return a * a;
// };

// 4. Viết chương trình nhận một danh sách các số làm đầu vào và hiển thị số lớn nhất trong danh sách
// const max = (a) => {
//     let max1 = -Infinity;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > max1) {
//             max1 = a[i];
//         }
//     }
//     return max1;
// };

// 5. Viết chương trình nhận một danh sách các chuỗi làm đầu vào và hiển thị chuỗi ngắn nhất trong danh sách.

// const max2 = (arr) => {
//     let max = -1,
//         s = "";
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > max) {
//             max = arr[i].length;
//             s = arr[i];
//         }
//     }
//     return s;
// };

// 6. Viết chương trình nhận một danh sách các số làm đầu vào và sắp xếp danh sách theo  thứ tự tăng dần.
// const increase = (arr) => {
//     return arr.sort((a, b) => a - b);
// };

// 9. Viết chương trình nhận một chuỗi làm đầu vào và trả về số từ trong chuỗi.(tìm số từ trong một chuỗi, VD: “Hello world " => 2 )
// const s = "Hello World"
// const number = (s) => s.split(" ").length
// console.log(number(s))