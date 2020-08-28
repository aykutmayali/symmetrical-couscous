//var --> function scope
//let --> block scope
//const ->block scope

function sayHello(){
    for(var i=0; i<5; i++){
   // for(let i=0; i<5; i++){    // let doesnt allow i outside of the scope like var
        console.log(i);
        alert(i);
    }
    console.log(i+" this value is extra i value");
    alert(i +" this value is extra i value , var is accesible in the func which it's is defined");
}

sayHello();

const x= 1;
console.log(x);
//x = 2; // can't assign to const , use let to reassign a variable

// Objects in JS are collections of key value pairs
const person ={
    name: 'Aykut', // key = name , value = 'Aykut' => becomes a key value pair
    walk: function(){ // functions in Objects called methods , () symbol makes it method
        console.log(this); // this returns a reference to current object
    },    
    talk(){}    
}

person.talk();
person['name']= 'Duru';
const targetMember = 'name';
person[targetMember.valueOf()] ='Destan';
console.log(person.name);
person.walk();  // in JS functions are objects

const walk = person.walk; //not calling walk() method , it s a reference to this function , const walk is a function now.
console.log(walk);
console.log(person.walk);
walk();  // dont get a reference to person object , so get undefined
         // this without an object , returns a global object , which is a window object in browsers

const walk1 = person.walk.bind(person)  // person.walk is an object, so person.walk. here comes object properties & methods in JS
                                        // bind method will return a new instance of this walk func and
                                        // set the value of "console.log(this);" this to point to this person object
walk1(); // return console object "name = Destan" ,
         // in that walk function the value of this is based on the argument that we pass to the bind method
         // here passing the person object as an argument , get a walk function that is always return this person 



const square1 = function(number){ // old version for function definition
    return number*number;
}

const square2 = () => { // es6 version for defining function for that takes no parameters
    return number*number ;
}

const square3 = number => { // with taking parameter
    return number*number;
} 

const square = number => number*number; // can be written like this for single line

console.log(square(8));



const jobs = [
    {id:1, isActive: true},
    {id:2, isActive: true},
    {id:3, isActive: false}
];

const activeJobs = jobs.filter(function(job){return job.isActive; }); // filter method for array , pass here the argument  as a predicate function
const activeJobs1 = jobs.filter(job => job.isActive);

const person1 ={
    talk(){
        var self=this;
        setTimeout(function(){        // it is a callback function
            console.log("self",self); // if it is this in case of self, this will return window object
        },1000);
        console.log("this",this);
    }
};

person1.talk();

const person2 ={
    talk(){
        var self=this;
        setTimeout(()=>{
            console.log("this",this); // in arrow func automatically bind this object in this callback function
        },1000);                      // inherits this in the context in which code is defined 
        
        console.log("this",this);
    }
};

person2.talk();
