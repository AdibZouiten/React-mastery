
//! Promise syntax
let pro = new Promise((resolve, reject) => {
    let a = 1+4;
    if(a==2){
        resolve('Done');
    }
    else{
        reject('Failed');
    }
})

//! then catch syntax
pro.then((msg)=>{
    console.log('this is inside the then ' + msg);
}).catch((msg)=>{
    console.log('this is inside the catch ' + msg);
})


//! promise example

const userLeft = false;
const userWatchingCatMeme = false;


function watchingPromise() {
    return new Promise((resolve, reject) =>{
        if(userLeft){
            reject('user left :(');
        }
        else if(userWatchingCatMeme){
            reject('The cats again !!');
        }
        else{
            resolve('You are watching Good job!!');
        }
    })
}

watchingPromise().then((msg)=>{
    console.log('Success: '+msg);
}).catch((err)=>{
    console.log('Failure: '+err);
})



//! promise methods

const recordVideoOne= new Promise((resolve, reject)=>{
    resolve(`Video 1 recorded successfully`)
})
const recordVideoTwo= new Promise((resolve, reject)=>{
    resolve(`Video 2 recorded successfully`)
})
const recordVideoThree= new Promise((resolve, reject)=>{
    resolve(`Video 3 recorded successfully`)
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((msg)=>{
    console.log(msg);
})