import firebase from "firebase";
import "firebase/firestore";
import config from "../../config";

const firebaseConfig = {
    googleApiKey: config.googleApiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
