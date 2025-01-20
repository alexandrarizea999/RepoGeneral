let priceOfChocolate = 1.99;
let hasAmountIsCash = 0.99;

const canBuyChocolate = hasAmountIsCash >= priceOfChocolate;
console.log(canBuyChocolate);

if(canBuyChocolate){
    // statements
    console.log('Enjoy your purchase!');
} else {
    console.log('Sorry, you do not have enough!');
}
