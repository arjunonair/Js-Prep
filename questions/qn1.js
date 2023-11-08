
let input1 = {a:10,b:2,c:12}
let input2 = {a:10,c:12}
function same(){
    let out = {}
    for(i in input1){
        if(input1[i]===input2[i]){
            out[i] = input1[i]
        }
    }
    return out;
}

console.log(same(input1,input2))