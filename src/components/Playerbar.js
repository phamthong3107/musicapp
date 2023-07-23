import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';

export default function Playerbar() {
  const {song, handleSetsong} = useContext(Songs)

  const handleClickNext = () => {
  }
  const handleClickPre = () => {
  }
  return (
    <div className='player-bar'>
        <AudioPlayer 
        src={song} 
       />
        
    </div>
    
  )
}
