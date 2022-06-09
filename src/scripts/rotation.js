import { popUpNotification } from "./DOM";
import { riders } from "./riders";
import { updateLocalStorage } from "./storage";
import plusSign from "../images/plus.svg";
import breakIcon from "../images/break-icon.svg";
import { addToRotationModal } from "./DOM";

// Array with available riders
let ridersAvailable = [];

// Array with riders on a ride
let ridersOnARide = [];

// Array with riders on break
let ridersOnBreak = [];

function addRiderToRotation(id) {
  ridersAvailable.push(id);

  let riderOnRotation = riders.find(function (r) {
    return r.id == id;
  });

  riderOnRotation.toggleOnRotation();

  refreshRiderRotation();
  // updateLocalStorage();
}

function DeleteRiderFromRotation(uniqueID) {
  // Find rider to delete through ID
  let riderToDelete = riders.find(function (r) {
    return r.id == uniqueID;
  });

  // Remove rider from one of the rotation arrays
  if (riderToDelete.isOnARide()) {
    ridersOnARide.splice(ridersOnARide.indexOf(uniqueID), 1);
  } else if (riderToDelete.isOnBreak()) {
    ridersOnBreak.splice(ridersOnBreak.indexOf(uniqueID), 1);
  } else {
    ridersAvailable.splice(ridersAvailable.indexOf(uniqueID), 1);
  }

  riderToDelete.toggleOnRotation();

  //Refresh rotation
  refreshRiderRotation();

  // Update local storage
  updateLocalStorage();
}

function StartRide(uniqueID) {
  let rider = riders.find(function (r) {
    return r.id == uniqueID;
  });

  if (rider.isOnBreak()) {
    rider.toggleOnBreak();

    ridersOnBreak.splice(ridersOnBreak.indexOf(uniqueID), 1);
  } else {
    ridersAvailable.splice(ridersAvailable.indexOf(uniqueID), 1);
  }

  rider.toggleOnARide();

  //Insert rider in on a ride array
  ridersOnARide.push(uniqueID);

  refreshRiderRotation();

  updateLocalStorage();
}

function EndRide(uniqueID) {
  let rider = riders.find(function (r) {
    return r.id == uniqueID;
  });

  rider.toggleOnARide();

  // Remove rider from On a ride array
  ridersOnARide.splice(ridersOnARide.indexOf(uniqueID), 1);

  // Insert rider on available array
  ridersAvailable.push(uniqueID);

  refreshRiderRotation();

  updateLocalStorage();
}

function GoOnBreak(uniqueID) {
  let rider = riders.find(function (r) {
    return r.id == uniqueID;
  });

  if (!rider.getHadBreak()) {
    if (rider.isOnARide()) {
      rider.toggleOnARide();
      ridersOnARide.splice(ridersOnARide.indexOf(uniqueID), 1);
    } else {
      ridersAvailable.splice(ridersAvailable.indexOf(uniqueID), 1);
    }

    rider.toggleOnBreak();

    ridersOnBreak.push(uniqueID);

    refreshRiderRotation();

    updateLocalStorage();
  }
}

function EndBreak(uniqueID) {
  let rider = riders.find(function (r) {
    return r.id == uniqueID;
  });

  rider.toggleOnBreak();
  ridersOnBreak.splice(ridersOnBreak.indexOf(uniqueID), 1);

  ridersAvailable.push(uniqueID);
  refreshRiderRotation();

  updateLocalStorage();
}

// Refresh Rider Rotation page
function refreshRiderRotation() {
  const availableList = document.querySelector("#available");
  const onARideList = document.querySelector("#onARide");
  const onABreakList = document.querySelector("#onABreak");

  availableList.innerHTML = "";
  onARideList.innerHTML = "";
  onABreakList.innerHTML = "";

  ridersAvailable.forEach(function (id) {
    let rider = riders.find(function (r) {
      return r.id == id;
    });
    listRider(rider, "available");
  });

  ridersOnARide.forEach(function (id) {
    let rider = riders.find(function (r) {
      return r.id == id;
    });
    listRider(rider, "onARide");
  });

  ridersOnBreak.forEach(function (id) {
    let rider = riders.find(function (r) {
      return r.id == id;
    });
    listRider(rider, "onBreak");
  });
}

// Create rider list item
function listRider(rider, status) {
  if (!rider.isOnRotation()) {
    rider.toggleOnRotation();
  }

  let listItem = document.createElement("li");
  listItem.id = `li-${rider.id}`;

  let riderBox = document.createElement("div");
  riderBox.classList.add("riderBox");

  let span = document.createElement("span");
  span.classList.add("riderNameBox");
  span.id = `nameBox-${rider.id}`;
  span.textContent = rider.name;

  riderBox.appendChild(span);

  let buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttonsContainer");

  if (status === "onARide") {
    const onARideList = document.querySelector("#onARide");
    let backButton = document.createElement("button");
    backButton.classList.add("back");
    backButton.textContent = "Back";
    backButton.id = `back-${rider.id}`;

    backButton.addEventListener("click", () => EndRide(rider.id));

    let breakButton = document.createElement("button");
    breakButton.classList.add("break");
    breakButton.id = `break-${rider.id}`;

    breakButton.addEventListener("click", () => GoOnBreak(rider.id));

    let breakImage = new Image();
    breakImage.src = breakIcon;
    breakButton.appendChild(breakImage);

    if (rider.getHadBreak()) breakButton.style.opacity = "0.3";

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "X";
    deleteButton.id = `delete-${rider.id}`;
    deleteButton.style.order = "3";

    deleteButton.addEventListener("click", () =>
      DeleteRiderFromRotation(rider.id)
    );

    buttonsContainer.appendChild(backButton);
    buttonsContainer.appendChild(breakButton);
    buttonsContainer.appendChild(deleteButton);

    riderBox.appendChild(buttonsContainer);
    listItem.appendChild(riderBox);
    onARideList.appendChild(listItem);
  } else if (status === "onBreak") {
    const onABreakList = document.querySelector("#onABreak");
    let startButton = document.createElement("button");
    startButton.classList.add("start");
    startButton.textContent = "Go";
    startButton.id = `start-${rider.id}`;

    startButton.addEventListener("click", () => StartRide(rider.id));

    let backButton = document.createElement("button");
    backButton.classList.add("backFromBreak");
    backButton.textContent = "Back";
    backButton.id = `breakEnd-${rider.id}`;

    backButton.addEventListener("click", () => EndBreak(rider.id));

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "X";
    deleteButton.id = `delete-${rider.id}`;
    deleteButton.style.order = "3";

    deleteButton.addEventListener("click", () =>
      DeleteRiderFromRotation(rider.id)
    );

    // Create timer
    let counter = document.createElement("p");
    counter.classList.add("breakTimer");
    counter.id = `breakTimer-${rider.id}`;

    let timeNow = new Date();
    let totalSecondsLeft = (rider.getBreakEndTime() - timeNow.getTime()) / 1000;
    let secondsLeft = Math.floor(totalSecondsLeft % 60);
    let minutesLeft = Math.floor(totalSecondsLeft / 60);
    if (secondsLeft < 10)
      counter.textContent = `${minutesLeft}:0${secondsLeft}`;
    else counter.textContent = `${minutesLeft}:${secondsLeft}`;

    let timerCircle = document.createElement("div");
    timerCircle.classList.add("timer-circle");
    timerCircle.style = `--duration: ${totalSecondsLeft};--size: 40;`;
    let circleMask = document.createElement("div");
    circleMask.classList.add("mask");

    const breakInterval = setInterval(function () {
      console.log(rider.isOnBreak());
      if (!rider.getHadBreak() && rider.isOnRotation() && rider.isOnBreak()) {
        updateCountdown(rider);
      }
    }, 1000);

    buttonsContainer.appendChild(startButton);
    buttonsContainer.appendChild(backButton);
    buttonsContainer.appendChild(deleteButton);

    riderBox.appendChild(buttonsContainer);
    listItem.appendChild(riderBox);
    timerCircle.appendChild(circleMask);
    listItem.appendChild(timerCircle);
    listItem.appendChild(counter);

    // listItem.appendChild(counter);
    onABreakList.appendChild(listItem);
  } else {
    const availableList = document.querySelector("#available");
    let startButton = document.createElement("button");
    startButton.classList.add("start");
    startButton.id = `start-${rider.id}`;
    startButton.textContent = "Go";

    startButton.addEventListener("click", () => StartRide(rider.id));

    let breakButton = document.createElement("button");
    breakButton.classList.add("break");
    breakButton.id = `break-${rider.id}`;

    breakButton.addEventListener("click", () => GoOnBreak(rider.id));

    let breakImage = new Image();
    breakImage.src = breakIcon;
    breakButton.appendChild(breakImage);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.id = `delete-${rider.id}`;
    deleteButton.textContent = "X";

    deleteButton.addEventListener("click", () =>
      DeleteRiderFromRotation(rider.id)
    );

    if (rider.getHadBreak()) breakButton.style.opacity = "0.3";

    buttonsContainer.appendChild(startButton);
    buttonsContainer.appendChild(breakButton);
    buttonsContainer.appendChild(deleteButton);
    deleteButton.style.order = "3";

    riderBox.appendChild(buttonsContainer);

    listItem.appendChild(riderBox);

    availableList.appendChild(listItem);
  }
}

function loadRotationPage() {
  document.querySelector("header").innerHTML = "";
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Rider Rotation";
  pageTitle.classList.add("pageTitle");
  document.querySelector("header").appendChild(pageTitle);

  const plus = new Image();
  plus.src = plusSign;
  plus.classList.add("plus");

  const addToRotationButton = document.createElement("button");
  addToRotationButton.classList.add("primary-button");
  addToRotationButton.classList.add("addToRotation-button");
  addToRotationButton.appendChild(plus);
  const addToRotationButtonLabel = document.createElement("div");
  addToRotationButtonLabel.textContent = "Add to Rotation";
  addToRotationButton.appendChild(addToRotationButtonLabel);
  document.querySelector("header").appendChild(addToRotationButton);

  // Click on 'add new' button
  addToRotationButton.addEventListener("click", () => addToRotationModal());

  document.querySelector(".content").remove();

  const content = document.createElement("div");
  content.classList.add("content", "contentRotation");

  document.querySelector(".main").appendChild(content);

  // Sections
  const onARideContainer = document.createElement("div");
  const availableContainer = document.createElement("div");
  const onABreakContainer = document.createElement("div");

  content.appendChild(onARideContainer);
  content.appendChild(availableContainer);
  content.appendChild(onABreakContainer);

  // Labels for each section
  const onARideLabel = document.createElement("h2");
  onARideLabel.textContent = "On a ride";
  onARideContainer.appendChild(onARideLabel);

  const availableLabel = document.createElement("h2");
  availableLabel.textContent = "Available";
  availableContainer.appendChild(availableLabel);

  onABreakContainer.id = "onABreakSection";
  const onABreakLabel = document.createElement("h2");
  onABreakLabel.textContent = "On Break";
  onABreakContainer.appendChild(onABreakLabel);

  // Lists(ul)
  const onARideList = document.createElement("ul");
  onARideList.classList.add("rotationList");
  onARideList.id = "onARide";
  onARideContainer.appendChild(onARideList);

  const availableList = document.createElement("ul");
  availableList.classList.add("rotationList");
  availableList.id = "available";
  availableContainer.appendChild(availableList);

  const onABreakList = document.createElement("ul");
  onABreakList.classList.add("rotationList");
  onABreakList.id = "onABreak";
  onABreakContainer.appendChild(onABreakList);

  // Populate each list

  // ON A RIDE
  ridersOnARide.forEach((r) => {
    // let riderToList = riders.find((rider) => rider.id === r);
    listRider(
      riders.find((rider) => rider.id === r),
      "onARide"
    );
  });

  // AVAILABLE
  ridersAvailable.forEach((r) => {
    // let riderToList = riders.find((rider) => rider.id === r);
    listRider(
      riders.find((rider) => rider.id === r),
      "available"
    );
  });

  // ON A BREAK
  ridersOnBreak.forEach((r) => {
    // let riderToList = riders.find((rider) => rider.id === r);
    listRider(
      riders.find((rider) => rider.id === r),
      "onBreak"
    );
  });
}

function updateCountdown(rider) {
  let timeNow = new Date();
  let totalSecondsLeft = (rider.getBreakEndTime() - timeNow.getTime()) / 1000;
  let secondsLeft = Math.floor(totalSecondsLeft % 60);
  let minutesLeft = Math.floor(totalSecondsLeft / 60);
  let counter = document.querySelector(`#breakTimer-${rider.id}`);

  if (secondsLeft < 10) counter.textContent = `${minutesLeft}:0${secondsLeft}`;
  else counter.textContent = `${minutesLeft}:${secondsLeft}`;
  if (minutesLeft <= 1) counter.style.color = "red";

  if (minutesLeft <= 0 && secondsLeft <= 0) {
    popUpNotification(`${rider.name} has finished his break!`, 30000);
    EndBreak(rider.id);
    // clearInterval(intervalFunction);
  }
}

export {
  loadRotationPage,
  ridersAvailable,
  ridersOnARide,
  ridersOnBreak,
  addRiderToRotation,
  StartRide,
  EndRide,
  GoOnBreak,
  EndBreak,
  DeleteRiderFromRotation,
  refreshRiderRotation,
};
