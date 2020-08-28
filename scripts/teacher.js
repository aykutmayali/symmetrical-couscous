import {Person} from './person';

export function promote(){}

export default class Teacher extends Person{
    constructor(name,degree){   // Person class should have a constructor , child class constructor calls parent class constructor
        super(name);                 // super references the parent class , initialize the name property
        this.degree = degree;
    }

    teach(){
        console.log("teach");
    }
}