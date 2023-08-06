import { useState } from 'react';
import { manualTrackForm } from '../utilities/formInputs';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../auth/firebaseauth';
import { AuthContext } from '../context/AuthContext';
import { demoDb } from '../utilities/testTracks';

const ImportTestTracks = () => {
  //addTestTrack
  const addTestTrack = async (track) => {
    let thistrack = {
      name: track.title,
      artist: track.artist,
      addedToCollection: new Date(),
      isIdId: false,
    };
    if (track.time) {
      thistrack.timems = track.time;
    }
    if (track.year) {
      thistrack.release = track.year;
    }
    if (track.bpm) {
      thistrack.bpm = track.bpm;
    }
    if (track.key) {
      thistrack.key = track.key;
    }
    if (track.format) {
      thistrack.format = track.format;
    }
    const docRef = await addDoc(
      collection(
        db,
        `${AuthContext._currentValue.currentUser.uid}/tracks/children/`
      ),
      thistrack
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
