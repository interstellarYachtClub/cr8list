const TrackTable = ({ tracks }) => {
  return (
    <table className="track-table table-auto border-blue-950 border">
      <thead className="border-b border-blue-950">
        <tr className="bg-blue-950/[.05]">
          <th>Track</th>
          <th className="artist-col">Artist</th>
        </tr>
      </thead>
      <tbody className="rounded">
        {console.log(tracks)}
        {tracks.map((track) => {
          return (
            <tr className="odd:bg-white/[.05] even:bg-white/[.1]">
              <td>{track.name}</td>
              <td className="artist-col">{track.artist}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TrackTable;
