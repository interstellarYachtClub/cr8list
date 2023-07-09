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

  //email/pass
  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, passwd);
    } catch (err) {
      console.error(err);
    }
  };
  const signInAccount = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, passwd).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch({ type: 'SIGNEDIN', payload: user });
        }
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ' : ' + errorMessage);
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
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col space-y-4 text-center">
      <div className="">//create account _ sign in</div>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPasswd(e.target.value)}
      />
      <button onClick={createAccount}>create account</button>
      <p> or </p>
      <button onClick={signInAccount}>sign in</button>
      <div className="pt-8">//google signin</div>
      <button onClick={signIntoGoogle}>sign into google</button>
      <div className="pt-8">//logout</div>
      <button onClick={logOut}>sign out</button>
    </div>
  );
};

export default Signin;
