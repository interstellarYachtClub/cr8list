import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, setDoc, collection, addDoc, getDoc } from 'firebase/firestore';
import { db } from '../auth/firebaseauth';
import { AuthContext } from '../context/AuthContext';

const EditCratelist = (props) => {
  const { crateid } = useParams();
  const [crateList, setCrateList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getCrateTracks = async () => {
      console.log('...getting playlist');
      //data
      //setstate
      try {
        const docRef = doc(
          db,
          `${AuthContext._currentValue.currentUser.email}${AuthContext._currentValue.currentUser.uid}/crates/children`,
          crateid
        );
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          //console.log('Document data:', docSnap.data());
          setCrateList(docSnap.data());
          setIsLoading(false);
        } else {
          // docSnap.data() will be undefined in this case
          console.log('No such document!');
        }
      } catch (err) {
        console.error(err);
      }
    };
    getCrateTracks();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>{crateList.name} (editmode)</h2>. . . L O A D I N G . . .
      </div>
    );
  }

  if (crateList.tracks.length === 0) {
    return (
      <div>
        <h2>This cratelist is empty {' : ('}</h2>
        <p>...so get digging. Add some tracks...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{crateList.name} (editmode)</h2>
      {crateList.tracks.map((track) => (
        <p>
          {track.name}
          {' - '}
          {track.artist}
        </p>
      ))}
    </div>
  );
};

export default EditCratelist;
