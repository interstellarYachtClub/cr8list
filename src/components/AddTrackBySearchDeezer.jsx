import { useState } from 'react';
import { newTrackSearch } from '../utilities/formInputs';
import { addTrackFromDeezer } from '../utilities/reactFunctions';
import axios from 'axios';
import { getTrackTime } from '../utilities/functions';
import svgPlus from '../images/icons/plus-svgrepo-com.svg';

const AddTrackBySearchDeezer = () => {
  const [search, setSearch] = useState({});
  const [results, setResults] = useState(null);

  const handleNewSearchQ = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setSearch({ ...search, [id]: value });
  };

  const searchDeezerByTrackArtist = async (searchq) => {
    //const apiurl = `https://api.deezer.com/search?q=artist:"${searchq.artistsearch}" track:"${searchq.tracksearch}"&apikey=${deezerconfig.apikey}`;
    const apiurl = `http://localhost:8080/api/deezer/search/track/${searchq.tracksearch}/artist/${searchq.artistsearch}`;
    console.log(apiurl);

    try {
      const response = await axios.get(apiurl);
      console.log(response.data);
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
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

  const handleAddResult = (thisresult) => {
    addTrackFromDeezer(thisresult);
  };

  return (
    <div className="newSearchForm flex flex-col justify-start accent-blue-950 backdrop-blur-sm backdrop-opacity-5 bg-white/10">
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
      <div>
        {results ? (
          <div>
            <h2>//Results</h2>
            <div className="flex flex-col space-y-4 max-w-full">
              {results.data.map((result) => {
                {
                  console.log(result);
                }
                return (
                  <div className="flex flex-row items-center justify-between text-center">
                    <div>
                      <img className="w-16 h-16" src={result.album.cover} />
                    </div>
                    <div>
                      <div>{result.title}</div>
                      <div>{result.artist.name}</div>
                    </div>
                    <div>{getTrackTime(result.duration, 'deezer')}</div>
                    <div>
                      <button
                        className="p-0"
                        onClick={() => handleAddResult(result)}
                      >
                        <img className="w-8 h-8" src={svgPlus} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          //things
          <></>
        )}
      </div>
    </div>
  );
};

export default AddTrackBySearchDeezer;
