//! JavaScript Conditional Statements:

//! if + else if + else condition
let age = 15;

if (age > 40) {
    console.log('You are old');
} else if(age > 18){
    console.log('You are ready to open Google Account');
} else {
    console.log('You are not ready');
}


//! Switich Condition
let catrgory = 'Motor Cycle';
let carType;

switch (catrgory){
    case 'Car':
        carType = 'This is a Car';
    break;
    case 'Motor Bike':
        carType = 'This is a Motor Bike';
    break;
    default:
        carType = 'Unknown vehicle Category';
}
console.log(carType);