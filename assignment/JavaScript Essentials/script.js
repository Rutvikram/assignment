const product = [
    { name: "Earphone", price: 5 },
    { name: "Charger", price: 10 },
    { name: "Mobile", price: 24 },
];
console.log(product[0].price);
// let itemNmme = product.map((e)=>e.name);
// let itemPrice = product.map((e)=>e.price);

// console.log("name",itemNmme);
// console.log("price",itemPrice);

const eprice = product[0].price
let inp1 = document.getElementById("imp1")
let erepp = document.getElementById("priceep")  
let priplus = document.getElementById("priplus")  
let totalValue = document.getElementById("totalValue")  
erepp.innerHTML = product[0].price
priplus.innerHTML = product[0].price*2

if (inp1) {
}


let total = 0;
product.forEach(item => {
    total += item.price;
});


totalValue.innerHTML = total