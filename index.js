// Code your solution in this file.
drivers={};

function lowerCaseDrivers(drivers){
  return drivers.map(function (driver) {
   return driver.toLowerCase();
 });
}

function nameToAttributes(drivers){
  const newDrivers = map(drivers, function (driver) {
    return Object.assign({}, driver, {
      let driverName = driver.split(' ')
      firstname: driverName[0] ,
      lastName: driverName[1]});
  });
  return newDrivers;
}

function attributesToPhrase(drivers){

}
