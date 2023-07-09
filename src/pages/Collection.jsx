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
import Header from '../components/Header';
const Collection = () => {
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
  return (
    <div>
      <main>
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
      </main>
    </div>
  );
};

export default Collection;
