const findTheOldest = function(arrayOfPeople) {
  let age = 0;
  let oldestPerson = {};
  for (let i = 0; i < arrayOfPeople.length; i++) {
    if (!arrayOfPeople[i].yearOfDeath) {
      if (2024 - arrayOfPeople[i].yearOfBirth > age) {
        age = 2024 - arrayOfPeople[i].yearOfBirth
        oldestPerson = arrayOfPeople[i];
      }
    } else {
      if (arrayOfPeople[i].yearOfDeath - arrayOfPeople[i].yearOfBirth > age) {
        age = arrayOfPeople[i].yearOfDeath - arrayOfPeople[i].yearOfBirth;
        oldestPerson = arrayOfPeople[i];
      }
    }
    // console.log(age, oldestPerson);
  }
  // console.log(oldestPerson);
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
