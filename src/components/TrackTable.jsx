const TrackTable = ({ tracks }) => {
  return (
    <table className="track-table table-auto border-blue-950 border">
      <thead className="border-b border-blue-950">
        <tr className="bg-blue-950/[.05] flex flex-row">
          <th className="basis-1/12 text-center">#</th>
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
        {tracks.map((track, index) => {
          return (
            <tr className="odd:bg-white/[.05] even:bg-white/[.1] flex flex-row hover:bg-white/[.5] hover:cursor-pointer">
              <td className="basis-1/12 text-center sm:basis-1/12">
                {index + 1}
              </td>
              <td className="basis-6/12 truncate sm:basis-4/12">
                {track.name}
              </td>
              <td className="artist-col basis-5/12 truncate sm:basis-4/12">
                {track.artist}
              </td>
              <td className="bpm-col hidden sm:block sm:basis-1/12 text-center">
                {track.bpm}
              </td>
              <td className="bpm-col hidden sm:block sm:basis-2/12 text-center">
                {track.key}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TrackTable;
