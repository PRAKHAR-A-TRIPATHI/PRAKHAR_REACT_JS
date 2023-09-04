export class computer{
    constructor(name){
        this.name = name;
    }
    run(){
        console.log("thiis computer is now running")
    }
}  

export function hell(a,b){
    console.log("hello export file")
    return a+b;
}

function defaultfun(a,b){
    return a*b;
}
export default defaultfun


export const printTable = (table) =>{
    for (let index = 1; index <= 10; index++) {
        let a=  `${table} * ${index} = ${table*index}`
        console.log(a)
    }
}
// module.export = printTable;

// const hello  =  () => {
//     console.log("modules in javascript")
// }

// modules.export = hello;