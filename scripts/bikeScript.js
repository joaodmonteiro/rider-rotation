// Array for bikes
let bikes = [];

// Bike Factory Function
const Bike = (number, model, status) => {
    let bikeStatus = status;

    const changeStatus = (newStatus) => {
        bikeStatus = newStatus;
    }

    return {number, model, bikeStatus, changeStatus}
};

// Create some bikes
const M900 = Bike("M900", "Zoomo Zero", "Out of Action");
const Z895456 = Bike("Z895456", "Zoomo Zero", "In Action");
const Z895488 = Bike("Z895488", "Zoomo Zero", "Out of Action");
const Z895490 = Bike("Z895490", "Zoomo Zero", "In Action");
const Z895493 = Bike("Z895493", "Zoomo Zero", "In Action");
const Z896360 = Bike("Z896360", "Zoomo Zero", "In Action");
const Z896699 = Bike("Z896699", "Zoomo Zero", "In Action");
const Z897530 = Bike("Z897530", "Zoomo Zero", "In Action");
const Z897531 = Bike("Z897531", "Zoomo Zero", "In Action");
const Z897556 = Bike("Z897556", "Zoomo Zero", "In Action");
const Z897643 = Bike("Z897643", "Zoomo Zero", "In Action");
const Z897677 = Bike("Z897677", "Zoomo Zero", "In Action");
const Z897798 = Bike("Z897798", "Zoomo Zero", "In Action");
const Z897832 = Bike("Z897832", "Zoomo Zero", "In Action");
const Z898055 = Bike("Z898055", "Zoomo Zero", "Out of Action");
const Z898202 = Bike("Z898202", "Zoomo Zero", "In Action");
const Z898242 = Bike("Z898242", "Zoomo Zero", "In Action");
const Z898281 = Bike("Z898281", "Zoomo Zero", "In Action");
const Z898477 = Bike("Z898477", "Zoomo Zero", "In Action");
const Z899317 = Bike("Z899317", "Zoomo Zero", "In Action");

bikes.push(M900, Z895456, Z895488, Z895490, Z895493, Z896360, Z896699,
    Z897530, Z897531, Z897556, Z897643, Z897677, Z897798, Z897832,
    Z898055, Z898202, Z898242, Z898281, Z898477, Z899317);

console.log(bikes);

let bikesContainer = document.querySelector('.bikesContainer');

bikes.forEach(function(bike) {
    let bikeInfoBox = document.createElement('div');
    bikeInfoBox.classList.add('bikeInfoBox');

    let bikeID = document.createElement('p');
    bikeID.textContent = bike.number;

    let bikeModel = document.createElement('p');
    bikeModel.textContent = bike.model;

    let bikeStatus = document.createElement('p');
    bikeStatus.textContent = bike.bikeStatus;

    console.log(bike.number);

    bikeInfoBox.appendChild(bikeID);
    bikeInfoBox.appendChild(bikeModel);
    bikeInfoBox.appendChild(bikeStatus);

    bikesContainer.appendChild(bikeInfoBox);
});