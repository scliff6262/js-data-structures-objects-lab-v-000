const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {driver[key] = value})

}
