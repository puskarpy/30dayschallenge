const arr1 = [1,2,3,4]
const arr2 = [4,5,6,7]

const conacatenatedArray = [...new Set([...arr1,...arr2])]

console.log(conacatenatedArray);