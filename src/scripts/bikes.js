import zoomoBike from "../images/zoomobike.png";
import toggleIconOn from "../images/toggle-icon-on.svg";
import toggleIconOff from "../images/toggle-icon-off.svg";
import greenCircle from "../images/green-circle.svg";
import redCircle from "../images/red-circle.svg";
import plusSign from "../images/plus.svg";
import { addNewBikeModal } from "../scripts/DOM";
import { saveBike } from "../scripts/firebase";

// Array for bikes
let bikes = [];

let detailsPanelOpen = "";
let panelAnimationRunning = false;

// Bike Factory Function
const Bike = (number, model, status, details) => {
  let bikeStatus = status;
  let bikeDetails = details;
  const getStatus = () => bikeStatus;
  const getDetails = () => bikeDetails;

  const toggleStatus = () => {
    if (bikeStatus == "Out of Action") {
      bikeStatus = "In Action";
    } else {
      bikeStatus = "Out of Action";
    }
  };

  const changeDetails = (newDetails) => {
    bikeDetails = newDetails;
  };

  return {
    number,
    model,
    details,
    getStatus,
    getDetails,
    toggleStatus,
    changeDetails,
  };
};

// Create some bikes
// const M900 = Bike("M900", "Zoomo Zero", "Out of Action");
// const Z895456 = Bike("Z895456", "Zoomo Zero", "In Action");
// const Z895488 = Bike("Z895488", "Zoomo Zero", "Out of Action");
// const Z895490 = Bike("Z895490", "Zoomo Zero", "In Action");
// const Z895493 = Bike("Z895493", "Zoomo Zero", "In Action");
// const Z896360 = Bike("Z896360", "Zoomo Zero", "In Action");
// const Z896699 = Bike("Z896699", "Zoomo Zero", "In Action");
// const Z897530 = Bike("Z897530", "Zoomo Zero", "In Action");
// const Z897531 = Bike("Z897531", "Zoomo Zero", "In Action");
// const Z897556 = Bike("Z897556", "Zoomo Zero", "In Action");
// const Z897643 = Bike("Z897643", "Zoomo Zero", "In Action");
// const Z897677 = Bike("Z897677", "Zoomo Zero", "In Action");
// const Z897798 = Bike("Z897798", "Zoomo Zero", "In Action");
// const Z897832 = Bike("Z897832", "Zoomo Zero", "In Action");
// const Z898055 = Bike("Z898055", "Zoomo Zero", "Out of Action");
// const Z898202 = Bike("Z898202", "Zoomo Zero", "In Action");
// const Z898242 = Bike("Z898242", "Zoomo Zero", "In Action");
// const Z898281 = Bike("Z898281", "Zoomo Zero", "In Action");
// const Z898477 = Bike("Z898477", "Zoomo Zero", "In Action");
// const Z899317 = Bike("Z899317", "Zoomo Zero", "In Action");

// bikes.push(
//   M900,
//   Z895456,
//   Z895488,
//   Z895490,
//   Z895493,
//   Z896360,
//   Z896699,
//   Z897530,
//   Z897531,
//   Z897556,
//   Z897643,
//   Z897677,
//   Z897798,
//   Z897832,
//   Z898055,
//   Z898202,
//   Z898242,
//   Z898281,
//   Z898477,
//   Z899317
// );

function loadBikesPage() {
  resetMainSection();

  // loadBackgroundImage();
  loadAddNewButton();

  loadSortingSection();

  createPanels();

  listAllBikes();

  console.log(bikes);
}

function createBike(bikeNumber, bikeModel) {
  const newBike = Bike(bikeNumber, bikeModel, "In Action", "");
  bikes.push(newBike);

  // Add rider to database.
  saveBike(
    newBike.number,
    newBike.model,
    newBike.getStatus(),
    newBike.getDetails()
  );
}

function resetMainSection() {
  document.querySelector("header").innerHTML = "";
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Bikes";
  pageTitle.classList.add("pageTitle");
  document.querySelector("header").appendChild(pageTitle);
  document.querySelector(".content").remove();
  let content = document.createElement("div");
  content.classList.add("contentBikes", "content");
  document.querySelector(".main").appendChild(content);
}

function loadAddNewButton() {
  const plus = new Image();
  plus.src = plusSign;
  plus.classList.add("plus");

  const addNewButton = document.createElement("button");
  addNewButton.classList.add("primary-button");
  addNewButton.classList.add("new-bike-button");
  addNewButton.appendChild(plus);
  const addNewButtonLabel = document.createElement("div");
  addNewButtonLabel.textContent = "Add New";
  addNewButton.appendChild(addNewButtonLabel);
  document.querySelector("header").appendChild(addNewButton);

  // Click on 'add new' button
  addNewButton.addEventListener("click", () => addNewBikeModal());
}

function loadBackgroundImage() {
  const bikeImage = new Image();
  bikeImage.src = zoomoBike;
  bikeImage.id = "bike-image";

  document.querySelector(".content").appendChild(bikeImage);
}

function loadSortingSection() {
  const sortSelector = document.createElement("div");
  sortSelector.classList.add("sort-selector");

  const sortBy = document.createElement("label");
  sortBy.textContent = "Sort by:";

  const selectionContainer = document.createElement("div");

  sortSelector.appendChild(sortBy);
  sortSelector.appendChild(selectionContainer);

  document.querySelector(".content").appendChild(sortSelector);
}

function createPanels() {
  const bikesPanel = document.createElement("div");
  bikesPanel.classList.add("bikes-panel");

  const detailsPanel = document.createElement("div");
  detailsPanel.classList.add("details-panel");

  document.querySelector(".content").appendChild(bikesPanel);
  document.querySelector(".content").appendChild(detailsPanel);
}

// List bike info
function listAllBikes() {
  const list = document.createElement("ul");

  bikes.forEach((bike) => {
    const listItem = document.createElement("li");
    listItem.classList.add("bike-list-item");
    listItem.id = `bikeListItem-${bike.number}`;

    listItem.addEventListener("click", () => handleDetailsPanel(bike));

    const bikeNumber = document.createElement("div");
    bikeNumber.textContent = bike.number;

    const bikeModel = document.createElement("div");
    bikeModel.textContent = bike.model;

    const bikeStatusContainer = document.createElement("div");
    const bikeStatus = document.createElement("div");
    bikeStatus.textContent = bike.getStatus();

    bikeStatusContainer.classList.add("bike-status-container");

    if (bike.getStatus() === "In Action") {
      const greenLight = new Image();
      greenLight.src = greenCircle;
      bikeStatusContainer.appendChild(greenLight);
    } else {
      const redLight = new Image();
      redLight.src = redCircle;
      bikeStatusContainer.appendChild(redLight);
    }

    bikeStatusContainer.appendChild(bikeStatus);

    listItem.appendChild(bikeNumber);
    listItem.appendChild(bikeModel);
    listItem.appendChild(bikeStatusContainer);

    list.appendChild(listItem);
  });

  document.querySelector(".bikes-panel").appendChild(list);
}

function importBike(number, model, status, details) {
  const bike = Bike(number, model, status, details);
  bikes.push(bike);
}

function handleDetailsPanel(bike) {
  if (!panelAnimationRunning) {
    if (detailsPanelOpen === "") {
      changeSelectedBike(bike);
      panelAnimationRunning = true;
      detailsPanelOpen = bike.number;
      openDetailsPanel(bike);
    } else if (detailsPanelOpen != bike.number) {
      changeSelectedBike(bike);
      panelAnimationRunning = true;
      detailsPanelOpen = bike.number;
      closeDetailsPanel();
      setTimeout(() => openDetailsPanel(bike), 200);
    }
  }
}

function changeSelectedBike(bike) {
  const allItems = document.querySelectorAll(".bike-list-item");
  allItems.forEach((i) => i.classList.remove("selected-tab"));

  const listItemID = "#bikeListItem-" + bike.number;
  document.querySelector(listItemID).classList.add("selected-tab");
}

function openDetailsPanel(bike) {
  const detailsPanel = document.querySelector(".details-panel");

  detailsPanel.style = "display: grid";

  setTimeout(() => detailsPanel.classList.add("panel-open"), 0);
  setTimeout(() => {
    loadDetails(bike);
    panelAnimationRunning = false;
  }, 100);
}

function loadDetails(bike) {
  const detailsPanel = document.querySelector(".details-panel");

  const statusContainer = document.createElement("div");
  statusContainer.classList.add("status-container");

  const modelAndNumberContainer = document.createElement("div");
  modelAndNumberContainer.classList.add("modelandnumber-container");

  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-container");

  const bikeStatus = document.createElement("div");
  bikeStatus.textContent = bike.getStatus();
  bikeStatus.classList.add("bike-details-status");

  const statusLight = new Image();
  statusLight.classList.add("status-light");
  statusLight.id = "statusLight-" + bike.number;
  const toggleIcon = new Image();
  toggleIcon.classList.add("toggle-icon");

  if (bike.getStatus() === "In Action") {
    toggleIcon.src = toggleIconOn;
    statusLight.src = greenCircle;
  } else {
    toggleIcon.src = toggleIconOff;
    statusLight.src = redCircle;
  }

  toggleIcon.id = "toggleStatus-" + bike.number;
  toggleIcon.addEventListener("click", () => handleStatusToggle(bike));

  const bikeNumber = document.createElement("div");
  bikeNumber.textContent = bike.number;
  bikeNumber.classList.add("bike-details-number");

  const bikeModel = document.createElement("div");
  bikeModel.textContent = bike.model;
  bikeModel.classList.add("bike-details-model");

  const bikeDetails = document.createElement("p");
  bikeDetails.textContent = bike.getDetails();
  bikeDetails.classList.add("bike-details-details");

  const bikeDetailsLabel = document.createElement("h2");
  bikeDetailsLabel.textContent = "Details";
  bikeDetailsLabel.classList.add("bike-details-detailsLabel");

  statusContainer.appendChild(toggleIcon);
  statusContainer.appendChild(statusLight);
  statusContainer.appendChild(bikeStatus);
  modelAndNumberContainer.appendChild(bikeModel);
  modelAndNumberContainer.appendChild(bikeNumber);
  detailsContainer.appendChild(bikeDetailsLabel);
  detailsContainer.appendChild(bikeDetails);

  detailsPanel.appendChild(modelAndNumberContainer);
  detailsPanel.appendChild(statusContainer);
  detailsPanel.appendChild(detailsContainer);
}

function closeDetailsPanel() {
  const detailsPanel = document.querySelector(".details-panel");

  detailsPanel.classList.remove("panel-open");

  setTimeout(() => {
    detailsPanel.innerHTML = "";
  }, 100);
}

function handleStatusToggle(bike) {
  const toggleImage = document.querySelector(`#toggleStatus-${bike.number}`);
  const statusLight = document.querySelector(`#statusLight-${bike.number}`);

  if (bike.getStatus() === "Out of Action") {
    statusLight.src = greenCircle;
    toggleImage.src = toggleIconOn;
    document.querySelector(".bike-details-status").textContent = "In Action";
    bike.toggleStatus();
  } else {
    statusLight.src = redCircle;
    toggleImage.src = toggleIconOff;
    document.querySelector(".bike-details-status").textContent =
      "Out of Action";
    bike.toggleStatus();
  }
}

// Sort bikes by status (In action on top)
function sortBikesByStatus(bikesArray) {
  let bikesSorted = bikes.sort(function (a, b) {
    if (a.getStatus() < b.getStatus()) {
      return -1;
    }
    if (a.getStatus() > b.getStatus()) {
      return 1;
    }
    return 0;
  });
}

export { loadBikesPage, bikes, importBike, createBike };
