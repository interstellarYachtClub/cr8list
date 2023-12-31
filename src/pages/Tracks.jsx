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
import NewTrack from '../components/NewTrack';
import TrackTable from '../components/TrackTable';
import AddTrackBySearchDeezer from '../components/AddTrackBySearchDeezer';
import AddTrackByScrapeBeatport from '../components/AddTrackByScrapeBeatport';
import ImportTestTracks from '../components/ImportTestTracks';
const Tracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
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
          collectionTracks.push(track.data());
        });
        setTracks(collectionTracks);
      } catch (err) {
        console.error(err);
      }
    };
    getTracks();
  }, []);
  return (
    <>
      <h2>//Add Track by Scrape Beatport</h2>
      <AddTrackByScrapeBeatport />
      <h2>//Add Track by Search Deezer</h2>
      <AddTrackBySearchDeezer />
      <NewTrack />
      <div>
        <h2>//Tracks Import from json</h2>
        <ImportTestTracks />
      </div>
      <h2>Track Library</h2>
      <section className="flex flex-col" id="trackLibrary" key="trackLibrary">
        <TrackTable tracks={tracks} />
      </section>
    </>
  );
};

export default Tracks;
