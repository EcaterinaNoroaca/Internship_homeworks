
//Write a function to check whether input is an array or not without using isArray
let arr = [1,5,9,'Kate']
let first = (somearr) => { return somearr instanceof Array ? true : false}

console.log(first(arr))

//  Clone an array without using JSON.stringify()
let cloned_arr = [];

for (i in arr) {
  cloned_arr[i] = arr[i];
}

console.log(cloned_arr)

// Create a function that will create an array made of length elements; fill elements with their indexes

let second = (somearr) => Array.from({ length: somearr.length }, (_, key) => key)

console.log(second(arr))
//   Create a function that will return last even element of the array
var an_array = [1,5,9,4,9,12,6,9]
let even = (arr)=>{
    let arr2 = arr.filter(elem => elem % 2 === 0);
    return arr2[arr2.length-1];
}
console.log(even(an_array))

// Write a function that will flatten an array without using flat() 

var flattenArray = [];
function flatten(arr){
        for (elem of arr){
            if (!Array.isArray(elem)) {
                flattenArray.push(elem);
            }    else {
                flatten(elem);
            }
        }
    return flattenArray;
}
var arr3 = [1,[5,[9,4],9,[12,[6,9]]]]
console.log(flatten(arr3))

// Write a function to shuffle an array 
let arr_ex = [4,5,9,3,7,5,2]

let shuffle = (arr) => {
  max = Math.floor(arr.length); 
  for (i in arr){
      r = Math.floor(Math.random() * max);
      [arr[i], arr[r]] = [arr[r], arr[i]];
  }
  return arr;
}

console.log(shuffle(arr_ex));
