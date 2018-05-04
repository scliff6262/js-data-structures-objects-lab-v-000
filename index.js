const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  Object.assign({}, driver, {driver[key] = value})
  return driver
}
