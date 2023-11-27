// //5.Tạo một mảng chứa danh sách tên của bạn bè và in ra tên của bạn bè có độ dài dài hơn 5 ký tự.
// const arrName = ["Dung, Nga, Thuong"]
// for (let i = 0; i < arrName.length; i++) {
//     if (arrName[i].length >= 5) {
//         console.log(arrName[i])
//     }
// }

//7.Viết một chương trình JavaScript để sao chép một mảng thành một mảng mới mà không thay đổi mảng gốc
// const arr = [6, 4, 3, 2, 1]
// let anr = []
// let dem = 0
// while (dem < arr.length) {
//     anr[dem] = arr[dem]
//     dem++
// }
// console.log(anr) 

// 6. Tạo một mảng số nguyên và sắp xếp nó theo thứ tự tăng dần, sau đó in ra kết quả.
// const arr = [2, 3, 1, 4, 5]
// let temp = 0
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr)

// 9. Viết một hàm JavaScript để kiểm tra xem một mảng có chứa số nguyên âm hay không và trả về kết quả tương ứng.

//function kt(a){
//     let dem=0
//     for(let i=0;i<a.length;i++){
//         if(a[i]<0){
//             console.log(a[i])
//             dem++
//         }
//     }
//     if(dem==0){
//         console.log("Không có số nguyên âm")
//     }
// }
// kt([2,-3,5,6])
//11. Viết chương trình JavaScript để đảo ngược một chuỗi sử dụng mảng và vòng lặp.
const xau = "olleh"
let arr = []
for (let i = xau.length - 1; i >= 0; i--) {
    arr += xau[i]
}
console.log(arr)