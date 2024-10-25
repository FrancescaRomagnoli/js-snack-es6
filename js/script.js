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
// console.log(bicycleList);

let lightestBicycle = bicycleList[0];

for (i = 1; i < bicycleList.length; i++) {
  let currentBicycle = bicycleList[i];

  if (currentBicycle.weightValue < lightestBicycle.weightValue) {
    lightestBicycle = currentBicycle;
  }
}

console.log("The lightest bicycle is: ", lightestBicycle.name);

// $ Snack 2
// $ Creare un array di oggetti di squadre di calcio.
// $  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// $ Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// $ Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// $ Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// # functions

function footballTeam(name) {
  this.name = name;
  this.points = 0;
  this.fouls = 0;
}

function randomNum(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;

  return num;
}

// # objects

const footballTeam1 = new footballTeam("AFC Richmond");
const footballTeam2 = new footballTeam("Crystal Palace F.C.");
const footballTeam3 = new footballTeam("West Ham United F.C.");

const footballTeams = [footballTeam1, footballTeam2, footballTeam3];
// console.log(footballTeams);

const footballTeamsStats = [];

for (i = 0; i < footballTeams.length; i++) {
  let currentTeam = footballTeams[i];
  currentTeam.points = randomNum(1, 100);
  currentTeam.fouls = randomNum(1, 99);

  footballTeamsStats.push(currentTeam.name + " fouls: " + currentTeam.fouls);
}

console.log(footballTeamsStats);
