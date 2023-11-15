import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDInvCJjdmCEhcRfYEICjd5DTX3_EmV-ZU",
    authDomain: "c78pc-5ecb6.firebaseapp.com",
    projectId: "c78pc-5ecb6",
    storageBucket: "c78pc-5ecb6.appspot.com",
    messagingSenderId: "1059454875798",
    appId: "1:1059454875798:web:ea3643acef5267d2dbeab7"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


