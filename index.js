// Code your solution in this file.
drivers={};

function lowerCaseDrivers(drivers){
  return drivers.map(function (driver) {
   return driver.toLowerCase();
 });
}

function nameToAttributes(drivers){
  return drivers.map(function (driver) {
    let copyDrivers = Object.assign({}, driver);
    copyDrivers.keys("firstname") 
    copyDrivers.keys("lastname")
    
   return copyDrivers;
 });
}
