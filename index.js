const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  newObj = {key = value}
  return Object.assign({}, driver, newObj)
}
