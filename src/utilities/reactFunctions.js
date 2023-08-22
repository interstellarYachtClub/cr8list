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
      bpm: 0,
      key: '',
      time: track.duration,
      isIdId: false,
      dzTime: track.duration,
      dzTrackId: track.id,
      dzArtistId: track.artist.id,
      dzCover: track.album.cover,
      dzReleaseId: track.album.id,
      dzReleaseName: track.album.title,
      dzArtist: track.artist.name,
      dzTrackName: track.title,
      src: 'deezer',
      type: 'track',
      format: '',
      samplerate: '',
      bitrate: '',
      bpTrackId: '',
      bpTrackWaveform: '',
      bpTrackName: '',
      bpMixName: '',
      bpKeyName: '',
      bpReleaseDate: '',
      bpReleaseId: '',
      bpReleaseImg: '',
      bpReleaseName: '',
      bpLength: 0,
    }
  );
};
