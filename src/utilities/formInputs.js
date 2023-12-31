export const newUserForm = [
  {
    id: 'username',
    label: 'Username',
    type: 'text',
    placeholder: 'New user',
    showfield: true,
  },
  {
    id: 'email',
    label: 'Email',
    type: 'mail',
    placeholder: 'youremail@email.com',
    showfield: true,
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    showfield: true,
  },
  {
    id: 'theme',
    label: 'Theme choice',
    type: 'text',
    placeholder: 'default',
    showfield: false,
  },
  {
    id: 'signupdate',
    label: 'Date Signedup',
    showfield: false,
    type: 'date',
  },
];
export const newCrateForm = [
  {
    id: 'collectionType',
    label: 'Type',
    type: 'text',
    placeholder: 'Crate',
    showfield: false,
  },
  {
    id: 'listId',
    label: 'List ID',
    type: 'text',
    showfield: false,
  },
  {
    id: 'listName',
    label: 'Cratelist Name',
    type: 'text',
    placeholder: 'My new cratelist',
    showfield: true,
  },
  {
    id: 'isPublic',
    label: 'Public',
    type: 'checkbox',
    showfield: true,
  },
  {
    id: 'created',
    label: 'Date Created',
    type: 'date',
    placeholder: '',
    showfield: false,
  },
  {
    id: 'modified',
    label: 'Date Modified',
    type: 'date',
    placeholder: '',
    showfield: false,
  },
  {
    id: 'tracklist',
    label: 'Tracklisting',
    type: 'array',
    placeholder: '',
    showfield: false,
  },
];

export const newTrackSearch = [
  // {
  //   id: 'tracksearch',
  //   label: 'Track Search',
  //   type: 'text',
  //   placeholder: "Track and/or Artist or separated by '&&' (ampersand)",
  //   showfield: true,
  // },
  {
    id: 'tracksearch',
    label: 'Track Name',
    type: 'text',
    placeholder: 'Enter a track name...',
    showfield: true,
  },
  {
    id: 'artistsearch',
    label: 'Artist Name',
    type: 'text',
    placeholder: 'Enter an artist name...',
    showfield: true,
  },
  {
    id: 'extendedmixdefault',
    label: 'Check for Extended Mix by default',
    type: 'checkbox',
    showfield: true,
  },
];

export const manualTrackForm = [
  {
    id: 'trackId',
    label: 'Track ID',
    type: 'text',
    placeholder: '',
    showfield: false,
  },
  {
    id: 'name',
    label: 'Track',
    type: 'text',
    placeholder: 'Track Name',
    showfield: true,
    required: true,
  },
  {
    id: 'artist',
    label: 'Artist',
    type: 'text',
    placeholder: 'Artist Name',
    showfield: true,
    required: true,
  },
  {
    id: 'isIdId',
    label: 'WIP / ID-ID',
    type: 'checkbox',
    showfield: true,
    required: false,
  },
  {
    id: 'added',
    label: 'Date Added',
    type: 'date',
    showfield: false,
  },
  {
    id: 'modified',
    label: 'Date Modified',
    type: 'date',
    showfield: false,
  },
  {
    id: 'playlisted',
    label: 'Playlisted',
    type: 'checkbox',
    showfield: false,
    required: false,
  },
  {
    id: 'release',
    label: 'Release',
    type: 'date',
    required: false,
    showfield: true,
  },
  {
    id: 'bpm',
    label: 'BPM',
    type: 'number',
    placeholder: '128',
    required: false,
    showfield: true,
  },
  {
    id: 'tags',
    label: 'Tags',
    type: 'text',
    placeholder: '#deep #vocals #opener',
    required: false,
    showfield: true,
  },
  {
    id: 'time',
    label: 'Time',
    type: 'text',
    placeholder: 'minutes:seconds',
    required: false,
    showfield: true,
  },
  {
    id: 'peakloudness',
    label: 'Peak Loudness',
    type: 'number',
    placeholder: 'Peak Loudness (dB)',
    required: false,
    showfield: false,
  },
  {
    id: 'avgloudness',
    label: 'Average Loudness',
    type: 'number',
    placeholder: 'Average Loundess (dB)',
    required: false,
    showfield: false,
  },
];

export const trackKeys = [
  {
    id: '1',
    camelot: '1A',
    long: 'G-Sharp minor',
    short: 'G#m',
    openkey: '6m',
  },
  {
    id: '2',
    camelot: '2A',
    long: 'D-Sharp minor',
    short: 'D#m',
    openkey: '7m',
  },
  {
    id: '3',
    camelot: '3A',
    long: 'B-Flat minor',
    short: 'Bbm',
    openkey: '8m',
  },
  {
    id: '4',
    camelot: '4A',
    long: 'F minor',
    short: 'Fm',
    openkey: '9m',
  },
  {
    id: '5',
    camelot: '5A',
    long: 'C minor',
    short: 'Cm',
    openkey: '10m',
  },
  {
    id: '6',
    camelot: '6A',
    long: 'G minor',
    short: 'Gm',
    openkey: '11m',
  },
  {
    id: '7',
    camelot: '7A',
    long: 'D minor',
    short: 'Dm',
    openkey: '12m',
  },
  {
    id: '8',
    camelot: '8A',
    long: 'A minor',
    short: 'Am',
    openkey: '1m',
  },
  {
    id: '9',
    camelot: '9A',
    long: 'E minor',
    short: 'Em',
    openkey: '2m',
  },
  {
    id: '10',
    camelot: '10A',
    long: 'B minor',
    short: 'Bm',
    openkey: '3m',
  },
  {
    id: '11',
    camelot: '11A',
    long: 'F-Sharp minor',
    short: 'F#m',
    openkey: '4m',
  },
  {
    id: '12',
    camelot: '12A',
    long: 'C-Sharp minor',
    short: 'C#m',
    openkey: '5m',
  },
  {
    id: '13',
    camelot: '1B',
    long: 'B Major',
    short: 'B',
    openkey: '6D',
  },
  {
    id: '14',
    camelot: '2B',
    long: 'F-Sharp Major',
    short: 'F#',
    openkey: '7D',
  },
  {
    id: '15',
    camelot: '3B',
    long: 'D-Flat Major',
    short: 'Db',
    openkey: '8D',
  },
  {
    id: '16',
    camelot: '4B',
    long: 'A-Flat Major',
    short: 'Ab',
    openkey: '9D',
  },
  {
    id: '17',
    camelot: '5B',
    long: 'E-Flat Major',
    short: 'Eb',
    openkey: '10D',
  },
  {
    id: '18',
    camelot: '6B',
    long: 'B-Flat Major',
    short: 'Bb',
    openkey: '11D',
  },
  {
    id: '19',
    camelot: '7B',
    long: 'F Major',
    short: 'F',
    openkey: '12D',
  },
  {
    id: '20',
    camelot: '8B',
    long: 'C Major',
    short: 'C',
    openkey: '1D',
  },
  {
    id: '21',
    camelot: '9B',
    long: 'G Major',
    short: 'G',
    openkey: '2D',
  },
  {
    id: '22',
    camelot: '10B',
    long: 'D Major',
    short: 'D',
    openkey: '3D',
  },
  {
    id: '23',
    camelot: '11B',
    long: 'A Major',
    short: 'A',
    openkey: '4D',
  },
  {
    id: '24',
    camelot: '12B',
    long: 'E Major',
    short: 'E',
    openkey: '5D',
  },
];
