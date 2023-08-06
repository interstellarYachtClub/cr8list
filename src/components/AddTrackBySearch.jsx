import { useState } from 'react';
import { newTrackSearch } from '../utilities/formInputs';
import deezerconfig from '../config/deezerconfig';
import axios from 'axios';

const AddTrackBySearch = () => {
  const [search, setSearch] = useState({});

  const handleNewSearchQ = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setSearch({ ...search, [id]: value });
  };

  const searchDeezerByTrackArtist = async (searchq) => {
    const apiurl = `https://api.deezer.com/search?q=artist:"${searchq.artistsearch}" track:"${searchq.tracksearch}"&apikey=${deezerconfig.apikey}`;
    console.log(apiurl);

    axios
      .get(apiurl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleNewSearch = async () => {
    if (search.tracksearch && search.artistsearch) {
      console.log('both!');
      searchDeezerByTrackArtist(search);
    } else if (search.tracksearch && !search.artistsearch) {
      console.log('trackonly');
    } else if (!search.tracksearch && search.artistsearch) {
      console.log('artistonly');
    } else {
      console.log('nosearch');
    }
  };

  return (
    <div className="newSearchForm flex flex-col justify-start accent-blue-950">
      {newTrackSearch.map((input) => {
        if (input.showfield) {
          return (
            <div className={input.id} key={input.id}>
              <label>{input.label}</label>
              <input
                className="rounded m-2 text-center focus:animate-pulse border-b-2 border-white/[0] focus:outline-none focus:border-b-2 focus:border-blue-950"
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                onChange={handleNewSearchQ}
              />
            </div>
          );
        }
      })}
      <button onClick={handleNewSearch}>Search</button>
    </div>
  );
};

export default AddTrackBySearch;
