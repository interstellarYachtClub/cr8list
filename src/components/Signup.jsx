import { useState, useContext } from 'react';
import { newUserForm } from '../utilities/formInputs';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebaseauth';
import { AuthContext } from '../context/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../auth/firebaseauth';

const Signup = () => {
  const { dispatch } = useContext(AuthContext);
  const [newUser, setNewUser] = useState({});

  //email/pass
  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: 'SIGNEDIN', payload: user });
      });
    } catch (err) {
      console.error(err);
    }
    console.log('//context');
    console.log(AuthContext._currentValue.currentUser.uid);
    // Add a new document with a generated id.
    const docRef = await addDoc(
      collection(db, newUser.email + AuthContext._currentValue.currentUser.uid),
      {
        name: 'My First Cratelist',
      }
    );
    console.log('Document written with ID: ', docRef.id);
  };

  const handleSignup = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setNewUser({ ...newUser, [id]: value });
  };
  console.log(newUser);

  return (
    <div className="newCratelistForm ">
      {newUserForm.map((input) => {
        if (input.showfield) {
          return (
            <div className={input.id} key={input.id}>
              <label>{input.label}</label>
              <input
                className="rounded m-2 text-center focus:animate-pulse border-b-2 border-white/[0] focus:outline-none focus:border-b-2 focus:border-blue-950"
                required
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                onChange={handleSignup}
              />
            </div>
          );
        }
      })}
      <button onClick={createAccount}>create account</button>
    </div>
  );
};

export default Signup;
