import { collection, addDoc } from 'firebase/firestore';
import { db } from '../auth/firebaseauth';
import { AuthContext } from '../context/AuthContext';

export const addTrackFromDeezer = async (track) => {
  const docRef = await addDoc(
    collection(
      db,
      `${AuthContext._currentValue.currentUser.uid}/tracks/children/`
    ),
    {
      name: track.title,
      artist: track.artist.name,
      addedToCollection: new Date(),
      isIdId: false,
      timeunit: 's',
      time: track.duration,
      deezertrackid: track.id,
      deezerartistid: track.artist.id,
      deezercover: track.album.cover,
      addsrc: 'deezer',
    }
  );
};
