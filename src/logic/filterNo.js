const numArray = [1,60,58,4,15,50,80,30,25,15,64]

function filter (array, threshold){
    return array.filter((element) => element > threshold)
}

// Or with a arrow function
const filterArrowFunction = (array, threshold) => (array.filter((element) => element > threshold) )

console.log(numArray);
console.log(filter(numArray, 50));
console.log(filterArrowFunction(numArray, 50));