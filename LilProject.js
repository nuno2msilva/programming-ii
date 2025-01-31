function countRemainingCookies(currentCookies) {
    if (currentCookies === 0) {
        console.log("All cookies are gone! 🍪💨");
        return; 
    }
    console.log(`There are ${currentCookies} cookies in the jar!`);    
    let newCookieCount = currentCookies - 1;
    console.log("I eat one cookie! CHOMP! 🦷");
    countRemainingCookies(newCookieCount);
}
let initialCookies = 5;

countRemainingCookies(initialCookies);
