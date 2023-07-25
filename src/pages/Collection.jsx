import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth, googleProvider, db } from '../auth/firebaseauth';
import {
  getDoc,
  getDocs,
  collection,
  addDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';
import Header from '../components/Header';
import NewCratelist from '../components/NewCratelist';
import NewTrack from '../components/NewTrack';
import TrackTable from '../components/TrackTable';
const Collection = () => {
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  // const playlistsCollectionRef = doc(
  //   db,
  //   `/${AuthContext._currentValue.currentUser.email}${AuthContext._currentValue.currentUser.uid}/crates/children`
  // );
  const tracksCollectionRef = collection(
    db,
    '/marcfifemusic/9LaUV6CjV599KmbDIDzT/tracks'
  );

  //console.log(AuthContext._currentValue.currentUser);

  useEffect(() => {
    const getPlaylists = async () => {
      console.log('...getting playlist');
      //data
      //setstate
      try {
        const queryAllCrates = await getDocs(
          collection(
            db,
            `${AuthContext._currentValue.currentUser.email}${AuthContext._currentValue.currentUser.uid}/crates/children`
          )
        );
        let collectionCrates = [];
        queryAllCrates.forEach((crate) => {
          console.log(crate.id, '=>', crate.data());
          collectionCrates.push(crate);
        });
        setPlaylists(collectionCrates);

        // const docSnap = await getDoc(playlistsCollectionRef);
        // if (docSnap.exists()) {
        //   console.log('Document data:', docSnap.data());
        // } else {
        //   // docSnap.data() will be undefined in this case
        //   console.log('No such document!');
        // }

        /*
        const data = await getDocs(playlistsCollectionRef);
        const filtereddata = data.docs.map((doc) => ({
          ...doc.data(),
          name: doc.name,
        }));
        console.log(filtereddata);

        setPlaylists(filtereddata);
        */
      } catch (err) {
        console.error(err);
      }
    };
    getPlaylists();

    const getTracks = async () => {
      //data
      //setstate
      try {
        const data = await getDocs(tracksCollectionRef);
        const filtereddata = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setTracks(filtereddata);
      } catch (err) {
        console.error(err);
      }
    };
    getTracks();
  }, []);
  return (
    <div>
      <main>
        <div>
          <h2>Crate Library</h2>
          <div className="flex flex-col" key="playlistLibrary">
            {playlists.map((playlist) => (
              <div>
                <p>
                  {playlist.id} {playlist.isPublic ? '(public)' : '(private)'}
                </p>
              </div>
            ))}
          </div>
          <h2>//New Cratelist</h2>
          <NewCratelist />
        </div>
        <h2>Track Library</h2>
        <div className="flex flex-col" id="trackLibrary" key="trackLibrary">
          <TrackTable tracks={tracks} />
          {/* {tracks.map((track) => (
            <div>
              <span>
                {track.name} - {track.artist}
              </span>
            </div>
          ))} */}
        </div>
        <h2>//Add Track Manually</h2>
        <NewTrack />
      </main>
    </div>
  );
};

export default Collection;
