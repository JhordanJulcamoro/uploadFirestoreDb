const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDXHP95xunTSBO0U61PlNhOLjyjXmIVXRI",
  authDomain: "conpresp.firebaseapp.com",
  databaseURL: "https://conpresp.firebaseio.com",
  projectId: "conpresp",
  storageBucket: "conpresp.appspot.com",
  messagingSenderId: "493438146924",
  appId: "1:493438146924:web:7b8ba5f8aacb97b114fb49",
  measurementId: "G-RV1V75RE2Q",
});

var db = firebase.firestore();
var userCollections = [
  // add data in json example
  {
    ID: "1",
    CODIGO_LPP: "0591/001-001",
    PORCENTAJE: "53%",
    NUMERO: "001",
    GRUPO: " Vila Olím",
  },
  {
    ID: "2",
    CODIGO_LPP: "0591/002-002",
    PORCENTAJE: "92%",
    NUMERO: "002",
    GRUPO: " Vila Olím",
  },
];

userCollections.forEach((obj) => {
  db.collection("conpresp_v1").add({
    ID: obj.ID,
    CODIGO_LPP: obj.CODIGO_LPP,
    PORCENTAJE: obj.PORCENTAJE,
    NUMERO: obj.NUMERO,
    GRUPO: obj.GRUPO,
  });
});
