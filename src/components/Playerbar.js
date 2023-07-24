import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';

export default function Playerbar() {
  const {Artist, song, handleSetsong} = useContext(Songs)
  const handleClickNext = () => {
    handleSetsong(song + 1)
  }
  const handleClickPre = () => {
    handleSetsong(song - 1)
  }
  return (
    <div className='player-bar'>
        <AudioPlayer 
        src={Artist.songs[song].nameFile} 
        showSkipControls={true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
       />
        
    </div>
    
  )
}
