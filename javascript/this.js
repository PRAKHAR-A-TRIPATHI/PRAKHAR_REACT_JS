// let counter = creratCounter()
// let counter1 = creratCounter()

//     function creratCounter(){
//         return {
//             count:0,
//             increment: function(){
//                 this.count++;
//             }
//         }
//     }
// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.increment();

// console.log(counter1)

// var count =0;
// function  incrementCounter(counter){
//     this.count++;
//     console.log(this)
// }  
// incrementCounter();
// console.log(count)

// function Car(name){
//     this.name = name;
//     this.start = function(){
//         console.log(this.name + 'started');
//     }
// }
// let c = new Car("BMW");
// console.log(c)
// c.start()

// class in javascript

// class user {
//     constructor(username , email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     newusername(){
//         return `new ${this.username.toUpperCase()}`
//     }
// }
// const chai = new user ("chai","chai2gmail.com","3b5k47")
// console.log (chai.encryptPassword())
// console.log (chai.newusername());

class uyser {
    constructor(username){
    this.username =username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends uyser{
    constructor(username,email,password){
    super(username)
    this.email = email
    this.password = password
    }

    addCourse(){
        console.log(`new usere course added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@teracheer.com" ,"123sdag343");

chai.addCourse()