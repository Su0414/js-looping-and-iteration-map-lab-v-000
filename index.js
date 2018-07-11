// Code your solution in this file.
drivers={};

function lowerCaseDrivers(drivers){
  return drivers.map(function (driver) {
   return driver.toLowerCase();
 });
}

function nameToAttributes(drivers){

  return drivers.map(function (driver) {
   return driver.split(' ');
 });

}

function attributesToPhrase(drivers){

}
