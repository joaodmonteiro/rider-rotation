import plusSign from "../images/plus.svg";
import { saveRider, deleteRiderFromDB } from "./firebase";
import {
  refreshRiderRotation,
  ridersAvailable,
  ridersOnARide,
  ridersOnBreak,
} from "./rotation";
import { updateLocalStorage } from "./storage";
import { currentPage } from ".";
import { popUpNotification, addNewRiderModal } from "./DOM";

// Rider Factory Function
const Rider = (name, contract, id) => {
  let onARide = false;
  let onBreak = false;
  let breakStartTime;
  let breakEndTime;
  let hadBreak = false;
  const getHadBreak = () => hadBreak;
  const getBreakEndTime = () => breakEndTime;
  const isOnARide = () => onARide;
  const isOnBreak = () => onBreak;
  const setOnBreak = (bool) => (onBreak = bool);
  const toggleOnARide = () => {
    if (onARide) {
      onARide = false;
    } else {
      onARide = true;
    }
  };
  const toggleOnBreak = () => {
    if (onBreak) {
      setOnBreak(false);
      hadBreak = true;
    } else if (!getHadBreak()) {
      setOnBreak(true);
      let time = new Date();
      time.setMinutes(time.getMinutes() + 30);
      setBreakEndTime(time);
    }
  };
  const setBreakEndTime = (time) => {
    breakEndTime = time;
    // breakEndTime.setSeconds(breakStartTime.getSeconds() + 60);
  };
  return {
    name,
    contract,
    id,
    onBreak,
    hadBreak,
    breakEndTime,
    setBreakEndTime,
    isOnARide,
    isOnBreak,
    getBreakEndTime,
    getHadBreak,
    toggleOnARide,
    toggleOnBreak,
  };
};

let riders = [];

let riderOptionsOpen = "";

// fake data
// const rider1 = Rider("000", "0");
// const rider2 = Rider("111", "1");
// const rider3 = Rider("222", "2");

// Array with all the Rider Objects
// let riders = [rider1, rider2, rider3];

function createRider(riderName, contract) {
  const newRider = Rider(riderName, contract);
  riders.push(newRider);

  // Add rider to database.
  saveRider(newRider.name, newRider.contract);
}

function deleteRider(riderID) {
  let riderToDelete = riders.find((r) => r.id === riderID);
  riders.splice(riders.indexOf(riderToDelete), 1);

  if (ridersAvailable.find((id) => id === riderID))
    ridersAvailable.splice(ridersAvailable.indexOf(riderID), 1);
  if (ridersOnARide.find((id) => id === riderID))
    ridersOnARide.splice(ridersOnARide.indexOf(riderID), 1);
  if (ridersOnBreak.find((id) => id === riderID))
    ridersOnBreak.splice(ridersOnBreak.indexOf(riderID), 1);

  deleteRiderFromDB(riderID);
  updateLocalStorage();
  // loadRidersPage();
}

function importRider(name, contract, id) {
  const rider = Rider(name, contract, id);
  riders.push(rider);
}

function listAllRiders() {
  document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("option")) {
      closeOptions();
    }
  });

  let content = document.createElement("div");
  content.classList.add("contentRiders", "content");
  document.querySelector(".main").appendChild(content);

  const containerFT = document.createElement("div");
  const containerPT = document.createElement("div");
  const containerZeroH = document.createElement("div");
  content.appendChild(containerFT);
  content.appendChild(containerPT);
  content.appendChild(containerZeroH);

  const labelFT = document.createElement("h2");
  labelFT.textContent = "Full-Time";
  containerFT.appendChild(labelFT);
  const labelPT = document.createElement("h2");
  labelPT.textContent = "Part-Time";
  containerPT.appendChild(labelPT);
  const labelZeroH = document.createElement("h2");
  labelZeroH.textContent = "0-Hour";
  containerZeroH.appendChild(labelZeroH);

  const listFT = document.createElement("ul");
  const listPT = document.createElement("ul");
  const listZeroH = document.createElement("ul");
  containerFT.appendChild(listFT);
  containerPT.appendChild(listPT);
  containerZeroH.appendChild(listZeroH);

  riders.forEach((rider) => {
    const listItem = document.createElement("li");
    const riderName = document.createElement("div");
    riderName.textContent = rider.name;
    listItem.appendChild(riderName);
    const options = document.createElement("div");
    options.classList.add("options-button");
    options.textContent = "...";
    listItem.appendChild(options);

    options.addEventListener("click", (event) => {
      openOptions(rider);
      event.stopPropagation();
    });

    switch (rider.contract) {
      case "Full-Time":
        listFT.appendChild(listItem);
        break;
      case "Part-Time":
        listPT.appendChild(listItem);
        break;
      case "0-Hour":
        listZeroH.appendChild(listItem);
        break;
    }
  });
}

function openOptions(rider) {
  let onRotation = "";

  if (ridersAvailable.find((id) => id === rider.id)) onRotation = "available";
  if (ridersOnARide.find((id) => id === rider.id)) onRotation = "onARide";
  if (ridersOnBreak.find((id) => id === rider.id)) onRotation = "onABreak";

  if (riderOptionsOpen) {
    document.querySelector(".options-container").remove();
    riderOptionsOpen = "";
  } else {
    const optionsContainer = document.createElement("ul");
    optionsContainer.classList.add("options-container");
    optionsContainer.style.left = `${event.clientX - 120}px`;
    optionsContainer.style.top = `${event.clientY + 10}px`;

    if (!onRotation) {
      const addToRotationButton = document.createElement("li");
      addToRotationButton.textContent = "Add to rotation";
      addToRotationButton.classList.add("option");
      addToRotationButton.id = `addToRotation-${rider.id}`;
      optionsContainer.appendChild(addToRotationButton);

      addToRotationButton.addEventListener("click", () => {
        ridersAvailable.push(rider.id);
        document.querySelector(".options-container").remove();
        riderOptionsOpen = "";
        updateLocalStorage();
        popUpNotification("Added!", 700);
        if (currentPage === "Riders") loadRidersPage();
        else if (currentPage === "Rotation") refreshRiderRotation();
      });
    } else {
      const removeFromRotationButton = document.createElement("li");
      removeFromRotationButton.textContent = "Remove from rotation";
      removeFromRotationButton.classList.add("option");
      removeFromRotationButton.id = `removeFromRotation-${rider.id}`;
      optionsContainer.appendChild(removeFromRotationButton);

      removeFromRotationButton.addEventListener("click", () => {
        if (onRotation === "available") {
          ridersAvailable.splice(ridersAvailable.indexOf(rider.id), 1);
        } else if (onRotation === "onARide") {
          ridersOnARide.splice(ridersOnARide.indexOf(rider.id), 1);
        } else {
          ridersOnBreak.splice(ridersOnBreak.indexOf(rider.id), 1);
        }
        document.querySelector(".options-container").remove();
        riderOptionsOpen = "";
        updateLocalStorage();
        popUpNotification("Removed!", 700);
        if (currentPage === "Riders") loadRidersPage();
        else if (currentPage === "Rotation") refreshRiderRotation();
      });
    }

    // const editRiderButton = document.createElement("li");
    // editRiderButton.textContent = "Edit";
    // editRiderButton.classList.add("option");
    // editRiderButton.id = `editRider-${rider.id}`;
    // optionsContainer.appendChild(editRiderButton);

    const deleteRiderButton = document.createElement("li");
    deleteRiderButton.textContent = "Delete";
    deleteRiderButton.classList.add("option");
    deleteRiderButton.id = `deleteRider-${rider.id}`;
    optionsContainer.appendChild(deleteRiderButton);

    document.body.appendChild(optionsContainer);

    riderOptionsOpen = rider.id;

    deleteRiderButton.addEventListener("click", () => {
      deleteRider(rider.id);
      document.querySelector(".options-container").remove();
      riderOptionsOpen = "";
      popUpNotification("Deleted!", 700);
      if (currentPage === "Riders") loadRidersPage();
      else if (currentPage === "Rotation") refreshRiderRotation();
    });
  }
}

function closeOptions() {
  if (riderOptionsOpen) {
    document.querySelector(".options-container").remove();
    riderOptionsOpen = "";
  }
}

function loadRidersPage() {
  // Sort riders alphabetically
  riders.sort((a, b) => a.name.localeCompare(b.name));

  document.querySelector("header").innerHTML = "";
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Riders";
  pageTitle.classList.add("pageTitle");
  document.querySelector("header").appendChild(pageTitle);
  document.querySelector(".content").remove();
  listAllRiders();
  const plus = new Image();
  plus.src = plusSign;
  plus.classList.add("plus");

  const addNewButton = document.createElement("button");
  addNewButton.classList.add("primary-button");
  addNewButton.classList.add("new-rider-button");
  addNewButton.appendChild(plus);
  const addNewButtonLabel = document.createElement("div");
  addNewButtonLabel.textContent = "Add New";
  addNewButton.appendChild(addNewButtonLabel);
  document.querySelector("header").appendChild(addNewButton);

  // Click on 'add new' button
  addNewButton.addEventListener("click", () => addNewRiderModal());
}

function getRiders() {
  return riders;
}

export {
  riders,
  createRider,
  deleteRider,
  importRider,
  loadRidersPage,
  openOptions,
  closeOptions,
  getRiders,
};
