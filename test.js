function _calculateLabor(people){
  let laborTotal = 0;
  for(let i = 0; i < people.length; i++){
    laborTotal += (people[i].hourlyRate * people[i].numHours) * people[i].count;
  }
  return laborTotal;
}

let expenseRatio = .55;

let driver = {hourlyRate:25,numHours:1.25,count:1};
let helper = {hourlyRate:18,numHours:1.25,count:1};

let peopleTypes = [driver,helper];

let laborTotal = _calculateLabor(peopleTypes);

let linehaul = 0;
let pack = 0;
let orig = 0;
let dest = 0;
let irr = 0;

let roundTripMiles = 100;
let mph = 55;
let hoursPerTrip = roundTripMiles / mph;
let loadUnloadHours = 6;
let totalHours = hoursPerTrip + loadUnloadHours;

let laborCostPerTl = laborTotal * totalHours;
let materialCost  = 0;

let fuelPpg = 3.89;
let mpg = 6.3
let gallonsPerTrip = roundTripMiles / mpg;
let fuelCost = fuelPpg * gallonsPerTrip;
let truckOperationalCost = (.255 + .035 + .022 + .075 + .166) * roundTripMiles;

let totalLaborMaterialCost = laborCostPerTl + materialCost;
let laborMaterialQuote = totalLaborMaterialCost/expenseRatio;
let totalOtherCost = fuelCost + truckOperationalCost;
let otherQuote = totalOtherCost * 1;
let quote = otherQuote + laborMaterialQuote;
let totalCost = totalLaborMaterialCost + totalOtherCost + materialCost;
let margin = ((quote - totalCost) / quote) * 100;

console.log(margin);
