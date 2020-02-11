// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, runAfterFileRead) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) { 
      runAfterFileRead(data);
    } else {
      runAfterFileRead(undefined);
    }
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};
// we try to get the return value

module.exports = breedDetailsFromFile;