import firebase, {firebaseRef, githubProvider, facebookProvider} from 'JS/firebase/index.jsx';


export var startGithubLogin = () => {
  return firebase.auth().signInWithPopup(githubProvider)
  .then((result) => {
    console.log('Auth worked', result);
  }, (error) => {
    console.log('unable to auth', error);
  });
}

export var startFacebookLogin = () => {
  return firebase.auth().signInWithPopup(facebookProvider)
  .then((result) => {
    console.log('Auth worked', result);
  }, (error) => {
    console.log('unable to auth', error);
  });
}

export var startLogin = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    console.log('Auth worked', result);
  }, (error) => {
    console.log('unable to auth', error);
  });
}

export var signUp = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    console.log('Signup worked', result);
  }, (error) => {
    console.log('unable to signup', error);
  });
}
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

export var startLogout = () => {
  return firebase.auth().signOut()
  .then(() => {
    console.log('Logged out');
  });
}
