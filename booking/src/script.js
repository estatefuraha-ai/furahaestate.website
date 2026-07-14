import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA11FGnqLgDQSHTVDoNfUyEBZZ76z6SVzU",
  authDomain: "furaha-estate-5f211.firebaseapp.com",
  projectId: "furaha-estate-5f211",
  storageBucket: "furaha-estate-5f211.firebasestorage.app",
  messagingSenderId: "537752833195",
  appId: "1:537752833195:web:392117861a25d091273bee"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const form = document.getElementById("bookingForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const booking = {

        name: document.getElementById("name").value,

        phone: document.getElementById("phone").value,

        email: document.getElementById("email").value,

        checkin: document.getElementById("checkin").value,

        checkout: document.getElementById("checkout").value,

        guests: document.getElementById("guests").value,

        message: document.getElementById("message").value,

        createdAt: serverTimestamp(),

        status: "Pending"

    };

    try {

        await addDoc(collection(db, "bookings"), booking);

        alert("Booking submitted successfully!");

    } catch (error) {

        alert("Failed to save booking.");

        console.error(error);

    }

});

const text = `Hello Furaha Estate, I would like to book...

Name: ${booking.name}
Phone: ${booking.phone}`;

window.open(
  "https://wa.me/255719054077?text=" + encodeURIComponent(text),
  "_blank"
);