// let hello = "hello value"
// let 





// function person(pnameProp, ageProps) {
//     let name= nameProp
//     let age =ageProps
//     const changeName = function(nameFunc){
//         name =nameFunc
//     }

// }

// // Khoi tao mot doi tuong

// // const p= new person("Huynh",24)
// // p.changeName("Dung")
// // console.log(p.name)

// let p={
//     name: "Huynh",
//     age:24,
// }
// p.name= "Dung"
// console.log(p)

// var obj = {
//     age:0,
//     set ageInfo(age){
//         console.log("set age" + age)
//         this.age = age
//     }




const bienObject = {
    firstName: "Nguyen",
    lastName: "Huynh",
    age: 24,
    job: IT,
    isteacher: true,
    skill: {
        tenis: false,
        eSport: true,
    }
}

console.log(Object.keys(bienObject))
console.log(Object.values(bienObject))

const arr = ["javascript", "PHP", "C++"]
const arrClass = [{
        name: "Huynh",
        age: 24,
        isTeacher: true,
    }, {
        name: "Dung",
        age: 24,
        isTeacher: false,
    }, {
        name: "Manh",
        age: 24,
        isTeacher: false,
    }

]

function findTeacher() {
    for (let i = 0; i < arrClass.length; i++) {
        console.log(arrClass[i].isTeacher)
        if (arrClass[i].isTeacher === true) {
            console.log(arrClass[i].name)
        }
    }

}


for (let i = 0; i < arrClass.length; i++) {
    for (let j = 0; j < arrClass[i].students.length; j++
        if (arrClass[i].name === "Pham Ha Anh 9B") {

        }
    }