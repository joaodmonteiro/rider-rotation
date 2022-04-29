import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { importRider, refreshRiders } from "./riders";

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

const colRef = collection(db, "riders");

async function importRidersFromDatabase() {
  return getDocs(colRef)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        importRider(doc.data().name, doc.data().contract, doc.id);
      });
      console.log("database imported");
    })
    .catch((err) => console.log(err.message));
}

function saveRider(name, contract) {
  addDoc(colRef, {
    name: name,
    contract: contract,
  }).then(() => {
    console.log("success!");
    refreshRiders();
  });
}

function deleteRiderFromDB(id) {
  const docRef = doc(db, "riders", id);

  deleteDoc(docRef);
}

export {
  importRidersFromDatabase,
  saveRider,
  deleteRiderFromDB,
  colRef,
  doc,
  db,
  deleteDoc,
};
