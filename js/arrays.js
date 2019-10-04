function printHobbies(array) {
    console.log(`I like ${array.length} things`);
    array.forEach(function(element) {
        console.log('This is what I like to do: '+element);
      });
}

const hobbiesArray = [];

hobbiesArray.push('Visit Sites');
hobbiesArray.push("Visit Museums");
hobbiesArray.push('Read Books');
hobbiesArray.push('Take walks');

printHobbies(hobbiesArray);