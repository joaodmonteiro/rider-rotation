import arrowDown from '../images/arrow-down.svg';

// Array for bikes
let bikes = [];

// Bike Factory Function
const Bike = (number, model, status) => {
    let bikeStatus = status;
    let details;
    let detailsShowing = false;

    const getStatus = () => bikeStatus;
    const areDetailsShowing = () => detailsShowing;

    const toggleStatus = () => {
        if(bikeStatus == "Out of Action") {
            bikeStatus = "In Action";
        }
        else {
            bikeStatus = "Out of Action";
        } 
    }

    const toggleDetails = () => {
        if(detailsShowing) {
            detailsShowing = false;
        }
        else {
            detailsShowing = true;
        }
    }

    const changeDetails = (newDetails) => {
        details = newDetails;
    }

    return {number, model, getStatus, toggleStatus, toggleDetails, changeDetails, areDetailsShowing}
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


function loadBikesPage() {

    // Empty main so we can populate it with the bikes
    document.querySelector('#main').style.display = "none";

    // Create container for the bikes
    let bikesContainer = document.querySelector('.bikesContainer');
    bikesContainer.innerHTML = "";
    bikesContainer.style.display = "inherit";

    // Sort bikes by status (In action on top)
    sortBikesByStatus(bikes);

    //Create each bike listing
    bikes.forEach(function(bike) {
        listBike(bike);
    
    });

    document.querySelector('.pageTitle').textContent = "BIKES";

    document.querySelector('.plusBox').style.display = "none";
}

// List bike info
function listBike(bike) {
    let bikesContainer = document.querySelector('.bikesContainer');

    let bikeInfoBox = document.createElement('div');
    bikeInfoBox.id = `bikeInfoBox-${bike.number}`;

    let visibleInfo = document.createElement('div');
    visibleInfo.classList.add('bikeVisibleInfo');

    let bikeID = document.createElement('p');
    bikeID.textContent = bike.number;

    let bikeModel = document.createElement('p');
    bikeModel.textContent = bike.model;

    let bikeStatus = document.createElement('p');
    bikeStatus.textContent = bike.getStatus();

    let editButton = document.createElement('button');
    editButton.classList.add("bikeEditButton");
    editButton.id = `edit-${bike.number}`;
    editButton.textContent = "details";

    visibleInfo.appendChild(bikeID);
    visibleInfo.appendChild(bikeModel);
    visibleInfo.appendChild(bikeStatus);
    visibleInfo.appendChild(editButton);

    bikeInfoBox.appendChild(visibleInfo);

    bikesContainer.appendChild(bikeInfoBox); 

    editButton.addEventListener("click", function() {
        bike.toggleDetails();
        if(bike.areDetailsShowing())
            openBikeDetails(bike);
        else
        document.querySelector('.editDetails').remove();
    });
}

// Sort bikes by status (In action on top)
function sortBikesByStatus(bikesArray) {
    let bikesSorted = bikes.sort( function(a, b) {
        if(a.getStatus() < b.getStatus())
        {
            return -1;
        }
        if(a.getStatus() > b.getStatus())
        {
            return 1;
        }
        return 0;
    });
}

// Show details of the bike
function openBikeDetails(bike) {
    
    let bikeInfoBox = document.querySelector(`#bikeInfoBox-${bike.number}`);
    let editDetails = document.createElement('div');
    editDetails.classList.add('editDetails');
    let changeStatusButton = document.createElement('button');
    changeStatusButton.textContent = "Change status";
    let detailsBox = document.createElement('input');
    detailsBox.placeholder = "more details...";

    editDetails.appendChild(changeStatusButton);
    editDetails.appendChild(detailsBox);
    bikeInfoBox.appendChild(editDetails);

    changeStatusButton.addEventListener('click', function() {
        bike.toggleStatus();
        loadBikesPage();
    });

}

export { loadBikesPage, bikes };