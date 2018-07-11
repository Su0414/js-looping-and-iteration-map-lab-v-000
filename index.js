// Code your solution in this file.
drivers={};

function lowerCaseDrivers(drivers){
  return drivers.map(function (driver) {
   return driver.toLowerCase();
 });
}

function nameToAttributes(drivers){
  const newDrivers = map(drivers, function (driver) {
    let driverName = driver.split(' ');
    return Object.assign({}, driver, {
      firstname: driverName[0] ,
      lastName: driverName[1]});
  });
  return newDrivers;
}
