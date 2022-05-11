import { createRider } from "../scripts/riders";
import { createBike } from "../scripts/bikes";
import x from "../images/x2.svg";
import { doc } from "firebase/firestore";
import { getRiders } from "./riders";
import {
  refreshRiderRotation,
  ridersAvailable,
  ridersOnARide,
  ridersOnBreak,
} from "./rotation";
import { updateLocalStorage } from "./storage";

function popUpNotification(message, time) {
  const popUp = document.createElement("div");
  popUp.classList.add("notification");
  const popUpMessage = document.createElement("div");
  popUpMessage.textContent = message;
  popUp.appendChild(popUpMessage);

  if (time > 5000) {
    const popUpClose = document.createElement("div");
    popUpClose.classList.add("popup-close-container");
    const xIcon = new Image();
    xIcon.src = x;
    popUpClose.appendChild(xIcon);
    popUp.appendChild(popUpClose);

    popUpClose.addEventListener("click", () => {
      setTimeout(() => {
        popUp.classList.add("pop-up-opacityOut");
      }, 0);
      setTimeout(() => {
        popUp.remove();
      }, 300);
    });
  }

  document.body.appendChild(popUp);

  setTimeout(() => {
    popUp.classList.add("pop-up-opacityIn");
    popUp.classList.add("pop-up-top");
  }, 0);
  setTimeout(() => {
    popUp.classList.add("pop-up-opacityOut");
  }, time);
  setTimeout(() => {
    popUp.remove();
  }, time + 300);
}

function addNewRiderModal() {
  // Modal
  const addRiderModal = document.createElement("div");
  addRiderModal.classList.add("modal");

  // Create modal background
  const addRiderModalBackground = document.createElement("div");
  addRiderModalBackground.classList.add("modal-background");
  addRiderModal.appendChild(addRiderModalBackground);

  document.body.appendChild(addRiderModal);

  // Create container(box)
  let addRiderBoxContainer = document.createElement("div");
  addRiderBoxContainer.classList.add("addRiderBoxContainer");
  addRiderModal.appendChild(addRiderBoxContainer);

  // Animations
  setTimeout(() => {
    addRiderBoxContainer.classList.add("pop-up-opacityIn");
    addRiderBoxContainer.classList.add("pop-up-sizeNormal");
  }, 0);

  // Title
  let addRiderTitle = document.createElement("h2");
  addRiderTitle.textContent = "New Rider";
  addRiderTitle.style = "white-space: nowrap;";
  addRiderBoxContainer.appendChild(addRiderTitle);

  //Input name Label
  const inputNameLabel = document.createElement("label");
  inputNameLabel.htmlFor = "rider-name-input";
  inputNameLabel.textContent = "Name";
  addRiderBoxContainer.appendChild(inputNameLabel);

  // Input box for name
  let inputName = document.createElement("input");
  inputName.type = "name";
  inputName.id = "rider-name-input";
  inputName.classList.add("inputText");
  addRiderBoxContainer.appendChild(inputName);

  // checkboxes container
  const checkBoxContainer = document.createElement("div");
  checkBoxContainer.classList.add("checkbox-container");
  addRiderBoxContainer.appendChild(checkBoxContainer);

  // fulltime checkbox(CB)
  const fulltimeCBContainer = document.createElement("div");
  const fulltimeCBLabel = document.createElement("label");
  fulltimeCBLabel.textContent = "Full-Time";
  fulltimeCBLabel.htmlFor = "fulltime-cb";
  const fulltimeCB = document.createElement("input");
  fulltimeCB.type = "radio";
  fulltimeCB.id = "fulltime-cb";
  fulltimeCB.name = "contract-type";
  fulltimeCB.value = "fulltime";
  fulltimeCBContainer.appendChild(fulltimeCBLabel);
  fulltimeCBContainer.appendChild(fulltimeCB);
  checkBoxContainer.appendChild(fulltimeCBContainer);

  // partime checkbox(CB)
  const parttimeCBContainer = document.createElement("div");
  const parttimeCBLabel = document.createElement("label");
  parttimeCBLabel.textContent = "Part-Time";
  parttimeCBLabel.htmlFor = "parttime-cb";
  const parttimeCB = document.createElement("input");
  parttimeCB.type = "radio";
  parttimeCB.id = "parttime-cb";
  parttimeCB.name = "contract-type";
  parttimeCB.value = "parttime";
  parttimeCBContainer.appendChild(parttimeCBLabel);
  parttimeCBContainer.appendChild(parttimeCB);
  checkBoxContainer.appendChild(parttimeCBContainer);

  // 0-hour checkbox(CB)
  const zerohourCBContainer = document.createElement("div");
  const zerohourCBLabel = document.createElement("label");
  zerohourCBLabel.textContent = "0-Hour";
  zerohourCBLabel.htmlFor = "zerohour-cb";
  const zerohourCB = document.createElement("input");
  zerohourCB.type = "radio";
  zerohourCB.id = "zerohour-cb";
  zerohourCB.name = "contract-type";
  zerohourCB.value = "zerohour";
  zerohourCBContainer.appendChild(zerohourCBLabel);
  zerohourCBContainer.appendChild(zerohourCB);
  checkBoxContainer.appendChild(zerohourCBContainer);

  // Buttons container
  const modalButtonsContainer = document.createElement("div");
  modalButtonsContainer.classList.add("modal-buttons-container");
  addRiderBoxContainer.appendChild(modalButtonsContainer);

  // Cancel button
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add("secondary-button");
  modalButtonsContainer.appendChild(cancelButton);

  // Submit button
  let addRiderButton = document.createElement("button");
  addRiderButton.textContent = "Add";
  addRiderButton.classList.add("primary-button");
  modalButtonsContainer.appendChild(addRiderButton);

  addRiderButton.addEventListener("click", () => {
    if (
      inputName.value.trim().length &&
      (fulltimeCB.checked || parttimeCB.checked || zerohourCB.checked)
    ) {
      let contractType;
      if (fulltimeCB.checked) contractType = "Full-Time";
      if (parttimeCB.checked) contractType = "Part-Time";
      if (zerohourCB.checked) contractType = "0-Hour";
      let riderName = inputName.value;
      createRider(riderName, contractType);
      addRiderModal.remove();
      console.log("inputname value: " + inputName.value);
    }
  });

  inputName.focus();

  // Close window if clicked outside
  addRiderModalBackground.addEventListener("click", () => {
    addRiderModal.remove();
  });

  // Or on cancel button
  cancelButton.addEventListener("click", () => addRiderModal.remove());

  // Submit if 'Enter' is pressed
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector(".addRiderButton").click();
    }
  });
}

function addNewBikeModal() {
  // Modal
  const addBikeModal = document.createElement("div");
  addBikeModal.classList.add("modal");

  // Create modal background
  const addBikeModalBackground = document.createElement("div");
  addBikeModalBackground.classList.add("modal-background");
  addBikeModal.appendChild(addBikeModalBackground);

  document.body.appendChild(addBikeModal);

  // Create container(box)
  let addBikeBoxContainer = document.createElement("div");
  addBikeBoxContainer.classList.add("addBikeBoxContainer");
  addBikeModal.appendChild(addBikeBoxContainer);

  // Animations
  setTimeout(() => {
    addBikeBoxContainer.classList.add("pop-up-opacityIn");
    addBikeBoxContainer.classList.add("pop-up-sizeNormal");
  }, 0);

  // Title
  let addBikeTitle = document.createElement("h2");
  addBikeTitle.textContent = "New Bike";
  addBikeTitle.style = "white-space: nowrap;";
  addBikeBoxContainer.appendChild(addBikeTitle);

  //Input number Label
  const inputNumberLabel = document.createElement("label");
  inputNumberLabel.htmlFor = "bike-number-input";
  inputNumberLabel.textContent = "Number";
  addBikeBoxContainer.appendChild(inputNumberLabel);

  // Input box for number
  let inputNumber = document.createElement("input");
  inputNumber.type = "text";
  inputNumber.id = "bike-number-input";
  inputNumber.classList.add("inputText");
  addBikeBoxContainer.appendChild(inputNumber);

  //Input model Label
  const inputModelLabel = document.createElement("label");
  inputModelLabel.htmlFor = "bike-model-input";
  inputModelLabel.textContent = "Model";
  addBikeBoxContainer.appendChild(inputModelLabel);

  // Input box for name
  let inputModel = document.createElement("input");
  inputModel.type = "text";
  inputModel.id = "bike-model-input";
  inputModel.classList.add("inputText");
  addBikeBoxContainer.appendChild(inputModel);

  // Buttons container
  const modalButtonsContainer = document.createElement("div");
  modalButtonsContainer.classList.add("modal-buttons-container");
  addBikeBoxContainer.appendChild(modalButtonsContainer);

  // Cancel button
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add("secondary-button");
  modalButtonsContainer.appendChild(cancelButton);

  // Submit button
  let addBikeButton = document.createElement("button");
  addBikeButton.textContent = "Add";
  addBikeButton.classList.add("primary-button");
  modalButtonsContainer.appendChild(addBikeButton);

  addBikeButton.addEventListener("click", () => {
    if (inputNumber.value.trim().length && inputModel.value.trim().length) {
      const bikeNumber = inputNumber.value;
      const bikeModel = inputModel.value;

      createBike(bikeNumber, bikeModel);
      addBikeModal.remove();
    }
  });

  inputNumber.focus();

  // Close window if clicked outside
  addBikeModalBackground.addEventListener("click", () => {
    addBikeModal.remove();
  });

  // Or on cancel button
  cancelButton.addEventListener("click", () => addBikeModal.remove());

  // Submit if 'Enter' is pressed
  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector(".addBikeButton").click();
    }
  });
}

function addToRotationModal() {
  // Modal
  const addToRotationModal = document.createElement("div");
  addToRotationModal.classList.add("modal");

  // Create modal background
  const addToRotationModalBackground = document.createElement("div");
  addToRotationModalBackground.classList.add("modal-background");
  addToRotationModal.appendChild(addToRotationModalBackground);

  document.body.appendChild(addToRotationModal);

  // Create container(box)
  const addToRotationBoxContainer = document.createElement("form");
  addToRotationBoxContainer.classList.add("addToRotation-box-container");
  addToRotationModal.appendChild(addToRotationBoxContainer);

  // Animations
  setTimeout(() => {
    addToRotationBoxContainer.classList.add("pop-up-opacityIn");
    addToRotationBoxContainer.classList.add("pop-up-sizeNormal");
  }, 0);

  // Title
  const addToRotationTitle = document.createElement("h2");
  addToRotationTitle.textContent = "Add to Rotation";
  addToRotationTitle.style = "white-space: nowrap;";
  addToRotationBoxContainer.appendChild(addToRotationTitle);

  // Rider list container
  const listContainer = document.createElement("div");
  listContainer.classList.add("modal-rider-list-container");
  addToRotationBoxContainer.appendChild(listContainer);

  //Rider list
  const riderList = document.createElement("ul");
  listContainer.appendChild(riderList);

  const riders = getRiders();
  const ridersNotOnRotation = [];

  riders.forEach((r) => {
    if (
      !ridersAvailable.includes(r.id) &&
      !ridersOnARide.includes(r.id) &&
      !ridersOnBreak.includes(r.id)
    ) {
      ridersNotOnRotation.push(r);
    }
  });

  //Create for each Rider
  ridersNotOnRotation.forEach((rider) => {
    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `checkbox-${rider.id}`;
    checkbox.classList.add("addToRotation-checkbox");
    listItem.appendChild(checkbox);

    const label = document.createElement("label");
    label.textContent = rider.name;
    label.htmlFor = `checkbox-${rider.id}`;
    listItem.appendChild(label);

    riderList.appendChild(listItem);
  });

  // buttons container
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("addToRotation-buttons-container");

  addToRotationBoxContainer.appendChild(buttonsContainer);

  // Cancel button
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add("secondary-button");

  buttonsContainer.appendChild(cancelButton);

  cancelButton.addEventListener("click", () => addToRotationModal.remove());

  // Add button
  const addButton = document.createElement("input");
  addButton.value = "Add";
  addButton.classList.add("primary-button");
  addButton.type = "submit";

  buttonsContainer.appendChild(addButton);

  addToRotationBoxContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    const checkboxes = document.querySelectorAll(".addToRotation-checkbox");

    checkboxes.forEach((cb) => {
      if (cb.checked) {
        const riderId = cb.id.substring(cb.id.indexOf("-") + 1);
        ridersAvailable.push(riderId);
      }
    });

    updateLocalStorage();
    popUpNotification("Riders added!", 700);
    refreshRiderRotation();

    addToRotationModal.remove();
  });

  // Close window if clicked outside
  addToRotationModalBackground.addEventListener("click", () => {
    addToRotationModal.remove();
  });
}

export {
  popUpNotification,
  addNewRiderModal,
  addNewBikeModal,
  addToRotationModal,
};
