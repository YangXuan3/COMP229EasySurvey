const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bearerToken = require('express-bearer-token');
const oktaAuth = require('./auth');
const hangman = require('./hangman');
import * as firebase from 'firebase/app'
import 'firebase/analytics';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtAUwFd5j4jSkb6gbUajYHYcSXaLK_eHg",
  authDomain: "my-project-a231b.firebaseapp.com",
  databaseURL: "https://my-project-a231b-default-rtdb.firebaseio.com",
  projectId: "my-project-a231b",
  storageBucket: "my-project-a231b.appspot.com",
  messagingSenderId: "984570459823",
  appId: "1:984570459823:web:147eca5a5690bf0435865a",
  measurementId: "G-8N8QC5KEB2"
};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bearerToken())
  .use(oktaAuth)
  .use(hangman());

mongoose.connect(`mongodb://localhost:27017/hangman`)
.then(() => {
  console.log('Connected to database');
  app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
});