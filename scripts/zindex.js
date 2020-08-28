// import Teacher ,{promote} from "./teacher.js";  // default export
// import { Person } from "./person.js"; // named export
// import { promote } from "./teacher"; // named export

const colors =['red','green','blue'];

// const items = colors.map(function(color){
//     return'<li>'+ color + '</li>';
// });

//const items = colors.map(color=> '<li>'+ color + '</li>');
const items = colors.map(color=> `<li>${color}</li>`);    // called template literal
console.log(items);

const address ={
    street:'',
    city: '',
    country: ''
};

// const street = address.street;
// const city = address.city;
// const country = address.country;

const {street,city,country} = address; // extrecting street property from address object and storing it in a constant object called street
                                       // this is called object destructuring
const {street: st} = address; // extracting street property of address object into st contruct



const first = [1,2,3];
const second = [4,5,6];

const combined1= first.concat(second);
const combined2= [...first, 'a',...second,'b']; // spread operator you can add another element in the middle of an array

const clone = [...first]; // colne with spread operator
console.log(first);
console.log(clone);

const first1 = {name:'Aykut'};
const second2 = {job : 'Dev'};
const combined = {...first1, ...second2,location: 'Turkiye'}; // get an object with 3 properties
console.log(combined);
const clone1 = {...first1}; // clone an object with spread


class Person{
    constructor(name){
        this.name=name;
    }

    walk(){
        console.log("walk");
    }    
}

const person = new Person('Aykut'); //pass Aykut as an argument 
person.walk();

class Teacher extends Person{
    constructor(name,degree){   // Person class should have a constructor , child class constructor calls parent class constructor
        super(name);                 // super references the parent class , initialize the name property
        this.degree = degree;
    }

    teach(){
        console.log("teach");
    }
}

const teacher = new Teacher();
teacher.name='Aykut';
teacher.walk();

const teacher = new Teacher('Aykut','MSc')
console.log(teacher.name);
console.log(teacher.degree);