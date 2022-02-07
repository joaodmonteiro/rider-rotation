import '../styles.css';
import menuX from '../images/X.svg';
import gorillasLogo from '../images/logo.jpeg';
import plusSign from '../images/plus.svg';
import { bikes, loadBikesPage } from './bikes';
import { importRider, updateLocalStorage } from './storage';

// Insert logo on the header
const logo = new Image();
logo.src = gorillasLogo;

document.querySelector('.logo').appendChild(logo);

logo.style.maxWidth = "150px";
logo.style.height = "auto";

// Insert plus sign 
const plus = new Image();
plus.src = plusSign;
plus.classList.add('plus');

document.querySelector('.plusBox').appendChild(plus);

// HTML elements
const availList = document.getElementById('available');
const onARideList = document.getElementById('onARide');
const onABreakList = document.getElementById('onABreak');

// Array with all the Rider Objects
let riders = [];

// Array with available riders
let ridersAvailable = [];

// Array with riders on a ride
let ridersOnARide = [];

// Array with riders on break
let ridersOnBreak = [];

// Rider Factory Function
const Rider = (name, bikeNumber, riderID) => {
    let onARide = false;
    let onBreak = false;
    let bike = bikeNumber;
    let detailsShowing = false;
    let breakStartTime;
    let breakEndTime;
    let hadBreak = false;
    const getHadBreak = () => hadBreak;
    const getBreakEndTime = () => breakEndTime;
    const isOnARide = () => onARide;
    const isOnBreak = () => onBreak;
    const areDetailsShowing = () => detailsShowing;
    const toggleOnARide = () => {
        if(onARide) {
            onARide = false;
        }
        else {
            onARide = true;
        }
    };
    const toggleOnBreak = () => {
        if(onBreak) {
            onBreak = false;
            hadBreak = true;
        }
        else if(!hadBreak) {
            onBreak = true;
            let now = new Date();
            setBreakEndTime(now);
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
    const setBreakEndTime = (time) => {
        breakStartTime = time;
        breakEndTime = time;
        // breakEndTime.setMinutes(breakStartTime.getMinutes() + 30);
        breakEndTime.setSeconds(breakStartTime.getSeconds() + 60);
    }
    const changeBike = (newBike) => {
        bike = newBike;
    }
    return {name, bike, riderID, isOnARide, isOnBreak, areDetailsShowing, getBreakEndTime, getHadBreak, toggleOnARide, toggleOnBreak, toggleDetails, changeBike}
};

// localStorage.clear();

// Retrieve info from localstorage
for(let i = 0; i < localStorage.getItem('ridersLength'); i++)
{
    let importedObject = importRider(i);

    let importedRider = Rider(importedObject.name, importedObject.bike, importedObject.riderID);

    riders.push(importedRider);
    ridersAvailable.push(importedRider.riderID);
    listRider(importedRider);
}

refreshRiderRotation();

function AddRider(riderName, bikeNumber) {

    let uniqueID = 1;
    if(riders.length > 0)
        uniqueID = +riders[riders.length - 1].riderID + 1;

    uniqueID = uniqueID.toString();
    const newRider = Rider(riderName, bikeNumber, uniqueID);
    riders.push(newRider);
    ridersAvailable.push(uniqueID);

    // List Rider
    listRider(newRider);

    updateLocalStorage();

    // localStorage.setItem(`riders[${localStorage.ridersLength}]`, JSON.stringify(newRider));
    // localStorage.setItem(`ridersAvailable[${localStorage.ridersAvailableLength}]`, JSON.stringify(newRider));

    // localStorage.ridersLength = +localStorage.ridersLength + 1;
    // localStorage.ridersAvailableLength = +localStorage.ridersAvailableLength + 1;

    console.log("riders:");
    console.log(riders);
    console.log("ridersAvailable:");
    console.log(ridersAvailable);
    console.log("ridersOnARide:");
    console.log(ridersOnARide);
    console.log("ridersOnBreak:");
    console.log(ridersOnBreak);
    console.log(localStorage);
}

function DeleteRider(uniqueID) {
    // Find rider to delete through ID
    let riderToDelete = riders.find(function(r) {
        return r.riderID == uniqueID;
    });

    // Remove rider from one of the rotation arrays
    if(riderToDelete.isOnARide()) {
        ridersOnARide.splice(ridersOnARide.indexOf(uniqueID), 1);
    }
    else if(riderToDelete.isOnBreak()) {
        ridersOnBreak.splice(ridersOnBreak.indexOf(uniqueID), 1);
    }
    else {
        ridersAvailable.splice(ridersAvailable.indexOf(uniqueID), 1);
    }

    // Remove from main array
    let indexToDelete = riders.indexOf(riderToDelete);
    riders.splice(indexToDelete, 1);

    console.log("riders:");
    console.log(riders);
    console.log("ridersAvailable:");
    console.log(ridersAvailable);
    console.log("ridersOnARide:");
    console.log(ridersOnARide);
    console.log("ridersOnBreak:");
    console.log(ridersOnBreak);
    console.log(localStorage);

    //Refresh rotation
    refreshRiderRotation();

    // Update local storage
    updateLocalStorage();
}

function StartRide(uniqueID) {
    let rider = riders.find(function(r) {
        return r.riderID == uniqueID;
    });

    if(rider.isOnBreak()) {

        rider.toggleOnBreak();

        ridersOnBreak.splice(ridersOnBreak.indexOf(uniqueID), 1);
    }
    else {
        ridersAvailable.splice(ridersAvailable.indexOf(uniqueID), 1);
    }
        
    rider.toggleOnARide();
    
    //Insert rider in on a ride array
    ridersOnARide.push(uniqueID);

    console.log("riders:");
    console.log(riders);
    console.log("ridersAvailable:");
    console.log(ridersAvailable);
    console.log("ridersOnARide:");
    console.log(ridersOnARide);
    console.log("ridersOnBreak:");
    console.log(ridersOnBreak);
    console.log(localStorage);

    refreshRiderRotation();

    updateLocalStorage();
}

function EndRide(uniqueID) {
    let rider = riders.find(function(r) {
        return r.riderID == uniqueID;
    });

    rider.toggleOnARide();

    // Remove rider from On a ride array
    ridersOnARide.splice(ridersOnARide.indexOf(uniqueID), 1);

    // Insert rider on available array
    ridersAvailable.push(uniqueID);

    console.log("riders:");
    console.log(riders);
    console.log("ridersAvailable:");
    console.log(ridersAvailable);
    console.log("ridersOnARide:");
    console.log(ridersOnARide);
    console.log("ridersOnBreak:");
    console.log(ridersOnBreak);
    console.log(localStorage);

    refreshRiderRotation();

    updateLocalStorage();
}

function GoOnBreak(uniqueID) {
    let rider = riders.find(function(r) {
        return r.riderID == uniqueID;
    });

    if(!rider.getHadBreak()) {
        if(rider.isOnARide()) {
            rider.toggleOnARide();
            ridersOnARide.splice(ridersOnARide.indexOf(uniqueID), 1);
            
        }
        else {
            ridersAvailable.splice(ridersAvailable.indexOf(uniqueID), 1);
        }
            
        rider.toggleOnBreak();
    
        ridersOnBreak.push(uniqueID);
    
        refreshRiderRotation();

        updateLocalStorage();
    
        console.log(ridersAvailable);
        console.log(ridersOnARide);
        console.log(ridersOnBreak);
    }
}

function EndBreak(uniqueID) {
    let rider = riders.find(function(r) {
        return r.riderID == uniqueID;
    });

    rider.toggleOnBreak();
    ridersOnBreak.splice(ridersOnBreak.indexOf(uniqueID), 1);

    ridersAvailable.push(uniqueID);
    refreshRiderRotation();

    updateLocalStorage();
}

// Refresh Rider Rotation page
function refreshRiderRotation() {
    availList.innerHTML = "";
    onARideList.innerHTML = "";
    onABreakList.innerHTML = "";

    ridersAvailable.forEach( function(id) {
        let rider = riders.find(function(r) {
            return r.riderID == id;
        });
        listRider(rider);
    });

    ridersOnARide.forEach( function(id) {
        let rider = riders.find(function(r) {
            return r.riderID == id;
        });
        listRider(rider);
    });

    ridersOnBreak.forEach( function(id) {
        let rider = riders.find(function(r) {
            return r.riderID == id;
        });
        listRider(rider);
    });
}

// Create rider list item
function listRider(rider) {

    let listItem = document.createElement('li');
    listItem.id = `li-${rider.riderID}`;

    let riderBox = document.createElement('div');
    riderBox.classList.add('riderBox');

    let span = document.createElement('span');
    span.classList.add('riderNameBox');
    span.id = `nameBox-${rider.riderID}`;
    span.textContent = rider.name;

    riderBox.appendChild(span);

    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttonsContainer');

    if(rider.isOnARide()) {
        let backButton = document.createElement('button');
        backButton.classList.add('back');
        backButton.textContent = 'Back';
        backButton.id = `breakEnd-${rider.riderID}`;

        let breakButton = document.createElement('button');
        breakButton.classList.add('break');
        breakButton.id = `break-${rider.riderID}`;
        if(rider.getHadBreak())
            breakButton.style.opacity = "0.3";

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'X';
        deleteButton.id = `delete-${rider.riderID}`;
        deleteButton.style.order = '3';

        buttonsContainer.appendChild(backButton);
        buttonsContainer.appendChild(breakButton);
        buttonsContainer.appendChild(deleteButton);

        riderBox.appendChild(buttonsContainer);
        listItem.appendChild(riderBox);
        onARideList.appendChild(listItem);
    }
    else if(rider.isOnBreak()) {
        let startButton = document.createElement('button');
        startButton.classList.add('start');
        startButton.textContent = 'Go';
        startButton.id = `start-${rider.riderID}`;

        let backButton = document.createElement('button');
        backButton.classList.add('backFromBreak');
        backButton.textContent = 'Back';
        backButton.id = `breakEnd-${rider.riderID}`;

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'X';
        deleteButton.id = `delete-${rider.riderID}`;
        deleteButton.style.order = '3';

        // Create timer
        let counter = document.createElement('p');
        counter.classList.add('breakTimer');
        counter.id = `breakTimer-${rider.id}`;

        let timeNow = new Date();
        let totalSecondsLeft = (rider.getBreakEndTime().getTime() - timeNow.getTime()) / 1000;
        let secondsLeft = Math.floor(totalSecondsLeft % 60);
        let minutesLeft = Math.floor(totalSecondsLeft / 60);
        counter.textContent = `${minutesLeft}:0${secondsLeft}`;

        let timerCircle = document.createElement('div');
        timerCircle.classList.add('timer-circle');
        timerCircle.style = `--duration: ${totalSecondsLeft};--size: 30;`;
        let circleMask = document.createElement('div');
        circleMask.classList.add('mask');

        let intervalFunction = setInterval(function() {
            if(!rider.getHadBreak())
                updateCountdown(rider);
        }, 1000);
        
        buttonsContainer.appendChild(startButton);
        buttonsContainer.appendChild(backButton);
        buttonsContainer.appendChild(deleteButton);

        riderBox.appendChild(buttonsContainer);
        listItem.appendChild(riderBox);
        timerCircle.appendChild(circleMask);
        listItem.appendChild(timerCircle);
        listItem.appendChild(counter);

        // listItem.appendChild(counter);
        onABreakList.appendChild(listItem);
    }
    else {
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.id = `delete-${rider.riderID}`;
        deleteButton.textContent = 'X';
    
        let startButton = document.createElement('button');
        startButton.classList.add('start');
        startButton.id = `start-${rider.riderID}`;
        startButton.textContent = 'Go';
    
        let breakButton = document.createElement('button');
        breakButton.classList.add('break');
        breakButton.id = `break-${rider.riderID}`;

        if(rider.getHadBreak())
            breakButton.style.opacity = "0.3";
    
        buttonsContainer.appendChild(startButton);
        buttonsContainer.appendChild(breakButton);
        buttonsContainer.appendChild(deleteButton);
        deleteButton.style.order = '3';
        
        riderBox.appendChild(buttonsContainer);
    
        listItem.appendChild(riderBox);
        
        availList.appendChild(listItem);
    }
    
}

// Input and event listeners
document.addEventListener('click', function(obj) {

    // START Button
    if(obj.target.classList.contains('start')) {

        // Get Rider ID from button's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        // Call Start Ride function
        StartRide(riderID); 
    }
    // Delete Button
    else if(obj.target.classList.contains('delete')) {

        // Get Rider ID from button's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        // Call Delete RIder function
        DeleteRider(riderID);

    }
    // Back Button
    else if(obj.target.classList.contains('back')) {

        // Get Rider ID from button's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        // Call End Ride function
        EndRide(riderID);
    }
    // Break Button
    else if(obj.target.classList.contains('break')) {
        
        // Get Rider ID from button's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        // Call Go On Break function
        GoOnBreak(riderID);
    }
    // Back from break button
    else if(obj.target.classList.contains('backFromBreak')) {
        
        // Get Rider ID from button's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        // Call End Break function
        EndBreak(riderID);
    }
    // Click on rider
    else if(obj.target.classList.contains('riderNameBox')) {

        // Get Rider ID from element's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        let rider = riders.find(function(r) {
            return r.riderID == riderID;
        });

        if(!rider.areDetailsShowing()) {
            let riderDetails = document.createElement('div');
            riderDetails.classList.add('riderDetails');
            riderDetails.textContent = `Bike number: ${rider.bike}`;
            document.querySelector(`#li-${rider.riderID}`).appendChild(riderDetails);
            rider.toggleDetails();
            
        }
        else {
            document.querySelector('.riderDetails').remove();
            rider.toggleDetails();
        }
    }
    // Click on '+' sign
    else if(obj.target.classList.contains('plus')) {

        // Create container(box)
        let addRiderBoxContainer = document.createElement('div');
        addRiderBoxContainer.classList.add('addRiderBoxContainer');
        document.body.appendChild(addRiderBoxContainer);

        // Title
        let addRiderTitle = document.createElement('p');
        addRiderTitle.textContent = "New Rider:";
        addRiderBoxContainer.appendChild(addRiderTitle);

        // Input box for name
        let inputName = document.createElement('input');
        inputName.type = 'text';
        inputName.placeholder = "Name";
        inputName.classList.add('inputName');
        addRiderBoxContainer.appendChild(inputName);

        // Input box for bike number
        let dropDownMenuBikes = document.createElement('select');
        dropDownMenuBikes.innerHTML = `<option value="" disabled selected>Bike</option>`;
        dropDownMenuBikes.classList.add('dropdownBikeSelector');
        dropDownMenuBikes.name = "bikes"

        // Include all bikes
        bikes.forEach( function(b) {
            let bikeForSelection = document.createElement('option');
            bikeForSelection.textContent = b.number;
            dropDownMenuBikes.appendChild(bikeForSelection);
        });

        addRiderBoxContainer.appendChild(dropDownMenuBikes);

        // Submit button
        let addRiderButton = document.createElement('button');
        addRiderButton.textContent = "Add rider";
        addRiderButton.classList.add("addRiderButton");
        addRiderBoxContainer.appendChild(addRiderButton); 

        inputName.focus();

        // Close window if clicked outside
        document.addEventListener("click", (evt) => {
            let targetElement = evt.target; // clicked element
        
            do {
                if (targetElement == addRiderBoxContainer) {
                    // This is a click inside. Do nothing, just return.
                    return;
                }
                // Go up the DOM
                targetElement = targetElement.parentNode;
            } while (targetElement);
        
            // This is a click outside.
            addRiderBoxContainer.remove();
        });

        // Submit if 'Enter' is pressed
        document.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
            event.preventDefault();
            document.querySelector('.addRiderButton').click();
        }
  });
        
    }
    // click on 'Add rider' button
    else if(obj.target.classList.contains('addRiderButton')) {

        let addRiderBoxContainer = document.querySelector('.addRiderBoxContainer');
        let riderName = document.querySelector('.inputName').value;
        let bikeNumber = document.querySelector('.dropdownBikeSelector').value;

        if(riderName != '') {
            AddRider(riderName, bikeNumber);
            addRiderBoxContainer.remove();
        }
        else
            alert("Rider needs a name!");
    }
});

let menuButton = document.querySelector('.menuIcon');

menuButton.addEventListener('click', function() {
    console.log("menuuu");

    let menuBox = document.createElement('div');
    menuBox.classList.add('menuBox');
    

    let closeMenu = new Image();
    closeMenu.src = menuX;
    closeMenu.classList.add('closeMenu');
    menuBox.appendChild(closeMenu);

    let rotationTabButton = document.createElement('a');
    rotationTabButton.textContent = "ROTATION";
    rotationTabButton.classList.add('menu-tab');
    menuBox.appendChild(rotationTabButton);

    
    let ridersTabButton = document.createElement('a');
    ridersTabButton.textContent = "RIDERS";
    ridersTabButton.classList.add('menu-tab');
    menuBox.appendChild(ridersTabButton);

    let ridersTabContainer = document.createElement('div');
    ridersTabContainer.classList.add('riders-tab-container');
    ridersTabButton.appendChild(ridersTabContainer);

    let bikesTabButton = document.createElement('a');
    bikesTabButton.textContent = "BIKES";
    bikesTabButton.classList.add('menu-tab');
    menuBox.appendChild(bikesTabButton);

    document.body.appendChild(menuBox);

    setTimeout( function() {
        menuBox.classList.add('opened');
    }, 10);
    
    // Close Menu
    closeMenu.addEventListener('click', function() {
        menuBox.classList.add('closed');
        setTimeout( function() {
            menuBox.remove();
        }, 200);
        
    });

    // Open Rider Rotation page
    rotationTabButton.addEventListener('click', function() {

        menuBox.classList.add('closed');
        setTimeout( function() {
            menuBox.remove();
        }, 200);

        document.querySelector('.bikesContainer').style.display = "none";
        
        document.querySelector('#main').style.display = "grid";

        document.querySelector('.pageTitle').textContent = "RIDER ROTATION";

        document.querySelector('.plusBox').style.display = "flex";

    });

    ridersTabButton.addEventListener('click', function() {
        if(!ridersTabContainer.classList.contains('opened')) {
            ridersTabContainer.classList.add('opened');

            riders.forEach( function(rider) {
                let riderListing = document.createElement('a');
                riderListing.textContent = rider.name;
                ridersTabContainer.appendChild(riderListing);
            });
        }
        else {
            ridersTabContainer.classList.remove('opened');
            ridersTabContainer.innerHTML = '';
        }
        
    });

    // Open Bikes page
    bikesTabButton.addEventListener('click', function() {

        menuBox.classList.add('closed');
        setTimeout( function() {
            menuBox.remove();
        }, 200);

        loadBikesPage();
    });
});


function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function updateCountdown(rider) {
    let timeNow = new Date();
    let totalSecondsLeft = (rider.getBreakEndTime().getTime() - timeNow.getTime()) / 1000;
    let secondsLeft = Math.floor(totalSecondsLeft % 60);
    let minutesLeft = Math.floor(totalSecondsLeft / 60);
    let counter = document.querySelector(`#breakTimer-${rider.id}`);

    if(secondsLeft<10)
        counter.textContent = `${minutesLeft}:0${secondsLeft}`;
    else
        counter.textContent = `${minutesLeft}:${secondsLeft}`;
    if(minutesLeft <= 1)
        counter.style.color = 'red';
    
    if(minutesLeft <= 0 && secondsLeft <= 0) {
        alert(`${rider.name} has finished his break!`);
        EndBreak(rider.riderID);
        // clearInterval(intervalFunction);
    }    
}

// if (storageAvailable('localStorage')) {
//     // Yippee! We can use localStorage awesomeness
//     console.log('yes');
//   }
//   else {
//     // Too bad, no localStorage for us
//     console.log('no');
//   }

export { riders, ridersAvailable, ridersOnARide, ridersOnBreak };