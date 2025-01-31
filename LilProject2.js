let fuel = 5000;

function checkFuel() {
  if (fuel <= 1000) {
    console.log("Time to order fuel!");
    return;
  }
  
  fuel -= 150; // Fixed usage per check
  console.log(`Fuel left: ${fuel}L`);
  
  checkFuel();
}

console.log("-- FUEL TRACKER --");
checkFuel();