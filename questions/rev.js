//method 1

// function reV(str){
//     splitArr = str.split('')
//     console.log(splitArr);

//     revArr = splitArr.reverse()
//     str = revArr.join('')
//     // console.log(parseInt(str[0]));
//     return str
// }

// console.log(reV('hell0'));

//method 2

function reV(str){
    if(str === ''){
        return ''
    }
    else{
        console.log(str);
        return reV(str.substr(1)) + str.charAt(0);
    }
}

console.log(reV('hello'));