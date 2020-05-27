import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDXpyKFW6F_vkOyZcHLWh6ST9D2VFvfHIY",
    authDomain: "vera-clothings.firebaseapp.com",
    databaseURL: "https://vera-clothings.firebaseio.com",
    projectId: "vera-clothings",
    storageBucket: "vera-clothings.appspot.com",
    messagingSenderId: "200491696114",
    appId: "1:200491696114:web:ceda72dc89d9e1ff73b56b"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const  provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle =  async () => {

    try {
      firebase.auth().signInWithPopup(provider)
    } catch(err) {
        console.log(err.message)
    }

}
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
   
   try {
    if(!snapShot.exists) {
      const { displayName, email, uid} = userAuth;
      const createdAt = new Date();

      await userRef.set({
        displayName,
        email,
        uid,
        createdAt,
        ...additionalData
      })
    }
   } catch(err) {
    console.log(err.message)
   }  
      return userRef;
  } ;


