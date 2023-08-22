import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import svgPlus from '../images/icons/plus-svgrepo-com.svg';
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
} from 'firebase/firestore';
import { db } from '../auth/firebaseauth';
import { AuthContext } from '../context/AuthContext';
import TrackTable from '../components/TrackTable';

const EditCratelist = (props) => {
  const { crateid } = useParams();
  const [crateList, setCrateList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [initialList, setInitialList] = useState({});

  const handleAddTrackToPlaylist = (track) => {
    console.log('track:', track);
    console.log(crateList);
    // You can perform any actions with the buttonId here
    const addedTrack = [
      ...crateList.tracks,
      {
        id: track.id,
        name: track.data().name,
        artist: track.data().artist,
      },
    ]; // Add the new entry (e.g., 4) to array1
    setCrateList({
      ...crateList, // Copy the existing state
      tracks: addedTrack, // Update the array1 property with the new array
    });
  };

  useEffect(() => {
    //getplaylist
    const getCrateTracks = async () => {
      console.log('...getting playlist');
      //data
      //setstate
      try {
        const docRef = doc(
          db,
          `${AuthContext._currentValue.currentUser.uid}/crates/children`,
          crateid
        );
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          //console.log('Document data:', docSnap.data());
          setCrateList(docSnap.data());
          setInitialList(docSnap.data());
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

    //getlibrary
    const getTracks = async () => {
      //data
      //setstate
      try {
        const queryAllTracks = await getDocs(
          collection(
            db,
            `${AuthContext._currentValue.currentUser.uid}/tracks/children`
          )
        );
        let collectionTracks = [];
        queryAllTracks.forEach((track) => {
          collectionTracks.push(track);
        });
        setTracks(collectionTracks);
      } catch (err) {
        console.error(err);
      }
    };
    getTracks();
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
        <h2>Track Library</h2>
        <ul className="flex flex-col">
          {tracks.map((track) => (
            <li className="flex flex-row justify-between py-2 items-center">
              <div>
                <img src={track.data().dzCover} />
              </div>
              <div className="flex flex-col text-start">
                <div>{track.data().name}</div>
                <div>{track.data().artist}</div>
              </div>
              <button
                id={track.id}
                onClick={() => handleAddTrackToPlaylist(track)}
              >
                <img className="w-8 h-8" src={svgPlus} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h2>
        {crateList.name} (editmode) -{' '}
        <strong>
          {crateList === initialList ? 'no changes' : 'changes unsaved'}
        </strong>
      </h2>
      {crateList.tracks.map((track) => (
        <p>
          {track.name}
          {' - '}
          {track.artist}
        </p>
      ))}

      <h2>Track Library</h2>
      <ul className="flex flex-col">
        {tracks.map((track) => (
          <li className="flex flex-row justify-between py-2 items-center">
            <div>
              <img src={track.data().dzCover} />
            </div>
            <div className="flex flex-col text-start">
              <div>{track.data().name}</div>
              <div>{track.data().artist}</div>
            </div>
            <button
              id={track.id}
              onClick={() => handleAddTrackToPlaylist(track)}
            >
              <img className="w-8 h-8" src={svgPlus} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditCratelist;
