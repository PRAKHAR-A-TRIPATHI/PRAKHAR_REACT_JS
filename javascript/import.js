import { computer } from "./expot.js";

class Mackbook extends computer{
    constructor(name,company){
        super(name)
        this.company = company
    }
    logIn(){
        console.log("you are logged a MackBook" + this.name)
    }
}

export default Mackbook