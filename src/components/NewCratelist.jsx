import { useState } from 'react';
import { newCrateForm } from '../utilities/formInputs';

const NewCratelist = () => {
  const [crateData, setCrateData] = useState({});

  const handleNewCratelist = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setCrateData({ ...crateData, [id]: value });
  };
  console.log(crateData);

  return (
    <div className="newCratelistForm flex flex-col justify-start accent-blue-950">
      {newCrateForm.map((input) => {
        if (input.showfield) {
          return (
            <div className={input.id} key={input.id}>
              <label>{input.label}</label>
              <input
                className="rounded m-2 text-center focus:animate-pulse border-b-2 border-white/[0] focus:outline-none focus:border-b-2 focus:border-blue-950"
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                onChange={handleNewCratelist}
              />
            </div>
          );
        }
      })}
      <button>Make Cratelist</button>

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
