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
import NewCratelist from '../components/NewCratelist';
import NewTrack from '../components/NewTrack';
import TrackTable from '../components/TrackTable';
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
          <h2>Crate Library</h2>
          <div className="flex flex-col" key="playlistLibrary">
            {playlists.map((playlist) => (
              <div>
                <p>
                  {playlist.name} {playlist.isPublic ? '(public)' : '(private)'}
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
