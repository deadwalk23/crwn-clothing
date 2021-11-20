import firebase from  'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';



const config = {

    apiKey: "AIzaSyD-vhSPIcD1od_UmVBxa11iPDSEXOW_pqM",
    authDomain: "crwn-db-77c32.firebaseapp.com",
    projectId: "crwn-db-77c32",
    storageBucket: "crwn-db-77c32.appspot.com",
    messagingSenderId: "1084567245354",
    appId: "1:1084567245354:web:819298215a2cd92b74e953",
    measurementId: "G-TWZZDBRQ8L"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
              await userRef.set({
                  displayName,
                  email,
                  createdAt, 
                  ...additionalData

              })
          } catch (error) {
              console.log('error creating user',error.message);
          }
      }

      return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;