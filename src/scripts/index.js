import "../styles.css";
import gorillasLogo from "../images/logo.jpeg";
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
import { importRidersFromDatabase } from "./firebase";

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

  // Sort riders alphabetically
  riders.sort((a, b) => a.name.localeCompare(b.name));

  // Import rotation info from local storage
  importFromLocalStorage();

  // Load rotation page
  loadRotationPage();
}

//#region MENU

// Menu variables
let ridersTabOpen = false;
let bikesTabOpen = false;
let currentPage = "Rotation";

// Insert logo
const logo = new Image();
logo.src = gorillasLogo;

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

const rotationTabButton = document.querySelector("#rotationButton");
const ridersTabButton = document.querySelector("#ridersButton");
const bikesTabButton = document.querySelector("#bikesButton");

const ridersTabListItem = document.querySelector("#ridersButtonListItem");
const bikesTabListItem = document.querySelector("#bikesButtonListItem");

// Open Rider Rotation page
rotationTabButton.addEventListener("click", function () {
  loadRotationPage();
  currentPage = "Rotation";
  rotationTabButton.classList.add("selected-tab");
  ridersTabButton.classList.remove("selected-tab");
  bikesTabButton.classList.remove("selected-tab");
});

// Open Riders Page
const ridersTabContainer = document.createElement("div");

ridersTabButton.addEventListener("click", function () {
  if (!ridersTabOpen) openRidersTab();
  else {
    ridersTabContainer.innerHTML = "";
    ridersTabContainer.remove();
    ridersTabOpen = false;
    ridersTabButton.classList.remove("selected-tab");
  }
});

// Open Bikes page
let bikesTabContainer = document.createElement("div");

bikesTabButton.addEventListener("click", function () {
  if (!bikesTabOpen) {
    bikesTabListItem.appendChild(bikesTabContainer);
    bikesTabContainer.classList.add("navListContainer");
    let seeAllBikesButton = document.createElement("a");
    seeAllBikesButton.textContent = "All Bikes";
    seeAllBikesButton.classList.add("see-all-button");
    seeAllBikesButton.addEventListener("click", () => {
      loadBikesPage();
      currentPage = "Bikes";
    }); // Open bikes page
    bikesTabContainer.appendChild(seeAllBikesButton);
    bikes.forEach((bike) => {
      let bikeListing = document.createElement("a");
      bikeListing.textContent = bike.number;
      bikesTabContainer.appendChild(bikeListing);
    });
    bikesTabOpen = true;
    bikesTabButton.classList.add("selected-tab");
    rotationTabButton.classList.remove("selected-tab");
    ridersTabButton.classList.remove("selected-tab");
  } else {
    bikesTabContainer.innerHTML = "";
    bikesTabContainer.remove();
    bikesTabOpen = false;
    bikesTabButton.classList.remove("selected-tab");
  }
});

function openRidersTab() {
  ridersTabContainer.innerHTML = "";
  ridersTabListItem.appendChild(ridersTabContainer);
  ridersTabContainer.classList.add("navListContainer");
  let seeAllRidersButton = document.createElement("div");
  seeAllRidersButton.textContent = "All Riders";
  seeAllRidersButton.classList.add("see-all-button");
  seeAllRidersButton.addEventListener("click", () => {
    loadRidersPage();
    currentPage = "Riders";
  }); // Open riders page
  ridersTabContainer.appendChild(seeAllRidersButton);
  riders.forEach(function (rider) {
    const riderListing = document.createElement("div");
    riderListing.classList.add("menu-rider-listing");
    //Name
    const riderName = document.createElement("div");
    riderName.textContent = rider.name;
    riderListing.appendChild(riderName);
    //options button
    const optionsButton = document.createElement("div");
    optionsButton.textContent = "...";
    optionsButton.classList.add("options-button");
    riderListing.appendChild(optionsButton);

    optionsButton.addEventListener("click", (event) => {
      openOptions(rider);
      event.stopPropagation();
    });

    ridersTabContainer.appendChild(riderListing);
  });
  ridersTabOpen = true;
  ridersTabButton.classList.add("selected-tab");
  rotationTabButton.classList.remove("selected-tab");
  bikesTabButton.classList.remove("selected-tab");
}

//#endregion MENU

if (currentPage === "Rotation") {
  // loadRotationPage();
} else if (currentPage === "Riders") {
  loadRidersPage();
} else if (currentPage === "Bikes") {
  loadBikesPage();
}

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

export { currentPage, ridersTabOpen, openRidersTab };
