inp1 = [2,3,4,1,3]
inp2 = [2,7,11,4,-2]
inp1 = inp1.filter(item=>item !== 2)
console.log(inp1);

function rotate(input){
    for( let i=0; i<2 ;i++ ){
        temp = input.pop()
        input.splice(0,0,temp)
    }
    console.log(input);
}

rotate(inp1)
rotate(inp2)

