const input = [5,7,9,11,15,17]

function odd(input){
    for(let i=0; i<input.length-1; i++)
    {
        if(input[i+1]-input[i] > 2){
            return input[i]+2
        }
    }
}
console.log(odd(input));