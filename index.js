const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  driverClone = {...driver}
  driverClone[key] = value
  return driverClone
}
