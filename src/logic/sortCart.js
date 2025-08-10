let cartItems = []

function addItem(item){
    cartItems = [...cartItems, item]
}

function sortCart(cart, order = 0){
    const newArray = cart.slice()
    if(order === 0) return newArray.sort((a , b) => a.price - b.price);
    else if(order === 1) return newArray.sort((a , b) => b.price - a.price);
    else return "Error"
}

const item1 = {
    name : "Earbuds",
    price : 1200,
}
const item2 = {
    name : "Earphone",
    price : 200,
}
const item3 = {
    name : "Watch",
    price : 500,
}
const item4 = {
    name : "Mixer",
    price : 20000,
}
const item5 = {
    name : "Smart TV",
    price : 40000,
}

addItem(item1)
addItem(item2)
addItem(item3)
addItem(item4)
addItem(item5)


console.log(sortCart(cartItems));
console.log(sortCart(cartItems,1));
console.log(cartItems);