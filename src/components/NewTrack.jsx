import { useState } from 'react';
import { manualTrackForm } from '../utilities/formInputs';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../auth/firebaseauth';
import { AuthContext } from '../context/AuthContext';

const NewTrack = () => {
  const [trackData, setTrackData] = useState({});

  const handleTrackInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setTrackData({ ...trackData, [id]: value });
  };
  console.log(trackData);

  const handleAddTrack = async () => {
    const docRef = await addDoc(
      collection(
        db,
        `${AuthContext._currentValue.currentUser.uid}/tracks/children/`
      ),
      {
        name: trackData.name,
        artist: trackData.artist,
        addedToCollection: new Date(),
        isIdId: trackData.isIdId === 'on' ? true : false,
        release: trackData.release,
        bpm: trackData.bpm,
        time: trackData.time,
        key: trackData.key,
      }
    );
  };

  return (
    <div className="newTrackForm accent-blue-950">
      {manualTrackForm.map((input) => {
        if (input.showfield) {
          return (
            <div className={input.id} key={input.id}>
              <label>{input.label}</label>
              <input
                className="rounded m-2 text-center focus:animate-pulse border-b-2 border-white/[0] focus:outline-none focus:border-b-2 focus:border-blue-950"
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                onChange={handleTrackInput}
              />
            </div>
          );
        }
      })}
      <button onClick={handleAddTrack}>Add Track</button>
    </div>
  );
};

export default NewTrack;
