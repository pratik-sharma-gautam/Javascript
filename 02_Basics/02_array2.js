let arr=[1,2,3]
let arr1=[4,5,6]
let arr3=[7,8,9]
// arr.push(arr1)

// console.log(arr[3][1])

console.log(arr.concat(arr1))

// Spread Operator

const arr2=[...arr,...arr1,...arr3]
console.log(arr2);


const arr4=[2,1,[2,3,[5,6,[7,8]]]]
// [2,1,2,3,5,6,7,8] -- Flat

const myArr=arr4.flat(Infinity)

console.log(myArr)