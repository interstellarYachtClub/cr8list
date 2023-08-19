import { useState } from 'react';
import { newCrateForm } from '../utilities/formInputs';
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../auth/firebaseauth';
import { AuthContext } from '../context/AuthContext';

const NewCratelist = () => {
  const [crateData, setCrateData] = useState({});

  const handleNewCratelist = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setCrateData({ ...crateData, [id]: value });
    //console.log('Document written with ID: ', docRef.id);
  };
  //console.log(crateData);

  const handleAddCratelist = async () => {
    // console.log('thing!');
    // console.log(crateData.listName);
    // console.log(
    //   `${AuthContext._currentValue.currentUser.email}${AuthContext._currentValue.currentUser.uid}`
    // );

    // const docRef = doc(
    //   db,
    //   `${AuthContext._currentValue.currentUser.email}${AuthContext._currentValue.currentUser.uid}/crates/children/`,
    //   crateData.listName
    // );

    // await setDoc(docRef, {
    //   isPublic: false,
    //   tracklist: [],
    // });
    const docRef = await addDoc(
      collection(
        db,
        `${AuthContext._currentValue.currentUser.uid}/crates/children/`
      ),
      {
        name: crateData.listName,
        created: new Date(),
        tracks: [],
        isPublic: crateData.isPublic === 'on' ? true : false,
      }
    );
  };

  return (
    <div className="newCratelistForm flex flex-col p-8 m-2 justify-start accent-[#FF2700] rounded backdrop-blur-sm backdrop-opacity-5 bg-white/10">
      {newCrateForm.map((input) => {
        if (input.showfield) {
          return (
            <div className={input.id + ' ' + 'form-input'} key={input.id}>
              <label>{input.label}</label>
              <input
                className="rounded m-2 text-center focus:animate-pulse border-b-2 border-white/[0] focus:outline-none focus:border-b-2 focus:border-[#FF2700]"
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                onChange={handleNewCratelist}
              />
            </div>
          );
        }
      })}
      <button onClick={handleAddCratelist}>Make Cratelist</button>

      {/* <input
        type="text"
        id="cratelistName"
        required
        placeholder="Cratelist Name"
      />
      <input type="checkbox" id="isPublic" placeholder="Public" />
      <label for="isPublic">Make Public</label>
      <button>Create New Cratelist</button> */}
    </div>
  );
};

export default NewCratelist;
