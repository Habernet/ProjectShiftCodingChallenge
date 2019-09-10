// Problem 1
let alertDurhamStatus = () => {
  alert("Durham is awesome!");
};

// Problem 2 and Problem 3
const bands = ["Kiss", "Aerosmith", "ACDC", "Led Zeppelin", "Nickelback"];

let bandAlertLooper = () => {
  bands.forEach(band => {
    if (band === "Nickelback") {
      alert(`I DON'T love Nickelback!`);
    } else {
      alert(`I love ${band}!`);
    }
  });
};

const array = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];

let findAverage = arr => {
  // parse the array and add it to a total
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += i;
  }
  // divide the total by the length of the array
  let average = total / arr.length;
  alert(`Average: ${average}`);
};
