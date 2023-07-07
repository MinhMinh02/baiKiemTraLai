function allLongestStrings(inputArray) {
  let maxLength = 0;
  
  
  for (let i = 0; i < inputArray.length; i++) {
    const currentLength = inputArray[i].length;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }
  
  const longestStrings = [];
  
 
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === maxLength) {
      longestStrings.push(inputArray[i]);
    }
  }
  
  return longestStrings;
}


const input = ["LUFFY", "ZORO", "SANJI", "NAMI", "USOPP", "ROBIN", "FRANKI","BROOK","CHOPPER","JINBE"];
const output = allLongestStrings(input);
console.log(output);
