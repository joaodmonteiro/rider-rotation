import toggleIconOn from "../images/toggle-icon-on.svg";
import toggleIconOff from "../images/toggle-icon-off.svg";
import greenCircle from "../images/green-circle.svg";
import redCircle from "../images/red-circle.svg";
import plusSign from "../images/plus.svg";
import { addNewBikeModal, deleteConfirmation } from "../scripts/DOM";
import {
  deleteBikeFromDB,
  saveBike,
  updateBikeDetails,
  updateBikeStatus,
} from "../scripts/firebase";
import arrowDown from "../images/arrow-down.svg";
import edit from "../images/edit.svg";
import deleteIcon from "../images/delete_icon.svg";

// Array for bikes
let bikes = [];

let detailsPanelOpen = "";
let panelAnimationRunning = false;
let sortOptionsOpen = false;
let sortingOption = "status";
let detailEditOpen = false;

// Bike Factory Function
const Bike = (number, model, status, details, id) => {
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
    id,
    getStatus,
    getDetails,
    toggleStatus,
    changeDetails,
  };
};

function loadBikesPage() {
  detailEditOpen = false;

  resetMainSection();

  loadAddNewButton();

  loadSortingSection();

  createPanels();

  if (sortingOption === "status") sortBikesByStatus();
  else {
    sortBikesByNumber();
  }

  listAllBikes();
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

function deleteBike(bike) {
  bikes.splice(bikes.indexOf(bike), 1);
  deleteBikeFromDB(bike.id);
  closeDetailsPanel();
  reloadAllBikes();
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

function loadSortingSection() {
  const sortSelector = document.createElement("div");
  sortSelector.classList.add("sort-selector");

  const sortBy = document.createElement("label");
  sortBy.textContent = "Sort by:";

  const selectionContainer = document.createElement("div");

  sortSelector.appendChild(sortBy);
  sortSelector.appendChild(selectionContainer);

  const list = document.createElement("ul");
  selectionContainer.appendChild(list);

  const arrowIcon = new Image();
  arrowIcon.src = arrowDown;

  selectionContainer.appendChild(arrowIcon);

  const statusOption = document.createElement("li");
  statusOption.textContent = "Status";
  const alphanumericOption = document.createElement("li");
  alphanumericOption.textContent = "Alphanumeric";

  if (sortingOption == "status") {
    list.appendChild(statusOption);
    list.appendChild(alphanumericOption);
  } else {
    list.appendChild(alphanumericOption);
    list.appendChild(statusOption);
  }

  document.querySelector(".content").appendChild(sortSelector);

  selectionContainer.addEventListener("click", () => {
    if (!sortOptionsOpen) {
      selectionContainer.style = "height: max-content; overflow: auto;";
      sortOptionsOpen = true;
    }
    // sortBikesByNumber();
    // reloadAllBikes();
  });

  arrowIcon.addEventListener("click", (event) => {
    if (sortOptionsOpen) {
      selectionContainer.style = "height: 1.2em; overflow: hidden;";
      sortOptionsOpen = false;
      event.stopPropagation();
    }
  });

  statusOption.addEventListener("click", (event) => {
    if (sortOptionsOpen) {
      sortBikesByStatus();
      reloadAllBikes();
      selectionContainer.style = "height: 1.2em; overflow: hidden;";
      sortOptionsOpen = false;
      const frag = document.createDocumentFragment();
      frag.appendChild(statusOption);
      frag.appendChild(alphanumericOption);
      list.appendChild(frag);
      sortingOption = "status";
      event.stopPropagation();
    }
  });

  alphanumericOption.addEventListener("click", (event) => {
    if (sortOptionsOpen) {
      sortBikesByNumber();
      reloadAllBikes();
      selectionContainer.style = "height: 1.2em; overflow: hidden;";
      sortOptionsOpen = false;
      const frag = document.createDocumentFragment();
      frag.appendChild(alphanumericOption);
      frag.appendChild(statusOption);
      list.appendChild(frag);
      sortingOption = "alphanumeric";
      event.stopPropagation();
    }
  });
}

function reloadAllBikes() {
  document.querySelector(".bikes-panel").children[0].remove();
  listAllBikes();
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

function importBike(number, model, status, details, id) {
  const bike = Bike(number, model, status, details, id);
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

  detailEditOpen = false;

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

  const bikeDetailsTitleContainer = document.createElement("div");
  bikeDetailsTitleContainer.classList.add("bike-details-detailsTitleContainer");

  const bikeDetailsLabel = document.createElement("h2");
  bikeDetailsLabel.textContent = "Details";
  bikeDetailsLabel.classList.add("bike-details-detailsLabel");

  bikeDetailsTitleContainer.appendChild(bikeDetailsLabel);

  const detailsEditButton = document.createElement("div");
  detailsEditButton.classList.add("bike-details-detailsEditButton");

  const editButtonImage = new Image();
  editButtonImage.src = edit;
  detailsEditButton.appendChild(editButtonImage);

  detailsEditButton.addEventListener("click", () => {
    console.log(detailEditOpen);
    if (!detailEditOpen) {
      handleDetailsEditButton(bike);
    }
  });

  bikeDetailsTitleContainer.appendChild(detailsEditButton);

  const deleteContainer = document.createElement("div");
  deleteContainer.classList.add("details-delete-container");

  const deleteImage = new Image();
  deleteImage.src = deleteIcon;
  deleteContainer.appendChild(deleteImage);

  const deleteLabel = document.createElement("div");
  deleteLabel.textContent = "Delete";
  deleteContainer.appendChild(deleteLabel);

  deleteContainer.addEventListener("click", () => handleDeleteBike(bike));

  statusContainer.appendChild(toggleIcon);
  statusContainer.appendChild(statusLight);
  statusContainer.appendChild(bikeStatus);
  modelAndNumberContainer.appendChild(bikeModel);
  modelAndNumberContainer.appendChild(bikeNumber);
  detailsContainer.appendChild(bikeDetailsTitleContainer);
  detailsContainer.appendChild(bikeDetails);

  detailsPanel.appendChild(modelAndNumberContainer);
  detailsPanel.appendChild(statusContainer);
  detailsPanel.appendChild(detailsContainer);
  detailsPanel.appendChild(deleteContainer);
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
    updateBikeStatus(bike.id, "In Action");
    reloadBikeListing(bike);
  } else {
    statusLight.src = redCircle;
    toggleImage.src = toggleIconOff;
    document.querySelector(".bike-details-status").textContent =
      "Out of Action";
    bike.toggleStatus();
    updateBikeStatus(bike.id, "Out of Action");
    reloadBikeListing(bike);
  }
}

function reloadBikeListing(bike) {
  const li = document.querySelector(`#bikeListItem-${bike.number}`);
  const img = li.children[2].children[0];
  const status = li.children[2].children[1];
  if (bike.getStatus() === "In Action") {
    img.src = greenCircle;
    status.textContent = "In Action";
  } else {
    img.src = redCircle;
    status.textContent = "Out of Action";
  }
}

// Sort bikes by status (In action on top)
function sortBikesByStatus() {
  let bikesSorted = bikes.sort(function (a, b) {
    if (a.getStatus() < b.getStatus()) {
      return -1;
    }
    if (a.getStatus() > b.getStatus()) {
      return 1;
    }
    return 0;
  });

  bikes = bikesSorted;
}

// Sort bikes by alphanumerical order
function sortBikesByNumber() {
  let bikesSorted = bikes.sort(function (a, b) {
    if (a.number < b.number) {
      return -1;
    }
    if (a.number > b.number) {
      return 1;
    }
    return 0;
  });

  bikes = bikesSorted;
}

function handleDetailsEditButton(bike) {
  detailEditOpen = true;

  const detailsElement = document.querySelector(".bike-details-details");
  const details = detailsElement.textContent;

  const inputText = document.createElement("input");
  inputText.type = "text";
  inputText.value = details;

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("edit-details-buttons-container");

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add("secondary-button");

  const submitButton = document.createElement("button");
  submitButton.textContent = "Confirm";
  submitButton.classList.add("primary-button");

  buttonsContainer.appendChild(cancelButton);
  buttonsContainer.appendChild(submitButton);

  const detailsSection = detailsElement.parentElement;

  detailsElement.remove();

  const editDetailsContainer = document.createElement("div");
  editDetailsContainer.classList.add("edit-details-container");
  editDetailsContainer.appendChild(inputText);

  editDetailsContainer.appendChild(buttonsContainer);

  cancelButton.addEventListener("click", () => {
    const oldDetailsElement = document.createElement("p");
    oldDetailsElement.classList.add("bike-details-details");
    oldDetailsElement.textContent = bike.getDetails();
    editDetailsContainer.remove();

    const detailsContainer = document.querySelector(".details-container");
    detailsContainer.appendChild(oldDetailsElement);
    detailEditOpen = false;
  });

  submitButton.addEventListener("click", () => {
    updateBikeDetails(bike.id, inputText.value);
    bike.changeDetails(inputText.value);

    const newDetailsElement = document.createElement("p");
    newDetailsElement.classList.add("bike-details-details");
    newDetailsElement.textContent = inputText.value;
    editDetailsContainer.remove();

    const detailsContainer = document.querySelector(".details-container");
    detailsContainer.appendChild(newDetailsElement);
    detailEditOpen = false;
  });

  detailsSection.appendChild(editDetailsContainer);
}

function handleDeleteBike(bike) {
  // create modal to confirm if user wants to delete bike
  deleteConfirmation("bike", bike);
}

export { loadBikesPage, bikes, importBike, createBike, deleteBike };
