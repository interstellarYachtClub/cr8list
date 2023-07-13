import { useState } from 'react';
import { manualTrackForm } from '../utilities/formInputs';

const NewTrack = () => {
  const [trackData, setTrackData] = useState({});

  const handleNewTrack = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setTrackData({ ...trackData, [id]: value });
  };
  console.log(trackData);

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
                onChange={handleNewTrack}
              />
            </div>
          );
        }
      })}
      <button>Add Track</button>
    </div>
  );
};

export default NewTrack;
