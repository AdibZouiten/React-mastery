const alphabet= ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5','6']

//? use Deconstructing to affect values to variables in a short way
//! if you want to skip a value use ',,'
//! if you want to affect the rest of the value to one variable use ...variable_name
const [a,,c,...rest]=alphabet

const newArray =[...alphabet,...numbers]
console.log(a);
console.log(c);
console.log(rest);
console.log(newArray);



//? use Deconstructing to return more than one variable in a function
//! use Deconstructing to set default values for variables div example below

function sumAndMultiply(a,b){
    return [a+b,a*b]
}
const [sum,mult, div ='none'] = sumAndMultiply(4,5)
console.log(sum,mult,div);




//* destruction for objects


const personOne ={
    name: 'Kyle',
    age:24,
    address:{
        city: 'Rabat',
        houseNumber:3443,
    }
}
const personTwo ={
    name: 'adib',
    age:19,
    favoriteFood:'pizza',
    address:{
        city: 'temara',
        houseNumber:1414,
    },
    car:'911 turbo s'
}

const {name,age,favoriteFood='none',address:{city},...restP}=personTwo

console.log(name);
console.log(age);
console.log(favoriteFood);
console.log(city);
console.log(restP);