import { riders } from "./riders";
import { ridersAvailable, ridersOnARide, ridersOnBreak } from "./rotation";

function importRider(index) {
  let importedObject = JSON.parse(localStorage.getItem(`riders[${index}]`));

  return importedObject;
}

// Update local storage
function updateLocalStorage() {
  // Clear local storage
  localStorage.clear();

  // Save riders array and length of array
  localStorage.setItem("ridersLength", riders.length);

  riders.forEach(function (rider) {
    localStorage.setItem(
      `riders[${riders.indexOf(rider)}]`,
      JSON.stringify(rider)
    );
  });

  // Save riders available array and length of array
  localStorage.setItem("ridersAvailableLength", ridersAvailable.length);

  ridersAvailable.forEach(function (id) {
    localStorage.setItem(`ridersAvailable[${ridersAvailable.indexOf(id)}]`, id);
  });

  // Save riders on a ride array and length of array
  localStorage.setItem("ridersOnARideLength", ridersOnARide.length);

  ridersOnARide.forEach(function (id) {
    localStorage.setItem(`ridersOnARide[${ridersOnARide.indexOf(id)}]`, id);
  });

  // Save riders on break array and length of array
  localStorage.setItem("ridersOnBreakLength", ridersOnBreak.length);

  ridersOnBreak.forEach(function (id) {
    let riderOnBreak = riders.find((r) => r.id === id);
    localStorage.setItem(
      `ridersOnBreak[${ridersOnBreak.indexOf(id)}]`,
      id + "-" + riderOnBreak.getBreakEndTime()
    );
  });
}

// Import rotation from local storage
function importFromLocalStorage() {
  if (localStorage.getItem("ridersAvailableLength")) {
    for (let i = 0; i < localStorage.getItem("ridersAvailableLength"); i++) {
      let id = localStorage.getItem(`ridersAvailable[${i}]`);

      ridersAvailable.push(id);
    }

    for (let i = 0; i < localStorage.getItem("ridersOnARideLength"); i++) {
      let id = localStorage.getItem(`ridersOnARide[${i}]`);

      ridersOnARide.push(id);
      let rider = riders.find((r) => r.id === id);
      rider.toggleOnARide();
    }

    for (let i = 0; i < localStorage.getItem("ridersOnBreakLength"); i++) {
      let breakInfo = localStorage.getItem(`ridersOnBreak[${i}]`);
      let id = breakInfo.substring(0, breakInfo.indexOf("-"));
      let breakEndTime = new Date(
        breakInfo.substring(breakInfo.indexOf("-") + 1)
      );

      let now = new Date();

      if (breakEndTime > now) {
        let riderOnBreak = riders.find((r) => r.id === id);

        riderOnBreak.onBreak = true;
        riderOnBreak.hadBreak = true;
        riderOnBreak.setBreakEndTime(breakEndTime);

        ridersOnBreak.push(id);
      } else if (
        breakEndTime.getFullYear() === now.getFullYear() &&
        breakEndTime.getMonth() === now.getMonth() &&
        breakEndTime.getDate() === now.getDate()
      ) {
        let riderOnBreak = riders.find((r) => r.id === id);
        riderOnBreak.hadBreak = true;
      }
    }
  }
}

export { importRider, updateLocalStorage, importFromLocalStorage };
