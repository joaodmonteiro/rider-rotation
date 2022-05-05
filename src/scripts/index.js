import "../styles/styles.css";
import gorillasLogo from "../images/logo.jpeg";
import rotationIcon from "../images/rotation-icon.svg";
import ridersIcon from "../images/riders-icon.svg";
import bikesIcon from "../images/bikes-icon.svg";
import { riders, loadRidersPage, openOptions, closeOptions } from "./riders";
import { bikes, loadBikesPage } from "./bikes";
import {
  loadRotationPage,
  ridersAvailable,
  ridersOnBreak,
  ridersOnARide,
  StartRide,
  GoOnBreak,
  EndRide,
  EndBreak,
  DeleteRiderFromRotation,
} from "./rotation";
import { importFromLocalStorage } from "./storage";
import { importRidersFromDatabase, importBikesFromDatabase } from "./firebase";

console.log("riders:");
console.log(riders);
console.log("ridersAvailable:");
console.log(ridersAvailable);
console.log("ridersOnARide:");
console.log(ridersOnARide);
console.log("ridersOnBreak:");
console.log(ridersOnBreak);
console.log(localStorage);

// localStorage.clear();

loadDatabaseAndLocalStorage();

async function loadDatabaseAndLocalStorage() {
  await importRidersFromDatabase();
  await importBikesFromDatabase();

  // Sort riders alphabetically
  riders.sort((a, b) => a.name.localeCompare(b.name));

  // Import rotation info from local storage
  importFromLocalStorage();

  loadRotationPage();
}

//#region MENU

// Menu variables
let currentPage = "Rotation";

// Insert logo
const logo = new Image();
logo.src = gorillasLogo;

// rotation icon
const rotationTabIcon = new Image();
rotationTabIcon.src = rotationIcon;
rotationTabIcon.classList.add("tab-icon");

// Riders Icon
const ridersTabIcon = new Image();
ridersTabIcon.src = ridersIcon;
ridersTabIcon.classList.add("tab-icon");

// Bikes Icon
const bikesTabIcon = new Image();
bikesTabIcon.src = bikesIcon;
bikesTabIcon.classList.add("tab-icon");

document.querySelector(".logoContainer").appendChild(logo);
document.querySelector(".logoContainer").addEventListener("click", () => {
  console.log("riders:");
  console.log(riders);
  console.log("ridersAvailable:");
  console.log(ridersAvailable);
  console.log("ridersOnARide:");
  console.log(ridersOnARide);
  console.log("ridersOnBreak:");
  console.log(ridersOnBreak);
  console.log(localStorage);
});

document.addEventListener("click", (event) => {
  if (!event.target.classList.contains("option")) {
    closeOptions();
  }
});

const rotationTabContainer = document.querySelector("#rotation-tab-container");
const ridersTabContainer = document.querySelector("#riders-tab-container");
const bikesTabContainer = document.querySelector("#bikes-tab-container");

// Insert icons on tabs
const rotationIconContainer = document.querySelector(
  "#rotation-icon-container"
);
rotationIconContainer.appendChild(rotationTabIcon);
const ridersIconContainer = document.querySelector("#riders-icon-container");
ridersIconContainer.appendChild(ridersTabIcon);
const bikesIconContainer = document.querySelector("#bikes-icon-container");
bikesIconContainer.appendChild(bikesTabIcon);

// Insert labels on tabs
const rotationTabButton = document.createElement("a");
rotationTabButton.textContent = "Rotation";
rotationTabButton.id = "rotation-button";
rotationTabButton.classList.add("tab-button");
rotationTabContainer.appendChild(rotationTabButton);

const ridersTabButton = document.createElement("a");
ridersTabButton.textContent = "Riders";
ridersTabButton.id = "riders-button";
ridersTabButton.classList.add("tab-button");
ridersTabContainer.appendChild(ridersTabButton);

const bikesTabButton = document.createElement("a");
bikesTabButton.textContent = "Bikes";
bikesTabButton.id = "bikes-button";
bikesTabButton.classList.add("tab-button");
bikesTabContainer.appendChild(bikesTabButton);

// MENU
if (currentPage === "Rotation") {
  rotationTabContainer.classList.add("selected-tab");
  ridersTabContainer.classList.remove("selected-tab");
  bikesTabContainer.classList.remove("selected-tab");
  loadRotationPage();
} else if (currentPage === "Riders") {
  rotationTabContainer.classList.remove("selected-tab");
  ridersTabContainer.classList.add("selected-tab");
  bikesTabContainer.classList.remove("selected-tab");
  loadRidersPage();
} else if (currentPage === "Bikes") {
  rotationTabContainer.classList.remove("selected-tab");
  ridersTabContainer.classList.remove("selected-tab");
  bikesTabContainer.classList.add("selected-tab");
  loadBikesPage();
}

// Open Rider Rotation page
rotationTabContainer.addEventListener("click", function () {
  currentPage = "Rotation";
  rotationTabContainer.classList.add("selected-tab");
  ridersTabContainer.classList.remove("selected-tab");
  bikesTabContainer.classList.remove("selected-tab");
  loadRotationPage();
});

// Open Riders Page
ridersTabContainer.addEventListener("click", function () {
  currentPage = "Riders";
  rotationTabContainer.classList.remove("selected-tab");
  ridersTabContainer.classList.add("selected-tab");
  bikesTabContainer.classList.remove("selected-tab");
  loadRidersPage();
});

bikesTabButton.addEventListener("click", function () {
  rotationTabContainer.classList.remove("selected-tab");
  ridersTabContainer.classList.remove("selected-tab");
  bikesTabContainer.classList.add("selected-tab");
  loadBikesPage();
});

//#endregion MENU

// Insert plus sign

// Input and event listeners
document.addEventListener("click", function (obj) {
  // START Button
  if (obj.target.classList.contains("start")) {
    // Get Rider ID from button's id
    let riderID = obj.target.id.substring(obj.target.id.indexOf("-") + 1);

    console.log("start ride " + riderID);

    // Call Start Ride function
    StartRide(riderID);
  }
  // Delete Button
  else if (obj.target.classList.contains("delete")) {
    // Get Rider ID from button's id
    let riderID = obj.target.id.substring(obj.target.id.indexOf("-") + 1);

    // Call Delete RIder function
    DeleteRiderFromRotation(riderID);
  }
  // Back Button
  else if (obj.target.classList.contains("back")) {
    // Get Rider ID from button's id
    let riderID = obj.target.id.substring(obj.target.id.indexOf("-") + 1);

    // Call End Ride function
    EndRide(riderID);
  }
  // Break Button
  else if (obj.target.classList.contains("break")) {
    // Get Rider ID from button's id
    let riderID = obj.target.id.substring(obj.target.id.indexOf("-") + 1);

    // Call Go On Break function
    GoOnBreak(riderID);
  }
  // Back from break button
  else if (obj.target.classList.contains("backFromBreak")) {
    // Get Rider ID from button's id
    let riderID = obj.target.id.substring(obj.target.id.indexOf("-") + 1);

    // Call End Break function
    EndBreak(riderID);
  }
  // Click on rider
  else if (obj.target.classList.contains("riderNameBox")) {
    // Get Rider ID from element's id
    let riderID = obj.target.id.substring(obj.target.id.indexOf("-") + 1);

    let rider = riders.find(function (r) {
      return r.id == riderID;
    });

    if (!rider.areDetailsShowing()) {
      let riderDetails = document.createElement("div");
      riderDetails.classList.add("riderDetails");
      riderDetails.textContent = `Bike number: ${rider.bike}`;
      document.querySelector(`#li-${rider.id}`).appendChild(riderDetails);
      rider.toggleDetails();
    } else {
      document.querySelector(".riderDetails").remove();
      rider.toggleDetails();
    }
  }
});

export { currentPage };
