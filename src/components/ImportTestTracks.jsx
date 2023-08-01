import { useState } from 'react';
import { manualTrackForm } from '../utilities/formInputs';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../auth/firebaseauth';
import { AuthContext } from '../context/AuthContext';
import { demoDb } from '../utilities/testTracks';

const ImportTestTracks = () => {
  //addTestTrack
  const addTestTrack = async (track) => {
    const docRef = await addDoc(
      collection(
        db,
        `${AuthContext._currentValue.currentUser.uid}/tracks/children/`
      ),
      {
        name: track.title,
        artist: track.artist,
        timems: track.time,
        addedToCollection: new Date(),
        isIdId: false,
        release: track.year,
        key: track.key,
        bpm: track.bpm,
        format: track.format,
        bitrate: track.bitrate,
        samplerate: track.samplerate,
      }
    );
  };
  const handleImportTestTracks = () => {
    demoDb.forEach((track) => {
      if (track.year && track.bitrate) {
        //call addTestTrack
        addTestTrack(track);
        setTimeout(() => {
          console.log('added: ' + track.title);
        }, 50);
      }
    });
  };
  return <button onClick={handleImportTestTracks}>Add ALL Test Tracks</button>;
};

export default ImportTestTracks;
