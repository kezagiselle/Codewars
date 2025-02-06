let p = new Promise((resolve, reject) =>{
    let a = 1 + 2
    if(a == 2){
        resolve('success')
    } else {
        reject('failed')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message) //this will be when my message is resolve
}).catch((message) =>{
    console.log('This is in the catch ' + message) // this will be when my message is  rejected
});
