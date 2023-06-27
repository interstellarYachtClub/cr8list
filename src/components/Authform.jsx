import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';
import { auth, googleProvider } from '../auth/firebaseauth';

export const Authform = () => {
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  //email/pass
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, passwd);
    } catch (err) {
      console.error(err);
    }
  };

  //google
  const signIntoGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  //logout
  const signOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  //console.log(auth?.currentUser.email);
  //console.log(auth?.currentUser.photoURL);

  return (
    <div>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        onChange={(e) => setPasswd(e.target.value)}
      />
      <div>
        <button onClick={signIn}>sign in</button>
      </div>
      <div>
        <button onClick={signIntoGoogle}>sign into google</button>
      </div>
      <div>
        <div>//logout</div>
        <button onClick={signOut}>sign out</button>
      </div>
    </div>
  );
};

export default Authform;
