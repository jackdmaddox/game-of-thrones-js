// console.log(`There are ${characters.length} characters in the array.`);

// All characters names
// characters.forEach(function(character){

//     console.log(`Character name: ${character.name}`);
// });

// Characters names starting with A
// 168 names start A
// let characterA = [];

// characters.forEach(function(character){
//     if (character.name[0] === "A") {
//         characterA.push(name);
//     }
// });

// console.log(`There are ${characterA.length} characters starting with A in the array.`);

// Characters names starting with Z
// 8 names start with Z

// let characterZ = [];

// characters.forEach(function(character){
//     if (character.name[0] === "Z") {
//         characterZ.push(name);
//     }
// });

// console.log(`There are ${characterZ.length} characters starting with Z in the array.`);

// How many characters are dead?
// 553 are dead
// let characterDead = [];

// characters.forEach(function(character){
//     if (character.died != '') {
//         characterDead.push(name);
//     }
// });

// console.log(`There are ${characterDead.length} characters starting with A in the array.`);


// Who has the most titles?
// Balon Greyjoy has the most titles
// let maxTitles = 0;
// let maxTitleName = '';

// characters.forEach(function(character){
//     if (character.titles.length > maxTitles) {
//         maxTitles = character.titles.length;
//         maxTitleName = character.name;
//     }

// })
// console.log(`The character with most titles is ${maxTitleName} hopefully...`);

// How many are Valyrian?
// There are 57 Valyrians

// let arrayValyrian = [];

// characters.forEach(function(character){
//     if (character.culture === 'Valyrian') {
//         arrayValyrian.push(name);
//     }

// })

// console.log(`There are ${arrayValyrian.length} Valyrians...`);

// What actor plays "Hot Pie"?
// // // Ben Hawkey plays Hot Pie
// let hotPieName = '';

// characters.forEach(function(character){
//     if (character.name === 'Hot Pie'){
//         hotPieName = character.playedBy;
//     }

// })

// console.log(`The actor who plays Hot Pie is called ${hotPieName} ....`)

// How many characters are not in the tv show?
// 1927 not on show

// let notTvCharacters = [];

// characters.forEach(function(character) {
//     if (character.playedBy[0] === '') {
//         notTvCharacters.push(name);
//     }

// })

// console.log(`There are ${notTvCharacters.length} characters not the TV show...`);

// How many characters named Targaryen?

let arrayTarg = [];
characters.forEach(function(character){
    if (character.name.includes('Targaryen')) {
        arrayTarg.push(name);
    }

});

console.log(`There are ${arrayTarg.length} Targaryens in GoT. Their names are: ${arrayTarg}`);