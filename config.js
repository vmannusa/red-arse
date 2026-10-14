// Online play settings for Red Arse.
// Leave this as null and the game still works: bots and pass-and-play on one device.
// To turn on online rooms, replace null with the firebaseConfig object from your
// Firebase project (Project settings > General > Your apps > Web app). Example:
//
// window.RED_ARSE_FIREBASE = {
//   apiKey: "AIza...",
//   authDomain: "red-arse.firebaseapp.com",
//   databaseURL: "https://red-arse-default-rtdb.firebaseio.com",
//   projectId: "red-arse",
//   storageBucket: "red-arse.appspot.com",
//   messagingSenderId: "1234567890",
//   appId: "1:1234567890:web:abc123"
// };
//
// These values are not secret; the database rules decide who can read and write.
window.RED_ARSE_FIREBASE = null;
