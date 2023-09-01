import React, { useState, useEffect } from 'react';
import tableSort from 'table-sort-js/table-sort.js';
import { getAverageBpm } from '../utilities/functions';

const TrackTable = ({ tracks }) => {
  const [filterResults, setFilterResults] = useState({});
  const [filter, setFilter] = useState('');
  const [tracklist, setTracklist] = useState(tracks);
  useEffect(() => {
    tableSort('.track-table');
    setTracklist(tracks);
  }, [tracks]);

  const handleFilterData = (e) => {
    setFilterResults([]);
    const value = e.target.value;
    setFilter(value);

    const filteredTracks = tracks.filter((track) => {
      const lowerCase = value.toLowerCase();
      return (
        track.name.toLowerCase().includes(lowerCase) ||
        track.artist.toLowerCase().includes(lowerCase)
      );
    });
    setTracklist(filteredTracks);
    tableSort('.track-table');
  };

  return (
    <div>
      <div className="filterbysearch justify-start accent-[#FF0058] rounded-t backdrop-blur-sm backdrop-opacity-5 bg-white/10">
        <form className="w-full">
          <label for="filter-by-search"></label>
          <input
            className="rounded-t p-2 focus:animate-pulse border-white/[0] focus:outline-none focus:border-b focus:border-[#FF0058] w-full"
            placeholder="Filter tracks"
            type="search"
            id="filter-by-search"
            name="filter"
            onChange={handleFilterData}
          />
        </form>
      </div>
      <table className="track-table table-auto table-sort">
        <thead className="border-b border-[#FF0058]">
          <tr className="bg-blue-950/[.05] flex flex-row">
            <th className="basis-1/12 text-center">Thumb</th>
            <th className="basis-6/12 sm:basis-4/12">Track</th>
            <th className="artist-col basis-5/12 sm:basis-4/12">Artist</th>
            <th className="bpm-col hidden sm:block sm:basis-1/12 text-center">
              BPM
            </th>
            <th className="key-col hidden sm:block sm:basis-2/12 text-center">
              Key
            </th>
          </tr>
        </thead>
        <tbody className="rounded">
          {tracklist.length > 0
            ? tracklist.map((track, index) => {
                return (
                  <tr
                    id={track.id}
                    className="relative odd:bg-white/[.05] even:bg-white/[.1] flex flex-row justify-start hover:text-slate-50 hover:bg-white/[.25] hover:cursor-pointer items-center"
                  >
                    <td className="basis-1/12 albumartwork">
                      <div
                        style={{
                          backgroundImage: `url('${track.dzCover}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          alignItems: 'center',
                        }}
                      >
                        &nbsp;
                      </div>
                    </td>
                    <td className="basis-6/12 truncate sm:basis-4/12">
                      {track.name}
                    </td>
                    <td className="artist-col basis-5/12 truncate sm:basis-4/12">
                      {track.artist}
                    </td>
                    <td className="bpm-col hidden sm:block sm:basis-1/12 text-center">
                      {track.bpm > 0 ? track.bpm : ''}
                    </td>
                    <td className="bpm-col hidden sm:block sm:basis-2/12 text-center">
                      {track.key ? track.key : ''}
                    </td>
                  </tr>
                );
              })
            : '...No tracks found or filtered for...'}
        </tbody>
      </table>
      {tracklist.length > 0 ? (
        <div>
          Total tracks: {tracklist.length} | Average BPM:{' '}
          {getAverageBpm(tracklist)} | Average Track Time:
        </div>
      ) : (
        <div>Total tracks: 0</div>
      )}
    </div>
  );
};

export default TrackTable;
