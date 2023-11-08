const str = 'This is JavaScript'

newArr = str.split(' ')

for(let i = 0; i<newArr.length ; i++){
    newArr[i] = newArr[i].split('').reverse().join('')
}
console.log(newArr.join(' '));