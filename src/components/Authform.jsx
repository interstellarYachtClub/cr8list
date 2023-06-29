import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth, googleProvider, db } from '../auth/firebaseauth';
import { getDocs, collection } from 'firebase/firestore';



export const Authform = () => {
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  //email/pass
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, passwd);
    } catch (err) {
      console.error(err);
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
  const signOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  //console.log(auth?.currentUser.email);
  //console.log(auth?.currentUser.photoURL);

  const [playlists, setPlaylists] = useState([]);
  const playlistsCollectionRef = collection(db, "Playlists/marcfifelibrary/crate");

  useEffect(() => {
    const getPlaylists = async () => {
      //data
      //setstate
      try {
      const data = await getDocs(playlistsCollectionRef);
      const filtereddata = data.docs.map((doc) => ({
        ...doc.data(), id:doc.id,
      }));

      console.log(filtereddata);
      setPlaylists(filtereddata);
      } catch (err) {
        console.error(err);
      }
    };
    getPlaylists();
  }, []);

  return (
    <div>
      <div>
        //email signin
      </div>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        onChange={(e) => setPasswd(e.target.value)}
      />
      <button onClick={signIn}>sign in</button>
      <div>
        <div>//google signin</div>
        <button onClick={signIntoGoogle}>sign into google</button>
      </div>
      <div>
        <div>//logout</div>
        <button onClick={signOut}>sign out</button>
      </div>

      <div>
        {playlists.map((playlist) => (
          <div key="playlistInfo">
            <div>
            {playlist.name}
            </div>
            <div>
              <p>user: {playlist.ownerName}</p>
              </div>
              <ul>
              {playlist.tracks.map((track) => (
                console.log(playlist.tracks.docs)
                  
              ))}
              </ul>
              </div>
        ))}
      </div>
    </div>
  );
};

export default Authform;
