export const getTrackTime = (time, units) => {
  let seconds = 0;
  let minutes = 0;
  if (units === 's') {
    seconds = time % 60;
    minutes = Math.floor(time / 60);
    return (
      <div>
        {minutes}:{seconds}
      </div>
    );
  } else if (units === 'ms') {
    seconds = Math.floor(time / 1000) % 60;
    minutes = Math.floor(time / 1000 / 60);
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return (
      <div>
        {minutes}:{seconds}
      </div>
    );
  } else {
    //not an option
  }
};

export const getAverageBpm = (tracks) => {
  let bpm = 0;
  let tracktotal = 0;
  let avgbpm = 0;
  tracks.map((track) => {
    tracktotal++;
    bpm = bpm + track.bpm;
    avgbpm = (bpm / tracktotal).toFixed(3);
  });
  return avgbpm;
};

export const getTotalTime = (times, units) => {
  //need to write
};

export const getBeatportArtists = (artists) => {
  if (artists.length > 1) {
    let artistslist = [];
    artists.map((artist) => {
      artistslist.push(artist.artist_name);
    });
    return artistslist;
  } else {
    return artists[0].artist_name;
  }
};
