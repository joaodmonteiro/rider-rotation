import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { riders, importRider, loadRidersPage } from "./riders";
import { bikes, importBike, loadBikesPage } from "./bikes";
import { loadApp } from ".";
import { loadLoginPage } from "./login";

const firebaseConfig = {
  apiKey: "AIzaSyD87hMgZZctPdsIFIz1MPlB0l3J3E9fbb8",
  authDomain: "gorillas-dashboard.firebaseapp.com",
  projectId: "gorillas-dashboard",
  storageBucket: "gorillas-dashboard.appspot.com",
  messagingSenderId: "25064700189",
  appId: "1:25064700189:web:d7a9b045824753245389f4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

let loggedIn = false;

// connectAuthEmulator(auth, "http://localhost:9099");

const colRefRiders = collection(db, "riders");
const colRefBikes = collection(db, "bikes");

monitorAuthState();

async function importRidersFromDatabase() {
  return getDocs(colRefRiders)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        importRider(doc.data().name, doc.data().contract, doc.id);
      });
    })
    .catch((err) => console.log(err.message));
}

async function importBikesFromDatabase() {
  return getDocs(colRefBikes)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        importBike(
          doc.data().number,
          doc.data().model,
          doc.data().status,
          doc.data().details,
          doc.id
        );
      });
    })
    .catch((err) => console.log(err.message));
}

function saveRider(name, contract) {
  addDoc(colRefRiders, {
    name: name,
    contract: contract,
  }).then(() => {
    console.log("success!");
    refreshRiders();
  });
}

function saveBike(number, model, status, details) {
  addDoc(colRefBikes, {
    number: number,
    model: model,
    status: status,
    details: details,
  }).then(() => {
    console.log("success!");
    refreshBikes();
  });
}

function deleteRiderFromDB(id) {
  const docRef = doc(db, "riders", id);

  deleteDoc(docRef);
}

function deleteBikeFromDB(id) {
  const docRef = doc(db, "bikes", id);

  deleteDoc(docRef);
}

async function refreshRiders() {
  riders.length = 0;
  getDocs(colRefRiders)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        importRider(doc.data().name, doc.data().contract, doc.id);
      });
      loadRidersPage();
    })
    .catch((err) => console.log(err.message));
}

async function refreshBikes() {
  bikes.length = 0;
  getDocs(colRefBikes)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        importBike(
          doc.data().number,
          doc.data().model,
          doc.data().status,
          doc.data().details,
          doc.id
        );
      });
      loadBikesPage();
    })
    .catch((err) => console.log(err.message));
}

function updateBikeStatus(id, newStatus) {
  const docRef = doc(db, "bikes", id);

  updateDoc(docRef, { status: newStatus });
}

function updateBikeDetails(id, newDetails) {
  const docRef = doc(db, "bikes", id);

  updateDoc(docRef, { details: newDetails });
}

async function createUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("user created:", userCredential.user);
  } catch (err) {
    console.log(err.message);
  }
}

async function loginEmailPassword(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (err) {
    console.log(err.message);
  }
}

async function monitorAuthState() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (!loggedIn) {
        loggedIn = true;
        loadApp();
      }
    } else {
      loadLoginPage();
    }
  });
}

async function logout() {
  await signOut(auth);
  loggedIn = false;
}

export {
  importRidersFromDatabase,
  importBikesFromDatabase,
  saveRider,
  saveBike,
  deleteRiderFromDB,
  deleteBikeFromDB,
  updateBikeStatus,
  updateBikeDetails,
  createUser,
  loginEmailPassword,
  monitorAuthState,
  logout,
};
