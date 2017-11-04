import Firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: process.env.FIREBASE_KEY,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT
}

const firebaseapp = Firebase.initializeApp(config)

export const db = firebaseapp.database()
