//1. what is function Declaration?
// function square(num){
//     return num*num
// }

//2. what is fn expression

// const square = function(num){
//     return num * num;
// } //the code from function is called anonymous function

//3. first class function

// function square(num){
//     return num*num
// }

// function displaySq(fn){
//     console.log('Square is '+fn(5));
// }

// displaySq(square)

//4. What is IIFE

//instead of calling the function by name we can actually wrap the function together in a bracket to get the out

// (function square(num){
//     console.log(num*num);
// })(5)

//5. Function Scope

// var num1 = 20,
// num 2 = 3
// function multiply(){
//     return num1*num2; //return 69
// }

//6. Example

// for(let i = 0; i<5 ; i++){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000)
// } //if var instead of let then the code prints( 5,5,5,5 )

//7. Hoisting

// functionName();
// console.log(x);

// function functionName(){
//     console.log("Roadside Component")
// }

// console.log(x)

// var x = 5

// functionName();


// function functionName(){
//     console.log(x);
//     var x = 5
//     console.log("Roadside Component")
// }

// console.log(x)

// var x = 5


//8. Tricky hoisting

// let x = 5

// const fun = ()=>{
//     // console.log('This is '+x); //even though it is declared the js actually get it declared again the local scope
//     let x = 4
//     console.log(x);
// }

// fun()