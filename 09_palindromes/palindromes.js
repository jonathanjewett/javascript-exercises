const palindromes = function (string) {
  // let newString = '';
  // let reversedString = '';
  // for (let i = 0; i < string.length; i++) {
  //   if (string[i] !== /[^a-z0-9]/) {
  //     newString += string[i];
  //   }
  // }
  // console.log('/[^a-z0-9]/g');

  // for (let i = newString.length - 1; i >= 0; i--) {
  //   reversedString += newString[i];
  // }

  // console.log(reversedString);

  // for (let i = 0; i < newString.length; i++) {
  //   if (newString[i] !== reversedString[i]) {
  //     return false;
  //   }
  // }

  // return true;
  const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return processedString.split("").reverse().join("") === processedString;
};

// Do not edit below this line
module.exports = palindromes;
