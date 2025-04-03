// const student = {
//     fullName : "Shahil Ahmed",
//     marks : 94.4,
//     printMarks: function() {
//         console.log("marks = ", this.marks);
//     },
// };

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
//     calcTax1 : function() {
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//     salary: 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     },
// }
// const karanArjun1 = {
//     salary: 50000,
// }
// const karanArjun2 = {
//     salary: 50000,
// }
// const karanArjun3 = {
//     salary: 50000,
// }


// karanArjun.__proto__ = employee;
// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;

// class ToyotaCar {
//     constructor(brand , mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand (brand){
//         this.brandName = brand;
//     }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner);
// Fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar("lexus", 12);
// console.log(lexus);
// Lexus.setBrand("Lexus");


// class Parent {
//     hello(){
//         console.log("hello");
//     }
// }

// class Child extends Parent{}

// let obj = new Child();

// class Person {
//     constructor(){
//         this.species = "homo sapiens";
//     }
//     eat () {
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer extends Person {
//     work (){
//         console.log("solve problems, build something");
//     }
// }

// let shahilObj = new Engineer();
// let p1 = new Person();







// class Person1 {
//     constructor(){
//         console.log("enter parent constructor");
//         this.species = "homo sapiens";
//     }
//     eat () {
//         console.log("eat");
//     }
   
// }

// class Engineer1 extends Person1 {
//     constructor(branch){
//         console.log("enter child constructor");
//         super();
//         this.branch = branch ;
//          console.log("exit child constructor");
//     }
//     work (){
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer1("chemical engg");


// class Person1 {
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name =name ;
//     }
//     eat () {
//         console.log("eat");
//     }
   
// }

// class Engineer1 extends Person1 {
//     constructor(name){
//         super(name);
        
//     }
//     work (){
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer1("shahil ");



// let DATA = "secret information";

// class User {
//     constructor(name, email){
//         this.name=name;
//         this.email=email;
//     }

//     viewData (){
//         console.log("data =", DATA);
//     }
// }

// class Admin extends User{
//     constructor (name ,email){
//         super(name, email);
//     }
//     editData() {
//         DATA = "some new value";
//     }
// }

// let student1 = new User("Shahil","Shahil@gmail.com");
// let student2 = new User("Ahmed","Ahmed@gmail.com");
// let admin1 = new Admin("admin", "admin@gmail.com");





// let a=5;
// let b=6;
// console.log("a+b", a + b);
// try{
//     console.log("a+b", a + c);
// } catch(err){
//     console.log(err);
// }
// console.log("a+b", a + b);


// function hello() {
//     console.log("hello");
// }

// setTimeout(hello,2000)

//OR

// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// },2000);

// console.log("three");
// console.log("four");

// function sum(a,b){
//     console.log(a + b);
// }

// function calculator(a , b, sumCallback){
//     sumCallback(a,b);
// }

// calculator(11 ,2 , sum);
// //OR
// calculator(1, 2, (a, b) => {
//     console.log(a + b);
// })

//  function getData(dataId) {
//     console.log("data", dataId);
//  }

 //OR

//  function getData(dataId, getNextData) {
//    setTimeout (() => {
//     console.log("data", dataId);
//     if (getNextData){
//       getNextData();
//     }
//    }, 2000);
//  }
 
//  getData(1, () =>{
//   console.log("getting data2 ....");
//   getData(2 , () => {
//     console.log("getting data3 ....");
//     getData(3);
//   });
//  })


// let promise = new Promise((resolve, reject ) => {
//   console.log("I am a promise");
  // resolve(12);
  // resolve("success");
//   reject("some error occurred");
// });

const getPromise = () => {
  return new Promise((resolve, reject ) => {
  console.log("I am a promise");
  //  resolve("success");
  reject("some error occurred");
});
};

let promise = getPromise();
promise.then( (res) => {
  console.log("promise fulfilled",res);
});

promise.catch( (err) => {
  console.log("Rejected",err);
});