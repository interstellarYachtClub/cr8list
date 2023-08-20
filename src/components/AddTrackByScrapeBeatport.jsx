import { useState } from 'react';
import { newTrackSearch } from '../utilities/formInputs';
//import { addTrackFromDeezer } from '../utilities/reactFunctions';
import axios from 'axios';
import { getTrackTime, getBeatportArtists } from '../utilities/functions';
import svgPlus from '../images/icons/plus-svgrepo-com.svg';

const AddTrackByScrapeBeatport = () => {
  const [search, setSearch] = useState({});
  const [resultBody, setResultBody] = useState(null);

  const handleNewSearchQ = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setSearch({ ...search, [id]: value });
  };

  const scrapeBeatportByTrackArtist = async (searchq) => {
    ///api/beatport/scrape/track/:track/artist/:artist
    const apiurl = `http://localhost:8080/api/beatport/scrape/track/${searchq.tracksearch}/artist/${searchq.artistsearch}`;
    console.log(apiurl);

    try {
      const response = await axios.get(apiurl);
      console.log(response.data);
      setResultBody(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewSearch = async () => {
    if (search.tracksearch && search.artistsearch) {
      console.log('both!');
      scrapeBeatportByTrackArtist(search);
    } else if (search.tracksearch && !search.artistsearch) {
      console.log('trackonly');
    } else if (!search.tracksearch && search.artistsearch) {
      console.log('artistonly');
    } else {
      console.log('nosearch');
    }
  };

  const handleAddResult = (thisresult) => {
    // addTrackFromDeezer(thisresult);
    console.log(thisresult);
  };

  return (
    <div className="newSearchForm flex flex-col justify-start accent-[#FF2700] backdrop-blur-sm backdrop-opacity-5 bg-white/10">
      {newTrackSearch.map((input) => {
        if (input.showfield) {
          return (
            <div className={input.id} key={input.id}>
              <label>{input.label}</label>
              <input
                className="rounded m-2 text-center focus:animate-pulse border-b-2 border-white/[0] focus:outline-none focus:border-b-2 focus:border-[#FF2700]"
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
        {console.log(resultBody)}
        {resultBody !== null && resultBody.status === 'success' ? (
          <div>
            <details>
              <summary>
                <text className="text-3xl mb-2 mt-2">//Results</text>
              </summary>
              <div className="flex flex-col space-y-4 max-w-full pr-16">
                <div className="flex flex-row items-center justify-between">
                  <div>Cover</div>
                  <div>Track</div>
                  <div>Artist</div>
                  <div>Time</div>
                  <div>Bpm</div>
                  <div>Key</div>
                  <div>Add</div>
                </div>
                {resultBody.data.tracks.data.map((track) => {
                  {
                    console.log(track);
                  }
                  return (
                    <div className="flex flex-row items-center justify-between">
                      <div>
                        <img
                          className="w-8 h-8"
                          src={track.release.release_image_uri}
                        />
                      </div>
                      <div>{track.track_name}</div>
                      <div>{getBeatportArtists(track.artists)}</div>
                      <div>{getTrackTime(track.length, 'ms')}</div>
                      <div>{track.bpm}</div>
                      <div>{track.key_name}</div>
                      <div>
                        <img className="w-8 h-8" src={svgPlus} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </details>
          </div>
        ) : (
          <div>Make a search</div>
        )}
      </div>
    </div>
  );
};

export default AddTrackByScrapeBeatport;
