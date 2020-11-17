const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  /*SERIAL KEY OF THE PROJECT*/
});

var db = firebase.firestore();
var userCollections = [
  // add data in json
];

userCollections.forEach((obj) => {
  //foreach of data, declare name of database branch and name of parameters data
});
