// Code your solution in this file.
drivers={};

function lowerCaseDrivers(drivers){
  return drivers.map(function (driver) {
   return driver.toLowerCase();
 });
}

function nameToAttributes(drivers){
  return drivers.map(
    function (driver) {
      return  {firstName: driver.split(' ').first, lastName: driver.split(' ').last}
    }
);
}

function attributesToPhrase(drivers){
  return drivers.map(function (driver) {
   return driver.name + ' is from '+ driver.hometown;
 });
}
