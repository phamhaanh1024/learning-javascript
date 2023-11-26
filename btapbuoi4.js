// // Tạo một mảng chứa có môn học yêu thích và in ra chúng
// const favoriteArray = [
//     {
//         name:"Math",
//         favorite: 10,
//         description:"So hard"
//         aventage:"Make yourself intelligent"
//     },{
//         name:"Music",
//         favorite: 9,
//         description:"So easy"
//         aventage:"Make yourself confident"
//     },{
//         name:"physical",
//         favorite: 4,
//         description:"So hard"
//         aventage:"Make yourself crazy"
//     },{
//         name:"IT",
//         favorite: 11,
//         description:"So hard"
//         aventage:"Give you much money"
//     }
// ]

// let favoriteMax = Infinity;
// let name= ""
// for(let i=0; i<favoriteArray.length; i++){
//     if(favoriteArray[i].favorite > favoriteMax){
//         favoriteMax= favoriteArray[i].favorite
//         name = favoriteArray[i].name
//     }
// }
// console.log(favoriteArray[i].name)

// const arrPerson = [{
//     lastName: "Manh",
//     firstName: "Nguyen",
//     midName: "The",
//     age: 10,
//     address: "Dong Anh- Ha Noi",
//     girldFriendName: "Phuong",
// }, {
//     lastName: "Dung",
//     firstName: "Phan",
//     midName: "Dang",
//     age: 5,
//     address: "Cau Giay",
//     girldFriendName: null,
// }, {
//     lastName: "Dat",
//     firstName: "Nguyen",
//     midName: "Van",
//     age: 9,
//     address: "Long Bien",
//     girldFriendName: null,

// }]

// for (let i = 0; i < arrPerson.length; i++) {
//     if (arrPerson[i].girlFriendName !== null) {
//         console.log(arrPerson[i].lastName)
//     }
// }

// //10. Tạo một mảng chứa danh sách sản phẩm vs mỗi sp có tên...

// const arrProduct = [
//     {
//         name: "Kem danh rang",
//         price: 15000,
//         count: 1000,
//     }
//     ,{
//         name: "Thuoc diet chuot",
//         price: 15000,
//         count: 1000,
//     }, {
//         name: "Ban chai",
//         price: 15000,
//         count: 1000,
//     }, {
//         name: "Nuoc xa",
//         price: 5000,
//         count: 60,
//     },
//     {
//         name: "Nuoc giat",
//         price: 100000,
//         count: 200,
//     }
// ]


// let sum =0;
// for(let i=0; i<arrProduct.length;i++){
// let kdr = arrProduct[i].price*arrProduct[i].count
// sum += kdr
// }
// console.log("Tong tien trong kho = ", sum)

//12. Tao mot doi tuong student vs cacs thuoc tinh ten, diem va dia chi

const student = {
        name;
        "Tuan Anh",
        scores: {
            name: "Math",
            score: 9,
        }
    },
    {
        name;
        "Tuan Anh",
        scores: {
            name: "Sience",
            score: 1,
        }
    }, {
        name;
        "Tuan Anh",
        scores: {
            name: "Physical",
            score: 2,
        }
    }, {
        name;
        "Tuan Anh",
        scores: {
            name: "Van",
            score: 3,
        }
    }, {
        name;
        "Tuan Anh",
        scores: {
            name: "Tieng Anh",
            score: 1,
        }],
    address: "DongAnh"
},

let sum = 0;
for (let i = 0; i < student.scores.length; i++) {
    sum += student.scores[i].score
}
let tb = sum / student.scores.length;
const checkScore = [{
        minScore: 9,
        name: "XX"
    },
    {
        minScore: 8,
        name: "G"
    },
    {
        minScore: 6.5,
        name: "K"
    },
    {
        minScore: 5,
        name: "TB"
    },

]
const max = -Infinity;
let hocLuc = "Yeu"
for (let i = 0; i < checkScores.length; i++) {
    if (max < checkScore[i].score && checkScores[i].minscore < 7) {
        max = checkScores[i].minScore
        hocLuc = checkScores[i].name
    }

}
console.log(hocLuc);