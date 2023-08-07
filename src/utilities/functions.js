export const getTrackTime = (time, units) => {
  let seconds = 0;
  let minutes = 0;
  if (units == 's') {
    seconds = time % 60;
    minutes = Math.floor(time / 60);
  }
  return (
    <div>
      {minutes}:{seconds}
    </div>
  );
};
