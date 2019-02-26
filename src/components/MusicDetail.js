import React from 'react';

const MusicDetail = (props) => {
  if(!props.songs){
    return <p>waiting for songs</p>
  }

  return (
    <div>
    <p>Chart Position: {props.songs+ 1}</p>
    <h3>Title: {props.songs['im:name'].label}</h3>
    <h4>Artist: {props.songs['im:artist'].label}</h4>
    <img src={props.songs['im:image'][2].label} alt=""/>
    <audio controls src={props.songs.link[1].attributes.href}>
    </audio>
    </div>
  )

}

export default MusicDetail;
