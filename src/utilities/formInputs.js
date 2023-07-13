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
  },
  {
    id: 'artist',
    label: 'Artist',
    type: 'text',
    placeholder: 'Artist Name',
    showfield: true,
  },
  {
    id: 'isIdId',
    label: 'WIP / ID-ID',
    type: 'checkbox',
    showfield: true,
  },
  {
    id: 'added',
    label: 'Date Added',
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
    id: 'collectionType',
    label: 'Type',
    type: 'text',
    placeholder: 'Track',
    showfield: false,
  },
];
