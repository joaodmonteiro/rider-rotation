const availList = document.getElementById('available');
const onARideList = document.getElementById('onARide');
const onABreakList = document.getElementById('onABreak');
const input = document.querySelector('input');
const addRiderButton = document.querySelector('.addRiderButton');

input.focus();

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13 && input.value != '') {
        event.preventDefault();
        addRiderButton.click();
    }
});

addRiderButton.onclick = function() {
    let newItem = input.value;
    input.value = '';

    let listItem = document.createElement('li');
    let span = document.createElement('span');
    let deleteButton = document.createElement('button');
    let startButton = document.createElement('button');
    let breakButton = document.createElement('button');


    span.textContent = newItem;
    deleteButton.textContent = 'Delete';
    startButton.textContent = 'Start';
    breakButton.textContent = 'Break';

    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    listItem.appendChild(startButton);
    listItem.appendChild(breakButton);
    availList.appendChild(listItem);

    deleteButton.onclick = function() {
        deleteButton.parentNode.remove();
    }

    startButton.onclick = function() {
        let riderGo = startButton.parentNode;
        onARideList.appendChild(riderGo);
        startButton.remove();

        let backButton = document.createElement('button');
        backButton.textContent = 'Back';

        riderGo.appendChild(backButton);

        backButton.onclick = function() {
            let riderBack = backButton.parentNode;

            availList.appendChild(riderBack);
            riderBack.appendChild(startButton);
            backButton.remove();
        }
    }

    breakButton.onclick = function() {
        onABreakList.appendChild(breakButton.parentNode);
        startButton.remove();

        let backButton = document.createElement('button');
        backButton.textContent = 'Back';

        breakButton.parentNode.appendChild(backButton);

        backButton.onclick = function() {
            let riderBack = backButton.parentNode;

            availList.appendChild(riderBack);
            riderBack.appendChild(startButton);
            backButton.remove();
        }
    }

    input.focus();
}