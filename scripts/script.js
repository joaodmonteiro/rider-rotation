// HTML elements
const availList = document.getElementById('available');
const onARideList = document.getElementById('onARide');
const onABreakList = document.getElementById('onABreak');

// Array with all the Rider Objects
let riders = [];

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
const joao = AddRider('Joao Monteiro', 'Z822');
const maria = AddRider('Felix Robins', 'Z822');
const rui = AddRider('Ronny Joao Feliz Garcia', 'Z522');
const fausto = AddRider('Declan Rooney', 'Z830');
const jose = AddRider('Rafee Ahmed', 'Z855');
const ss = AddRider('Mohammed Rahat', 'Z855');
const joeese = AddRider('Barna Sagodi', 'Z855');
const jofse = AddRider('Paul Douglas', 'Z855');
const joase = AddRider('Ali Savas', 'Z855');
const jogse = AddRider('Joshua Luke Joseph Samuel', 'Z855');
const johse = AddRider('Monzer Salman', 'Z855');
const josje = AddRider('Adam Szabo', 'Z855');
const joee22se = AddRider('Patel Akhilkumar Pareshbhai', 'Z855');
const joeqqse = AddRider('Taffari Jackson', 'Z855');
const josqqe = AddRider('JoseZadi David Guede', 'Z855');

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

function AddRider(riderName, bikeNumber) {
    let uniqueID = 1;
    if(riders.length > 0)
        uniqueID = riders[riders.length - 1].id + 1;

    const newRider = Rider(riderName, bikeNumber, uniqueID);
    riders.push(newRider);

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

        // Create timer
        const startingMinutes = 30;
        let time = startingMinutes * 60;

        let counter = document.createElement('p');
        counter.textContent = `Time left of break: ${startingMinutes}:00`;
        counter.classList.add('breakTimer');
        listElement.appendChild(counter);

        setInterval(updateCountdown, 1000);

        function updateCountdown() {
            if(time>0) {
                time--;
                let minutes = Math.floor(time/60);
                let seconds = time % 60;
                
                seconds = seconds < 10 ? seconds = '0' + seconds : seconds;

                counter.textContent = `Time left of break: ${minutes}:${seconds}`;

                if(minutes == 0)
                    counter.style.color = 'red';

            }  
        }

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

        // Remove break timer
        document.querySelector('.breakTimer').remove();

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
        let dropDownMenuBikes = document.createElement('div');
        dropDownMenuBikes.classList.add('dropdown');
        let dropDownMenuBikesContent = document.createElement('div');
        dropDownMenuBikesContent.classList.add('dropdown-content');
        let inputBike = document.createElement('input');
        inputBike.type = 'text';
        inputBike.placeholder = "Bike";
        inputBike.classList.add('inputBike');

        // Include all bikes
        bikes.forEach( function(b) {
            let bikeForSelection = document.createElement('p');
            bikeForSelection.textContent = b.number;
            dropDownMenuBikesContent.appendChild(bikeForSelection);
        });

        dropDownMenuBikes.appendChild(inputBike);
        dropDownMenuBikes.appendChild(dropDownMenuBikesContent);

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
        let bikeNumber = document.querySelector('.inputBike').value;

        if(riderName != '') {
            AddRider(riderName, bikeNumber);
            addRiderBoxContainer.remove();
        }
        else
            alert("Rider needs a name!");

        console.log(riders);
    }
});

let menuButton = document.querySelector('.menuIcon');

menuButton.addEventListener('click', function() {
    console.log("menuuu");

    let menuBox = document.createElement('div');
    menuBox.classList.add('menuBox');
    document.body.appendChild(menuBox);

    let closeMenu = document.createElement('img');
    closeMenu.src = "images/X.svg";
    closeMenu.classList.add('closeMenu');
    menuBox.appendChild(closeMenu);

    let bikesTabButton =document.createElement('a');
    bikesTabButton.href = "bikes.html";
    bikesTabButton.textContent = "BIKES";
    menuBox.appendChild(bikesTabButton);

    closeMenu.addEventListener('click', function() {
        menuBox.remove();
    });

    bikesTabButton.addEventListener('click', function() {

    });
});



