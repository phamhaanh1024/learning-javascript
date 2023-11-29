// let arr[3, 2, 5, 1, 3, 1, 5, 6, 8, 9, 7, 2]


// for (let i = 0; i < arr.length; i++) {
//     for (let j=i+1; j<arr.length; i++)
//     if (arr[i] > arr[j]) {
//         let temp = arr[j];
//         arr[i] = arr[j];
//         arr[i + 1] = temp
//     }
// }

//1. Viết một hàm JavaScript để thực hiện tìm kiếm tuần tự trong một mảng số nguyên và trả về vị trí của phần tử cần tìm.
// const arr(1, 3, 2, 5, 7, 8, 0, 4, 6, 30, 29, 48, 50, 20, 32, 43, 57, 85)

// const returnNumber = (number) =>{
//     console.log("Vị trí của số nguyên cần tìm là: ", SVGAnimatedNumberList)
// }
// const findNumber = (arrProp number) =>{
//     let find =0;
//     for (let i = 0; i < arrProp.length; i++) {
//         if(arProp[i] === number){
//             find = i
//         }
//         return find
// }
// returnNumber(findNumber(arr,30))


// 6. Tạo một mảng số nguyên và sử dụng thuật toán tìm kiếm tuần tự để tìm tất cả các vị trí của một số cụ thể trong mảng.
// const arr(1, 3, 2, 4, 7, 8, 0, 4, 30, 30, 29, 48, 30, 20, 32, 43, 4, 4)

// const searchinArray =() =>{
// for (let i = 0; i < arr.length; i++){
//     if(a[i] === number){
//         findNumber([i])
// }
// }
// }

// const findNumber = (number) =>{
//         console.log("Các vị trí số nguyên cần tìm là:  ", number)
//     }

//     searchinArray(arr, 30)

// 8. Tạo một mảng số nguyên và sử dụng thuật toán tìm kiếm tuần tự để đếm số lần xuất hiện của một số cụ thể trong mảng.
// const arr(1, 3, 2, 4, 7, 8, 0, 4, 30, 30, 29, 48, 30, 20, 32, 43, 4, 4)

// const equalNumber= (a,b) =>{
//     if(a!==b) {
//         return false 
//     }
//     return true
// }
// const countNumberofArr =(arrProps,number) =>{
//     const count =0;
// for (let i = 0; i < arr.length; i++){
//         count++
//     }
// } return count
// }

// countNumberofArr(10)

//12. Tạo một mảng chuỗi và sử dụng thuật toán tìm kiếm tuần tự để kiểm tra xem một chuỗi cụ thể có tồn tại trong mảng chuỗi hay không.
// const arrString = ["PHP", "JavaScript", "Java", "Python"]

// const findlenguage = (lenguage, arrProp) => {
//     for (let i = 0; i < arrProp.length; i++) {
//         if (arrProp[i] === lenguage) {
//             return true
//         }
//     }
// }
// const s = "Java"
// if (findlenguage("Java", arrString)) {
//     console.log("Chuỗi", s, "tồn tại trong mảng")
// } else {
//     console.log("Chuỗi", s, " không tồn tại trong mảng")
// }

//14. Tạo một mảng chuỗi và sử dụng thuật toán sắp xếp nổi bọt để sắp xếp mảng theo thứ tự tăng dần dựa trên độ dài của chuỗi.
const arrString = ["PHP", "JavaScript", "Java", "Python"]
let string = ""
for (let i = 0; i < arrString.length; i++) {
    for (let j = i + 1; j < arrString.length; i++) {
        if (arrString[i].length) > arrString[j].length) {}
}
}