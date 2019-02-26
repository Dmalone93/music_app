import React from 'react';

const MusicSelector = (props) => {
  const options = props.songs.map((song, index) => {
    return <option value={index} key={index}>{index + 1} - {song['im:name'].label}</option>
  });


// this is selecting the songs index number/
  function handleChange(event){
    props.onSongSelected(event.target.value)
  }

  return (
    <select id="music-selector" defaultValue="default" onChange={handleChange}>
    <option value="default">See the current top 20 hits...</option>
    {options}
    </select>
  );
}

export default MusicSelector;
