//   // let a =new Promise(function(resolve,reject){
//     //     // alert("i am promises")
//     //     console.log("proomise run")
//     // });
    
//     async function xyz(){
//         let p1 = new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve("27 deg")
//             },1000)
//         })
//         let p2 = new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve("21 deg")
//             },3000)
//         })
//         console.log("p2")
//         let a =await p2
//         console.log("p1 ")
//         let b =await p1
//         return [a,b]
//         // p2.then(alert)
//         }
    
//        console.log(xyz()) 
//         // xyz().then((x)=>{
//         //     alert(x)
//         // })
    
    // promise alll. 

let p1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("first promise");
        resolve(10)
    }, 1000);
   
})
let p2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("second promise");
        resolve(20)
    }, 2000);
   
})
let p3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("thired promise");
        resolve(30)
    }, 3000);
   
})
 Promise.all([p1,p2,p3]).then((result)=>{
    console.log(`result : ${result}`)
 }).catch((error)=>{
    console.log(error)
 })