import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth, googleProvider, db } from '../auth/firebaseauth';
import { getDocs, collection, doc } from 'firebase/firestore';



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
  const playlistsCollectionRef = collection(db, "/marcfifemusic/9LaUV6CjV599KmbDIDzT/crates");
  //const subdocRef = db.collection('marcfifemusic', '9LaUV6CjV599KmbDIDzT', 'crates').doc('pakjlOnRD38oyBX5CQ7b');

  useEffect(() => {
    const getPlaylists = async () => {
      //data
      //setstate
      try {
      const data = await getDocs(playlistsCollectionRef);
      const filtereddata = data.docs.map((doc) => ({
        ...doc.data(), id:doc.id,
      }));

      setPlaylists(filtereddata);
      } catch (err) {
        console.error(err);
      }
    };
    getPlaylists();

    playlists.forEach(playlist => {
      console.log(playlist.id);
      const subdocRef = doc.collection(db, 'marcfifemusic', '9LaUV6CjV599KmbDIDzT', 'crates').doc('pakjlOnRD38oyBX5CQ7b');
      //
      // const subdocRef = doc(collection(db, 'marcfifemusic', '9LaUV6CjV599KmbDIDzT', 'crates'), 'pakjlOnRD38oyBX5CQ7b');
      
      let docData = '';
      subdocRef.get().then(function(doc) {
        if (doc.exists) {
          docData = doc.data();
        }
        console.log('data');
      });

      // const getTracks = async () => {
      //   //data
      //   //setstate
      //   try {
      //   const data = await getDocs(subdocRef);
      //   const filtereddata = data.docs.map((doc) => ({
      //     ...doc.data(), id:doc.id,
      //   }));
  
      //   setTracks(filtereddata);
      //   } catch (err) {
      //     console.error(err);
      //   }
      // };
      // getTracks();
    });

    
  }, []);
  console.log(playlists);
  console.log(tracks);
  

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
        <button onClick={logOut}>sign out</button>
      </div>

      <div>
        {playlists.map((playlist) => (
          <div key="playlistInfo">
            <div>
              <h1>
            {playlist.name}
            </h1>
            </div>
              <ul>
              {playlist.tracks.map((track) => (
                <p>{track.id}</p>
                  
              ))}
              </ul>
              </div>
        ))}
      </div>
    </div>
  );
};

export default Authform;
