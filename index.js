const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  driverClone = {...driver}
  driverClone[key] = value
  return driverClone
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}
