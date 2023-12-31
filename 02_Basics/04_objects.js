// const user={

// }

// Singleton

// const user=new Object()
// console.log(user)

// user.name="Name"
// console.log(user["name"])


// Object Literals
const user={
    fullName: {
        firstname: "Pratik",
        lastName: "Sharma"
    }
}
// console.log(user.fullName.lastName)


let obj1={1:"a", 2:"b"}
let obj2={3:"c", 4:"d"}

let obj3={}

obj3=Object.assign({},obj1,obj2)
// console.log(obj3)


// Spread Operator
// let arr1=[1,2]
// let arr2=[3,4]

// let arr3=[...arr1, ...arr2]
// console.log(arr3)

let obj4={}
obj4={...obj1,...obj2}
// console.log(obj4)


// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))

// console.log(Object.entries(obj1))

// console.log(obj1.hasOwnProperty("2"))

// Object De-structuring

let obj={
    newCourse: "JS",
    courseInstructor: "Sh"

}

const {courseInstructor: ins} = obj
console.log(ins)

