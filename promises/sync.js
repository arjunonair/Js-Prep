// console.log('first');

// function giveCall(msg){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(`${msg} is here`)
//         },0)
//     })
// }
// function giveCallout(msg){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(msg)
//         },0)
//     })
// }

// console.log('last')

// const add = (a,b) =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(a+b)
//         },0)
//     })
// }

// const result = async() =>{
//     try {
//         const message1 = await giveCall('hi')
//         const sum = await add(1,2)
//         console.log(message1,sum);
//     }
// catch(error){
//     console.error('promise failed',error);
// }
// }
// result()

async function myFunc(){
    try{
    const res =  await new Promise((resolve,reject) =>{
    let test = 1

    if( test > 0){
        resolve('Hurray!!')
    }
    else{
        reject('function!!')
    }
    }
    )
    console.log('success',res)
    }catch(err){
        console.log('failure',err)
    }
}

myFunc()