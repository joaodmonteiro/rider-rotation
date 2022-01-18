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
const Rider = (name) => {
    let onARide = false;
    let onBreak = false;
    const isOnARide = () => onARide;
    const isOnBreak = () => onBreak;
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
    return {name, isOnARide, isOnBreak, toggleOnARide, toggleOnBreak}
};

// Create some riders
const joao = AddRider('Joao');
const maria = AddRider('Maria');
const rui = AddRider('Rui');
const fausto = AddRider('Fausto');

function AddRider(riderName) {
    const newRider = Rider(riderName);
    riders.push(newRider);

    let newItem = input.value;
    input.value = '';

    let listItem = document.createElement('li');
    let span = document.createElement('span');
    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttonsContainer');
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    let startButton = document.createElement('button');
    startButton.classList.add('start');
    let breakButton = document.createElement('button');
    breakButton.classList.add('break');


    span.textContent = newRider.name;
    deleteButton.textContent = 'Delete';
    startButton.textContent = 'Start';
    breakButton.textContent = 'Break';

    listItem.appendChild(span);

    buttonsContainer.appendChild(deleteButton);
    buttonsContainer.appendChild(breakButton);
    buttonsContainer.appendChild(startButton);

    listItem.appendChild(buttonsContainer);
    
    availList.appendChild(listItem);
    console.log(riders);
}

function DeleteRider(riderName) {
    let riderToDelete = riders.find(function(r) {
        return r.name == riderName;
    });

    riders.splice(riders.indexOf(riderToDelete), 1);
    console.log(riders);
}

function StartRide(riderName) {
    let riderToStart = riders.find(function(r) {
        return r.name == riderName;
    });

    riderToStart.toggleOnARide();
}

function EndRide(riderName) {
    let riderBack = riders.find(function(r) {
        return r.name == riderName;
    });

    riderBack.toggleOnARide();
}

function GoOnBreak(riderName) {
    let riderForBreak = riders.find(function(r) {
        return r.name == riderName;
    });

    riderForBreak.toggleOnBreak();
}

function EndBreak(riderName) {
    let riderBackFromBreak = riders.find(function(r) {
        return r.name == riderName;
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

    AddRider(input.value);

    input.focus();
}

document.addEventListener('click', function(obj) {

    // START Button
    if(obj.target.classList.contains('start')) {
        let listElement = obj.target.parentNode.parentNode;
        let buttonsContainer = obj.target.parentNode;

        // Move rider to 'On a Ride' List
        onARideList.appendChild(listElement);

        // Call Start Ride function
        let name = listElement.querySelector('span').textContent;
        StartRide(name);

        // Change start button to a back button
        let backButton = document.createElement('button');
        backButton.textContent = 'Back';
        backButton.classList.add('back');

        buttonsContainer.appendChild(backButton);

        obj.target.remove();
        console.log(riders);
    }
    // Delete Button
    else if(obj.target.classList.contains('delete')) {
        let listElement = obj.target.parentNode.parentNode;
        let buttonsContainer = obj.target.parentNode;

        let name = listElement.querySelector('span').textContent;
        DeleteRider(name);
        listElement.remove();
    }
    // Back Button
    else if(obj.target.classList.contains('back')) {
        let listElement = obj.target.parentNode.parentNode;
        let buttonsContainer = obj.target.parentNode;

        // Move rider to 'Available Riders' list
        availList.appendChild(listElement);

        // Call End Ride function
        let name = listElement.querySelector('span').textContent;
        EndRide(name);

        // Change back button to a start button
        let startButton = document.createElement('button');
        startButton.textContent = 'Start';
        startButton.classList.add('start');

        buttonsContainer.appendChild(startButton);

        obj.target.remove();
    }
    // Break Button
    else if(obj.target.classList.contains('break')) {
        let listElement = obj.target.parentNode.parentNode;
        let buttonsContainer = obj.target.parentNode;

        // Move rider to 'Break' list
        onABreakList.appendChild(listElement);

        // Call Go On Break function
        let name = listElement.querySelector('span').textContent;
        GoOnBreak(name);

        // Change break button to a back button
        let backButton = document.createElement('button');
        backButton.classList.add('backFromBreak');
        backButton.textContent = 'Back';

        buttonsContainer.appendChild(backButton);

        obj.target.remove();
    }
    // Back from break button
    else if(obj.target.classList.contains('backFromBreak')) {
        let listElement = obj.target.parentNode.parentNode;
        let buttonsContainer = obj.target.parentNode;

        // Move rider to 'Available' list
        availList.appendChild(listElement);

        // Call End Break function
        let name = listElement.querySelector('span').textContent;
        EndBreak(name);

        // Change back button to break button
        let breakButton = document.createElement('button');
        breakButton.classList.add('break');
        breakButton.textContent = 'Break';

        buttonsContainer.appendChild(breakButton);

        obj.target.remove();
    }
});

