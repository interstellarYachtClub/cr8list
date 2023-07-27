import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth, googleProvider, db } from '../auth/firebaseauth';
import {
  getDocs,
  collection,
  addDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';
//import NewCratelist from './NewCratelist';

export const Authform = () => {
  //login states
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  //newlist states
  const [newCratelistName, setNewCratelistName] = useState('');
  const [newCratelistPublic, setNewCratelistPublic] = useState(false);
  //manual track add states
  const [newTrackName, setNewTrackName] = useState('');
  const [newTrackArtist, setNewTrackArtist] = useState('');
  const [newTrackIsId, setNewTrackIsId] = useState(false);

  //email/pass
  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, passwd);
    } catch (err) {
      console.error(err);
    }
  };
  const signInAccount = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, passwd).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
        }
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ' : ' + errorMessage);
    }
  };

  //google
  const signIntoGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  //logout
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  //console.log(auth?.currentUser.email);
  //console.log(auth?.currentUser.photoURL);
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const playlistsCollectionRef = collection(
    db,
    '/marcfifemusic/9LaUV6CjV599KmbDIDzT/crates'
  );
  const tracksCollectionRef = collection(
    db,
    '/marcfifemusic/9LaUV6CjV599KmbDIDzT/tracks'
  );
  //const trackRef = db.collection('marcfifemusic', '9LaUV6CjV599KmbDIDzT', 'crates').doc(trackDocId);
  //8IVNdm3psxUSQGsZIr3j

  useEffect(() => {
    const getPlaylists = async () => {
      //data
      //setstate
      try {
        const data = await getDocs(playlistsCollectionRef);
        const filtereddata = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setPlaylists(filtereddata);
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
  console.log(playlists);
  console.log(tracks);

  const onSubmitCratelist = async () => {
    try {
      await addDoc(playlistsCollectionRef, {
        name: newCratelistName,
        isPublic: newCratelistPublic,
        dateCreated: '',
        tracks: [],
      });
    } catch (err) {
      console.error(err);
    }
  };
  const onSubmitManualTrack = async () => {
    try {
      await addDoc(playlistsCollectionRef, {
        name: newTrackName,
        artist: newTrackArtist,
        isIdId: newTrackIsId,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div class="flex flex-col justify-left">
      <div>//create account _ sign in</div>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPasswd(e.target.value)}
      />
      <button onClick={createAccount}>create account</button>
      or <button onClick={signInAccount}>sign in</button>
      <div>
        <div>//google signin</div>
        <button onClick={signIntoGoogle}>sign into google</button>
      </div>
      <div>
        <div>//logout</div>
        <button onClick={logOut}>sign out</button>
      </div>
      <div class="flex flex-col justify-left">
        <h2>Create a new cratelist</h2>
        <input
          type="text"
          id="cratelistName"
          required
          placeholder="Cratelist Name"
          onChange={(e) => setNewCratelistName(e.target.value)}
        />
        <input
          type="checkbox"
          id="isPublic"
          placeholder="Public"
          checked={newCratelistPublic}
          onChange={(e) => setNewCratelistPublic(e.target.checked)}
        />
        <label for="isPublic">Make Public</label>
        <button onClick={onSubmitCratelist}>Create New Cratelist</button>
      </div>
      <div>
        <h2>Crate Library:</h2>
        {playlists.map((playlist) => (
          <div class="flex justify-center" key="playlistLibrary">
            <div>
              <p>
                {playlist.name} {playlist.isPublic ? '(public)' : '(private)'}
              </p>
            </div>

            {/* <ul>
              {playlist.tracks.map((track) => (
                <p>{track.id}</p>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
      <div class="flex flex-col justify-left">
        <h2>Manual Add Track</h2>
        <input
          type="text"
          id="manTrackName"
          required
          placeholder="Track"
          onChange={(e) => setNewTrackName(e.target.value)}
        />
        <input
          type="text"
          id="manTrackArtist"
          required
          placeholder="Artist"
          onChange={(e) => setNewTrackArtist(e.target.value)}
        />
        <input
          type="checkbox"
          id="isId"
          placeholder="Public"
          checked={newTrackIsId}
          onChange={(e) => setNewCratelistPublic(e.target.checked)}
        />
        <label for="isPublic">WIP/ID-ID</label>
        <button onClick={onSubmitManualTrack}>Create New Track</button>
      </div>
      <h2>Track Library</h2>
      <div class="px-8">
        {tracks.map((track) => (
          <div id="trackLibrary" key="trackLibrary">
            <div>
              <span>
                {track.name} - {track.artist}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
