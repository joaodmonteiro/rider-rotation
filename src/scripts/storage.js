import { riders, ridersAvailable, ridersOnARide, ridersOnBreak } from './index';

function importRider(index) {

    let importedObject= JSON.parse(localStorage.getItem(`riders[${index}]`));
    
    return importedObject;
}

// Update local storage
function updateLocalStorage() {

    // Clear local storage
    localStorage.clear();

    // Save riders array and length of array
    localStorage.setItem("ridersLength", riders.length);

    riders.forEach( function(rider) {
        localStorage.setItem(`riders[${riders.indexOf(rider)}]`, JSON.stringify(rider));
    });

    // Save riders available array and length of array
    localStorage.setItem("ridersAvailableLength", ridersAvailable.length);

    ridersAvailable.forEach( function(riderID) {
        localStorage.setItem(`ridersAvailable[${ridersAvailable.indexOf(riderID)}]`, riderID);
    });

    // Save riders on a ride array and length of array
    localStorage.setItem("ridersOnARideLength", ridersOnARide.length);

    ridersOnARide.forEach( function(riderID) {
        localStorage.setItem(`ridersOnARide[${ridersOnARide.indexOf(riderID)}]`, riderID);
    });

    // Save riders on break array and length of array
    localStorage.setItem("ridersOnBreakLength", ridersOnBreak.length);

    ridersOnBreak.forEach( function(riderID) {
        localStorage.setItem(`ridersOnBreak[${ridersOnBreak.indexOf(riderID)}]`, riderID);
    });
}

export { importRider, updateLocalStorage };