import React from "react";
import ReactDOM from "react-dom";
import Container from "Container";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import PageA from "Components/PageA.jsx";
import PageB from "Components/PageB.jsx";
import PageC from "Components/PageC.jsx";
import Login from "Components/Login.jsx";
import SignUp from "Components/SignUp.jsx";

//import 'JS/firebase/index.jsx';

import firebase from "app/firebase/";

firebase.auth().onAuthStateChanged((user) => {
  if (user){
    hashHistory.push('/PageA');
  } else {
    hashHistory.push('/');
  }
});

require('Stylesheets');


const app = document.getElementById('app');

ReactDOM.render(

, app);
