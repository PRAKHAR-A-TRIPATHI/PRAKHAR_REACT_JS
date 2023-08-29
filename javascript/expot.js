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




