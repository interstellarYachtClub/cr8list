import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState, useEffect, useContext, useReducer } from 'react';
import { auth, googleProvider } from '../auth/firebaseauth';
import { AuthContext } from '../context/AuthContext';

const Signin = () => {
  const { dispatch } = useContext(AuthContext);
  //login states
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');

  const signInAccount = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, passwd).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch({ type: 'SIGNEDIN', payload: user });
          console.log(AuthContext._currentValue);
        }
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ' : ' + errorMessage);
    }
  };

  //google
  /*
  const signIntoGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  */

  //logout
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col space-y-4 text-center">
      <div className="flex flex-col items-center">
        <input
          className="rounded m-2 text-center focus:animate-pulse border-b-2 border-white/[0] focus:outline-none focus:border-b-2 focus:border-blue-950"
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="rounded m-2 text-center focus:animate-pulse border-b-2 border-white/[0] focus:outline-none focus:border-b-2 focus:border-blue-950"
          type="password"
          placeholder="password"
          onChange={(e) => setPasswd(e.target.value)}
        />
        <button onClick={signInAccount}>sign in</button>
      </div>
      {/* <div className="pt-8">//google signin</div>
      <button onClick={signIntoGoogle}>sign into google</button> */}
      <p>... or ...</p>
      <a href="/signup">
        <button className="inline-block">create account</button>
      </a>
      <div>
        <div className="pt-8 mb-2">//logout</div>
        <button onClick={logOut}>sign out</button>
      </div>
    </div>
  );
};

export default Signin;
