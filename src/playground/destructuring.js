//object distructing
const person = {
    name : "Roi",
    age :12,
    location:{
        city: 'bat-yam',
        temp: 92
    }
}
//es6 provide us to use this syntax to gey the prop from object
//we can use a defulte value for a prop if he dosnt exist:
//const {name = anonymus,age} = person;
const {name,age} = person;
console.log(`${name} and i am ${age} old`);

//we can rename the prop by use temp: temperture
//const {city,temp: temperture} = person.location;
const {city,temp} = person.location;

if(city && temp){
    console.log(`living in ${city} and the temprture is ${temp}`);
}


const book = {
    title: 'Ego is the enemy',
    author: 'Roi',
    publisher:{
        //name: 'Penguin'
    }
}

const {name : publisherName = 'Self-published'} = book.publisher


//array distructing
console.log(publisherName);

//get the vlaues by the order
//using [ , ,state] we ignore the 1 and 2 item and get only the 3rd item
const address = ['123 jreuslem', 'Israel','bat-yam','1235'];
const [street, state, cityName, zip] = address;

console.log(`I live in ${state} ${cityName} ${street}`);


const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];

const [Coffee, ,mediumPrice] = item;

console.log(`A medium ${Coffee} costs ${mediumPrice}`);