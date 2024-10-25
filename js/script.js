// $ Snack 1
// $ Creare un array di oggetti:
// $ Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// $ Stampare a schermo la bici con peso minore.

// # functions

function Bicycle(name, weight) {
  this.name = name;
  this.weightValue = weight;
  this.weightUnit = "kg";
}

// # objects

const bicycleOne = new Bicycle("Bicycle One", 30);
const bicycleTwo = new Bicycle("Bicycle Two", 25);
const bicycleThree = new Bicycle("Bicycle Three", 40);

// # objects array

const bicycleList = [bicycleOne, bicycleTwo, bicycleThree];
console.log(bicycleList);

let lightestBicycle = bicycleList[0];

for (i = 1; i < bicycleList.length; i++) {
  let currentBicycle = bicycleList[i];

  if (currentBicycle.weightValue < lightestBicycle.weightValue) {
    lightestBicycle = currentBicycle;
  }
}

console.log(lightestBicycle.name);
