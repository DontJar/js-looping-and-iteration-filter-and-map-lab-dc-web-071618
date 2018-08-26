// Code your solution here:
function driversWithRevenueOver(driver, amt) {
    return driver.filter(function (x) {
      return x.revenue > amt;
    });
  }

function driverNamesWithRevenueOver(drivers, amt) {
  return driversWithRevenueOver(drivers, amt).map(function (y){
    return y.name;
  })
}

function exactMatch(drivers, search){
  return drivers.filter(function (z){
    let matches = false;

    for (const key in search) {
      matches = z[key] === search[key];
    }
    return matches;
  });

}

function exactMatchToList(drivers, search){
  return exactMatch(drivers, search).map(function (q){
    return q.name;
  })
}
