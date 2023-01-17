let names = ['Mike', 'Nikola', 'Tom']; ////Task 1
console.log(names[1]);
names.splice(1,1, 'Alex');
console.log(names);
console.log(names.pop(2));
console.log(names);
console.log(names.length);


let a = [5, 3, -4, 25, 32, -16, 6]; ///// Task 2
let b = [21, -30, 9, 5, 12, -19, 5, 25];
for (let a = 0; a > b.length; a++) {
    console.log([a]);
}
for (let a = 0; a < b.length; a++){
    console.log([a]);
}
for (let a = 0; a.length = b.length; a, b){
    console.log([a, b]);

}

let phrase = 'I am learning JavaScript rigth now'; /// Task 3
console.log(phrase.split(' ',6));
console.log(phrase);



// let a = [5, 3, 8, 5, 3, 2, 1, 2]; /// Task 4
// let b = [];
// a.forEach(() =>{
//   console.log((a.filter((x, i) => a.indexOf(x) === i)));
// });


let users = [{ id: 1, age: 17 }, /// Task 5
            { id: 2, age: 18 },
            { id: 3, age: 19 },
            { id: 4, age: 21 },
            { id: 5, age: 17 },
            { id: 6, age: 20 },
    { id: 7, age: 25 },];
            
users.forEach(user => {
    if (age >= 18 && age <= 21);
    return user.id

});
const sectionAge = users.filter( (word, index, arr) => {
  arr.push('new')
  return age.length < 18,21
})   
sectionAge(users);

 
