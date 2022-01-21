// HTML elements
const input = document.querySelector('input');
const availList = document.getElementById('available');
const onARideList = document.getElementById('onARide');
const onABreakList = document.getElementById('onABreak');
const addRiderButton = document.querySelector('.addRiderButton');

// Array with all the Rider Objects
let riders = [];

input.focus();

// Rider Factory Function
const Rider = (name, bikeNumber, id) => {
    let onARide = false;
    let onBreak = false;
    let bike = bikeNumber;
    let detailsShowing = false;
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
        }
        else {
            onBreak = true;
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
    return {name, bike, id, isOnARide, isOnBreak, areDetailsShowing, toggleOnARide, toggleOnBreak, toggleDetails}
};

// Create some riders
const joao = AddRider('Joao', 'Z822');
const maria = AddRider('Maria', 'Z822');
const rui = AddRider('Rui', 'Z522');
const fausto = AddRider('Fausto', 'Z830');
const jose = AddRider('Jose Miguel Sebastiao', 'Z855');
const ss = AddRider('Jose Miguel Sebastiao', 'Z855');
const joeese = AddRider('Jose Miguel Sebastiao', 'Z855');
const jofse = AddRider('Jose Miguel', 'Z855');
const joase = AddRider('Jose Miguel ', 'Z855');
const jogse = AddRider('Jose Mebastiao', 'Z855');
const johse = AddRider('Jose Miastiao', 'Z855');
const josje = AddRider('Jose Miao', 'Z855');
const joee22se = AddRider('Jose Miguel Se', 'Z855');
const joeqqse = AddRider('Jose Miguel Sebastiao', 'Z855');
const josqqe = AddRider('Jose ', 'Z855');


console.log(riders);

function AddRider(riderName, bikeNumber) {
    let uniqueID = 1;
    if(riders.length > 0)
        uniqueID = riders[riders.length - 1].id + 1;

    const newRider = Rider(riderName, bikeNumber, uniqueID);
    riders.push(newRider);

    let newItem = input.value;
    input.value = '';

    let listItem = document.createElement('li');
    listItem.id = `li-${uniqueID}`;
    let riderBox = document.createElement('div');
    riderBox.classList.add('riderBox');
    let span = document.createElement('span');
    span.classList.add('riderNameBox');
    span.id = `nameBox-${uniqueID}`;
    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttonsContainer');
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.id = `delete-${uniqueID}`;
    let startButton = document.createElement('button');
    startButton.classList.add('start');
    startButton.id = `start-${uniqueID}`;
    let breakButton = document.createElement('button');
    breakButton.classList.add('break');
    breakButton.id = `break-${uniqueID}`;


    span.textContent = newRider.name;
    deleteButton.textContent = 'X';
    startButton.textContent = 'Go';

    riderBox.appendChild(span);
    buttonsContainer.appendChild(startButton);
    buttonsContainer.appendChild(breakButton);
    buttonsContainer.appendChild(deleteButton);
    deleteButton.style.order = '3';
    
    riderBox.appendChild(buttonsContainer);

    listItem.appendChild(riderBox);
    
    availList.appendChild(listItem);
}

function DeleteRider(uniqueID) {
    let riderToDelete = riders.find(function(r) {
        return r.id == uniqueID;
    });

    riders.splice(riders.indexOf(riderToDelete), 1);
    console.log(riders);
}

function StartRide(uniqueID) {
    let riderToStart = riders.find(function(r) {
        return r.id == uniqueID;
    });

    riderToStart.toggleOnARide();
}

function EndRide(uniqueID) {
    let riderBack = riders.find(function(r) {
        return r.id == uniqueID;
    });

    riderBack.toggleOnARide();
}

function GoOnBreak(uniqueID) {
    let riderForBreak = riders.find(function(r) {
        return r.id == uniqueID;
    });

    riderForBreak.toggleOnBreak();
}

function EndBreak(uniqueID) {
    let riderBackFromBreak = riders.find(function(r) {
        return r.id == uniqueID;
    });

    riderBackFromBreak.toggleOnBreak();
}

// Input and event listeners
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13 && input.value != '') {
        event.preventDefault();
        addRiderButton.click();
    }
});


addRiderButton.onclick = function() {

    AddRider(input.value, '');

    input.focus();
}

document.addEventListener('click', function(obj) {

    // START Button
    if(obj.target.classList.contains('start')) {

        // Get Rider ID from button's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        // Get list element and buttons container
        let listElement = document.querySelector(`#li-${riderID}`);
        let buttonsContainer = obj.target.parentNode;

        // Move rider to 'On a Ride' List
        onARideList.appendChild(listElement);

        // Call Start Ride function
        StartRide(riderID);

        // -------Change buttons-----------

        //Reset container
        buttonsContainer.innerHTML = "";


        let backButton = document.createElement('button');
        backButton.classList.add('back');
        backButton.textContent = 'Back';
        backButton.id = `breakEnd-${riderID}`;
        let breakButton = document.createElement('button');
        breakButton.classList.add('break');
        breakButton.id = `break-${riderID}`;
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'X';
        deleteButton.id = `delete-${riderID}`;
        deleteButton.style.order = '3';

        buttonsContainer.appendChild(backButton);
        buttonsContainer.appendChild(breakButton);
        buttonsContainer.appendChild(deleteButton);
    }
    // Delete Button
    else if(obj.target.classList.contains('delete')) {

        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        DeleteRider(riderID);

        // Get list element and buttons container
        let listElement = document.querySelector(`#li-${riderID}`);
        listElement.remove();
    }
    // Back Button
    else if(obj.target.classList.contains('back')) {

        // Get Rider ID from button's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);
        console.log(obj.target);

        // Get list element and buttons container
        let listElement = document.querySelector(`#li-${riderID}`);
        let buttonsContainer = obj.target.parentNode;

        // Move rider to 'Available Riders' list
        availList.appendChild(listElement);

        // Call End Ride function
        EndRide(riderID);

        // -------Change buttons-----------

        //Reset container
        buttonsContainer.innerHTML = "";


        let startButton = document.createElement('button');
        startButton.classList.add('start');
        startButton.textContent = 'Go';
        startButton.id = `start-${riderID}`;
        let breakButton = document.createElement('button');
        breakButton.classList.add('break');
        breakButton.id = `break-${riderID}`;
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'X';
        deleteButton.id = `delete-${riderID}`;
        deleteButton.style.order = '3';

        buttonsContainer.appendChild(startButton);
        buttonsContainer.appendChild(breakButton);
        buttonsContainer.appendChild(deleteButton);

        console.log("oioioi");
    }
    // Break Button
    else if(obj.target.classList.contains('break')) {
        
        // Get Rider ID from button's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        // Get list element and buttons container
        let listElement = document.querySelector(`#li-${riderID}`);
        let buttonsContainer = obj.target.parentNode;

        // Move rider to 'Break' list
        onABreakList.appendChild(listElement);

        // Call Go On Break function
        GoOnBreak(riderID);

        // -------Change buttons-----------

        //Reset container
        buttonsContainer.innerHTML = "";


        let startButton = document.createElement('button');
        startButton.classList.add('start');
        startButton.textContent = 'Go';
        startButton.id = `start-${riderID}`;
        let backButton = document.createElement('button');
        backButton.classList.add('backFromBreak');
        backButton.textContent = 'Back';
        backButton.id = `breakEnd-${riderID}`;
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'X';
        deleteButton.id = `delete-${riderID}`;
        deleteButton.style.order = '3';

        buttonsContainer.appendChild(startButton);
        buttonsContainer.appendChild(backButton);
        buttonsContainer.appendChild(deleteButton);

    }
    // Back from break button
    else if(obj.target.classList.contains('backFromBreak')) {
        
        // Get Rider ID from button's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        // Get list element and buttons container
        let listElement = document.querySelector(`#li-${riderID}`);
        let buttonsContainer = obj.target.parentNode;

        // Move rider to 'Available' list
        availList.appendChild(listElement);

        // Call End Break function
        EndBreak(riderID);

        // Change back button to break button
        let breakButton = document.createElement('button');
        breakButton.classList.add('break');
        breakButton.id = `break-${riderID}`;

        buttonsContainer.appendChild(breakButton);
        breakButton.style.order = '0';

        obj.target.remove();
    }
    // Click on rider
    else if(obj.target.classList.contains('riderNameBox')) {

        // Get Rider ID from element's id
        let riderID = obj.target.id.substring(obj.target.id.indexOf('-') +1);

        let rider = riders.find(function(r) {
            return r.id == riderID;
        });

        if(!rider.areDetailsShowing()) {
            let riderDetails = document.createElement('div');
            riderDetails.classList.add('riderDetails');
            riderDetails.textContent = `Bike number: ${rider.bike}`;
            document.querySelector(`#li-${rider.id}`).appendChild(riderDetails);
            rider.toggleDetails();
            
        }
        else {
            document.querySelector('.riderDetails').remove();
            rider.toggleDetails();
        }
    }
});

