
const fs = require('fs');



const genders =['male', 'female'];
const maleNames = ['John', 'Mark', 'Peter', 'George'];
const  femaleNames = ['Jane', 'Mary', 'Lucy', 'Karen'];
const  lastNames = ['Smith', 'parker', 'Moss', 'Grant'];

const randChoice = arr => arr[Math.floor(Math.random() * arr.length)];
const people=[];

for (let i=0; i<=20; i++){
 
    let person ={};

gender = randChoice(genders);

let randomName =()=>{
if (gender === 'male'){
    return randChoice(maleNames);
}else{
    return randChoice(femaleNames);
}
};

person.name = randomName();
person.surname =  lastNames[Math.floor(Math.random() * lastNames.length)];
person.age = Math.floor(Math.random() * (50 - 18 + 1)) + 18;
people.push(person);
}

const data = JSON.stringify(people);
fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });


console.log(data);
