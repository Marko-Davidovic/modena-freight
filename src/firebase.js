import firebase from "firebase/app"
import "firebase/auth"
//import "firebase/firestore"

const app = firebase.initializeApp({

	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PRODJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
})
//const firestore = app.firestore()
//const db = firebase.firestore();
//const auth = app.auth();
export var provider = new firebase.auth.GoogleAuthProvider();

export const auth = app.auth()
export default app
