import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import axios from "axios";
const firebaseConfig = {
  apiKey: "AIzaSyBLr0K0QGM1Cv0qxC25EHDOM_6THCa4ZHY",
  authDomain: "herneeds-b5e8c.firebaseapp.com",
  projectId: "herneeds-b5e8c",
  storageBucket: "herneeds-b5e8c.appspot.com",
  messagingSenderId: "619404749032",
  appId: "1:619404749032:web:22b93c21a78b88213fc15d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let bathroomData = [
  {
    name: "Chic Fil A",
    position: {
      lng: -79.39359,
      lat: 43.68682,
    },
    hasProducts: false,
    voteCount: 1,
    address: "11 Maple wood street",
    products: ["Tampons", "Pads"],
  },
  {
    name: "Victoria Building",
    position: {
      lng: -79.37099,
      lat: 43.65682,
    },
    hasProducts: true,
    voteCount: 1,
    address: "56 Laurel Avenue",
    products: ["Tampons", "Pads"],
  },
];
export async function addBathroom(bathroomData) {
  await addDoc(collection(db, "bathrooms"), bathroomData);
}
export async function getBathrooms() {
  const querySnapshot = await getDocs(collection(db, "bathrooms"));
  let formatQuery = [];
  querySnapshot.forEach((doc) => {
    formatQuery.push(doc.data());
  });
  return formatQuery;
  // return bathroomData;
}
