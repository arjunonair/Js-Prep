const inp1 = [1, 2, -2, 11, 7, 1];

const inp2 = [1, 4, 7, 2, 4, 7];


function second(input){
    console.log(...new Set(input));
    let arr = [...new Set(input)].sort((a,b) => a - b)

    return arr[arr.length-2]
}

console.log(second(inp2));