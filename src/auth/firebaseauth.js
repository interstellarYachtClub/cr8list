import firebaseconfig from '../config/firebaseconfig';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

const app = initializeApp(firebaseconfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);

//Detect auth state
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('user:logged in');
  } else {
    console.log('user:no user');
  }
});
