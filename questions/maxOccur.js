const str = 'This is JavaScript Code and you to find max char'

let newStr = str.split(' ').join('')

newStr = newStr.toLowerCase()

function maxOccur(str){
    charCount = {}
    let maxCount = 0
    let maxStr = ''
    for( let char of str ){
        charCount[char] = (charCount[char] || 0) + 1
        if(maxCount < charCount[char]){
            maxCount = charCount[char]
            maxStr = char
        }
    }
    console.log(maxStr+":"+maxCount);
}

maxOccur(newStr)