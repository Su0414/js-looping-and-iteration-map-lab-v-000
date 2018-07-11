// Code your solution in this file.
drivers={};

function lowerCaseDrivers(drivers){
  return drivers.map(function (driver) {
   return driver.toLowerCase();
 });
}

function nameToAttributes(drivers){
  return drivers.map(function (driver) {
   return Object.assign({}, driver, {firstname: driver.split(' '), lastname:driver.split(' ')});
 });
}
