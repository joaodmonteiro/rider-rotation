import "../styles/styles.css";
import gorillasLogo from "../images/logo.jpeg";
import rotationIcon from "../images/rotation-icon.svg";
import ridersIcon from "../images/riders-icon.svg";
import bikesIcon from "../images/bikes-icon.svg";
import logoutIcon from "../images/logout.svg";
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
import {
  importRidersFromDatabase,
  importBikesFromDatabase,
  monitorAuthState,
  logout,
} from "./firebase";
import { loadLoginPage } from "./login";
import { doc } from "firebase/firestore";

// localStorage.clear();

monitorAuthState();

function loadApp() {
  document.body.innerHTML = "";
  loadMenu();
  loadMainSection();
  loadDatabaseAndLocalStorage();
}

async function loadDatabaseAndLocalStorage() {
  riders.length = 0;
  bikes.length = 0;
  ridersAvailable.length = 0;
  ridersOnARide.length = 0;
  ridersOnBreak.length = 0;

  await importRidersFromDatabase();
  await importBikesFromDatabase();

  // Sort riders alphabetically
  riders.sort((a, b) => a.name.localeCompare(b.name));

  // Import rotation info from local storage
  importFromLocalStorage();

  loadRotationPage();
}

function loadMenu() {
  const menu = document.createElement("nav");
  menu.classList.add("menu");
  document.body.appendChild(menu);

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logoContainer");
  menu.appendChild(logoContainer);

  // Insert logo
  const logo = new Image();
  logo.src = gorillasLogo;
  document.querySelector(".logoContainer").appendChild(logo);

  const navList = document.createElement("ul");
  menu.appendChild(navList);

  const rotationLi = document.createElement("li");
  rotationLi.classList.add("tab-container");
  rotationLi.id = "rotation-tab-container";
  const rotationIconContainer = document.createElement("div");
  rotationIconContainer.classList.add("tab-icon-container");
  rotationIconContainer.id = "rotation-icon-container";
  rotationLi.appendChild(rotationIconContainer);
  navList.appendChild(rotationLi);

  const ridersLi = document.createElement("li");
  ridersLi.classList.add("tab-container");
  ridersLi.id = "riders-tab-container";
  const ridersIconContainer = document.createElement("div");
  ridersIconContainer.classList.add("tab-icon-container");
  ridersIconContainer.id = "riders-icon-container";
  ridersLi.appendChild(ridersIconContainer);
  navList.appendChild(ridersLi);

  const bikesLi = document.createElement("li");
  bikesLi.classList.add("tab-container");
  bikesLi.id = "bikes-tab-container";
  const bikesIconContainer = document.createElement("div");
  bikesIconContainer.classList.add("tab-icon-container");
  bikesIconContainer.id = "bikes-icon-container";
  bikesLi.appendChild(bikesIconContainer);
  navList.appendChild(bikesLi);

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

  rotationIconContainer.appendChild(rotationTabIcon);
  ridersIconContainer.appendChild(ridersTabIcon);
  bikesIconContainer.appendChild(bikesTabIcon);

  // Insert labels on tabs
  const rotationTabButton = document.createElement("a");
  rotationTabButton.textContent = "Rotation";
  rotationTabButton.id = "rotation-button";
  rotationTabButton.classList.add("tab-button");
  rotationLi.appendChild(rotationTabButton);

  const ridersTabButton = document.createElement("a");
  ridersTabButton.textContent = "Riders";
  ridersTabButton.id = "riders-button";
  ridersTabButton.classList.add("tab-button");
  ridersLi.appendChild(ridersTabButton);

  const bikesTabButton = document.createElement("a");
  bikesTabButton.textContent = "Bikes";
  bikesTabButton.id = "bikes-button";
  bikesTabButton.classList.add("tab-button");
  bikesLi.appendChild(bikesTabButton);

  const logoutButtonContainer = document.createElement("div");
  logoutButtonContainer.classList.add("logout-container");

  const logoutImage = new Image();
  logoutImage.src = logoutIcon;

  const logoutLabel = document.createElement("span");
  logoutLabel.textContent = "Logout";

  logoutButtonContainer.appendChild(logoutImage);
  logoutButtonContainer.appendChild(logoutLabel);

  logoutButtonContainer.addEventListener("click", () => logout());

  menu.appendChild(logoutButtonContainer);

  // Open Rider Rotation page
  rotationLi.addEventListener("click", function () {
    currentPage = "Rotation";
    rotationLi.classList.add("selected-tab");
    ridersLi.classList.remove("selected-tab");
    bikesLi.classList.remove("selected-tab");
    loadRotationPage();
  });

  // Open Riders Page
  ridersLi.addEventListener("click", function () {
    currentPage = "Riders";
    rotationLi.classList.remove("selected-tab");
    ridersLi.classList.add("selected-tab");
    bikesLi.classList.remove("selected-tab");
    loadRidersPage();
  });

  bikesTabButton.addEventListener("click", function () {
    rotationLi.classList.remove("selected-tab");
    ridersLi.classList.remove("selected-tab");
    bikesLi.classList.add("selected-tab");
    loadBikesPage();
  });
}

function loadMainSection() {
  const main = document.createElement("div");
  main.classList.add("main");

  const header = document.createElement("header");
  const title = document.createElement("h1");
  header.appendChild(title);

  main.appendChild(header);

  const content = document.createElement("div");
  content.classList.add("content");
  main.appendChild(content);

  document.body.appendChild(main);
}

//#region MENU

// Menu variables
let currentPage = "Rotation";

document.addEventListener("click", (event) => {
  if (!event.target.classList.contains("option")) {
    closeOptions();
  }
});

//#endregion MENU

// Insert plus sign

// Input and event listeners
document.addEventListener("click", function (obj) {
  // START Button
  if (obj.target.classList.contains("start")) {
    // Get Rider ID from button's id
    let riderID = obj.target.id.substring(obj.target.id.indexOf("-") + 1);

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
});

export { currentPage, loadApp };
