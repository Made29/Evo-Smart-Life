let priceAfterTax = 7.14;
// console.log(priceAfterTax.toString().slice(0, -1) + 5)
if(!Number.isInteger(priceAfterTax)){
    let newPoint = priceAfterTax.toFixed(2).toString().slice(3);
    
    if(newPoint < 5 ){
        priceAfterTax = parseFloat(priceAfterTax).toString().slice(0, 3) + 5
        console.log("priceAfterTax: ", priceAfterTax);
    }
}

console.log("priceAfterTax: ", +priceAfterTax);

// itemPrice = itemPrice.toString().slice(0, -1) + 5;