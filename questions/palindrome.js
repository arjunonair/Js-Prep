
const pali = (str) =>{
    let l = str.length

    for(let i = 0 ; i < Math.floor(l/2) ; i++){
        if(str[i] !== str[l-1-i]){
          return false 
        }
    }
    return true
}
console.log(pali('aaah'));