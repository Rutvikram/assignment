



// let p1 = document.getElementById("p1")
// let p2 = document.getElementById("p2")
// let q1 = document.getElementById("q1").value


console.log(q2);

p1 = 29.99
p2 = 12.99

var p1total = null
var p2total = null



let p1pritotal = document.getElementById("p1pritotal");
let p2pritotal = document.getElementById("p2pritotal");

var total = document.getElementById("total")

total.innerHTML = p1 + p2

const inp1Change = () => {
    var q1 = document.querySelector('#q1').value;
    console.log("q1 value is:", q1);
    p1total = p1 * q1
    p1pritotal.innerHTML = p1total
    console.log(setp1);
    var setp1 = p1total
    console.log("set value p1", setp1);

    total.innerHTML = p1total + p2total



}

const inp2Change = () => {
    var q2 = document.querySelector('#q2').value;
    // let q2 = document.getElementById("q2").value;
    console.log("q2 value is:", q2);
    p2total = p2 * q2
    p2pritotal.innerHTML = p2total
    var setp2 = p2total
    console.log("set value p2", setp2);
    total.innerHTML = p1total + p2total

}

p1total = p1 * q1.value
p2total = p2 * q2.value

console.log(q1);





// console.log(product[0].price);
// // let itemNmme = product.map((e)=>e.name);
// // let itemPrice = product.map((e)=>e.price);

// // console.log("name",itemNmme);
// // console.log("price",itemPrice);

// const eprice = product[0].price
// let inp1 = document.getElementById("imp1")
// let erepp = document.getElementById("priceep")
// let priplus = document.getElementById("priplus")
// let totalValue = document.getElementById("totalValue")
// erepp.innerHTML = product[0].price
// priplus.innerHTML = product[0].price*2

// if (inp1) {
// }


// let total = 0;
// product.forEach(item => {
//     total += item.price;
// });


// totalValue.innerHTML = total