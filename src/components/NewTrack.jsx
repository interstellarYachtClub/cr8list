import { useState } from 'react';
import { manualTrackForm } from '../utilities/formInputs';
import { trackKeys } from '../utilities/formInputs';
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

  const handleKeySelect = (e) => {
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
        key: trackData.key_select,
      }
    );
  };

  return (
    <div className="newTrackForm accent-blue-950 backdrop-blur-sm backdrop-opacity-5 bg-white/10 p-8 rounded-lg">
      {manualTrackForm.map((input) => {
        if (input.showfield) {
          return (
            <div className={input.id + ' flex justify-between'} key={input.id}>
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
      <div className="flex justify-between accent-blue-950">
        <label for="key_select">Key</label>
        <select
          className="accent-blue-950 rounded m-2 text-center focus:animate-pulse border-b-2 border-white/[0] focus:outline-none focus:border-b-2 focus:border-blue-950"
          name="key_select"
          id="key_select"
          onChange={handleKeySelect}
        >
          <option value="">select the key for this track</option>
          {trackKeys.map((key) => {
            return (
              <option
                id={'keyid' + key.id}
                value={key.short + ' / ' + key.openkey}
              >
                {key.camelot} / {key.long} / {key.openkey}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <button onClick={handleAddTrack}>Add Track</button>
      </div>
    </div>
  );
};

export default NewTrack;
