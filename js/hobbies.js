const hobbiesArray = [
    { name: 'touring museums', lengthInYearsAtHobby: 50 },
    { name: 'biking', lengthInYearsAtHobby: 25},
    { name: 'swimming', lengthInYearsAtHobby: 50}
];

function printHobbyHistory(array) {
    array.forEach(element => {
        console.log(`I have been ${element.name} for ${element.lengthInYearsAtHobby} years.`);
    });
}

printHobbyHistory(hobbiesArray);