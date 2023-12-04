//2. Tạo một mảng số nguyên và sử dụng thuật toán tìm kiếm tuần tự để kiểm tra xem một số cụ thể có tồn tại trong mảng hay không.

// const arr = [2, 3, 4, 5, 6, 7, 8]
// const a = 9
// const findNumber = (arr, a) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === a)
//             return true
//     }
// }
// if (findNumber(arr, a)) {
//     console.log("Số", a, " có tồn tại trong mảng")
// } else {
//     console.log("Số", a, "không tồn tại trong mảng")
// }



//3. Viết hàm JavaScript để sắp xếp một mảng số nguyên bằng thuật toán sắp xếp nổi bọt (bubble sort).

// let arr = [2, 3, 4, 5, 6, 7, 8]
// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// };
// console.log(bubbleSort(arr))


// 4. Tạo một mảng số nguyên và sử dụng thuật toán sắp xếp nổi bọt để sắp xếp mảng theo thứ tự tăng dần.
// let arr = [2, 3, 4, 5, 6, 7, 8]
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[j] = arr[i]
//                 arr[j] = temp
//             }
//         }
//     }
// console.log(arr)


// 5. Viết chương trình JavaScript để tìm giá trị lớn nhất trong một mảng số nguyên bằng cách sử dụng thuật toán tìm kiếm tuần tự.
// const arr = [2, 3, 4, 5, 6, 7, 8]
// let max = -Infinity
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }

// }
// console.log(max)


// 7. Viết hàm JavaScript để sắp xếp một mảng số nguyên theo thứ tự giảm dần bằng thuật toán sắp xếp nổi bọt.

// let arr = [2, 3, 4, 5, 6, 7, 8]
// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// };
// console.log(bubbleSort(arr))


// 9. Viết chương trình JavaScript để tìm phần tử nhỏ nhất trong một mảng số nguyên bằng thuật toán tìm kiếm tuần tự.
// const arr = [2, 3, 4, 5, 6, 7, 8]
// let min = arr[0]
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log(min)

// 10. Tạo một mảng số nguyên và sử dụng thuật toán sắp xếp nổi bọt để sắp xếp mảng theo thứ tự giảm dần.

// let arr = [2, 3, 4, 5, 6, 7, 8]
// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// };
// console.log(bubbleSort(arr))


// 11. Viết hàm JavaScript để thực hiện tìm kiếm tuần tự trong một mảng chuỗi và trả về vị trí của chuỗi cần tìm.

// const arrString = ["PHP", "Javascript", "Java", "Python", "C++"]

// const returnString = (string) => {
//     console.log("Vị trí của chuỗi cần tìm là :", string)
// }

// const findString = (arr, string) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == string) {
//             return i;
//         }
//     }
// }

// returnString(findString(arrString, "Java")

// 15. Viết hàm JavaScript để thực hiện tìm kiếm tuần tự trong một mảng đối tượng và trả về các đối tượng thỏa mãn điều kiện cụ thể.

// const people = [{
//         name: "Dung",
//         age: 20,
//         city: "HaNoi"
//     },
//     {
//         name: "Nga",
//         age: 20,
//         city: "QuangNinh"
//     },
//     {
//         name: "Thuong",
//         age: 19,
//         city: "CaoBang"
//     },
//     {
//         name: "Hung",
//         age: 19,
//         city: "PhucTho"
//     },
// ]
// const findstring = (arr, city) => {
//     const s = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].city === city) {
//             s.push(arr[i].name)
//         }
//     }
//     return s
// }
// console.log(findstring(people, "CaoBang"))