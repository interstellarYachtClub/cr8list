import { useState } from 'react';
import { newUserForm } from '../utilities/formInputs';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebaseauth';

const Signup = () => {
  const [newUser, setNewUser] = useState({});

  //email/pass
  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );
    } catch (err) {
      console.error(err);
    }
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
