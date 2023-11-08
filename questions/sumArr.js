inp = [2,7,11,4,-2]

function sumNum(num){
    sum = 0
    num.map((item) => {
        sum += item
    })

    out = []
    for(let i of inp){
        out.push(sum-i)
    }
    console.log(out);
}

sumNum(inp)