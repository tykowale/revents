import firebase from "firebase";
import "firebase/firestore";
import config from "../../config";

const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId
};

const settings = {
    timestampsInSnapshots: true
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
firestore.settings(settings);

export default firebase;
