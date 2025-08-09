function findLargest(array){
    let max = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
          max = array[i]
        }
    }
    return max
}

let array = [23,41,12,421,1,124]

console.log(findLargest(array));
