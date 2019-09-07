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
