// const myObj=new Object()

// const obj={
//    "name":"A",
//     id:2,
//     "full name": "A B",
//     age:7
// }

// console.log(obj["full name"])
// console.log(obj["id"]);

// obj.isLoggedIn=false
// console.log(obj)

// Object.freeze(obj)

// obj.new_name="pratik"
// console.log(obj)

// const mySym=Symbol("key")

// const newA={
//     [mySym]: "My SYmbol"
// }
// console.log(newA, typeof newA.mySym);


const obj1={
    a: 5,
    b: true,
    c: "pratik",
    d: [4,65]
}

obj1.e=function greeting(){
    console.log(`Hello World ${this.c}`)
}
console.log(obj1.e())