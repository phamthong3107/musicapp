import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';

export default function Playerbar() {
  const {Artist, song, handleSetsong} = useContext(Songs)
  const songNext = song + 1
  const handleClickNext = () => {
    handleSetsong(songNext)
  }
  const handleClickPre = () => {
    handleSetsong(song - 1)
  }
  return (
    <div className='player-bar flex'>
      <div className="song_now flex">
        <img src={Artist.songs[song].img} className='w-[70px] h-[70px] m-[10px]' />
        <div className="song_now-content flex-col">
          <h2 className='font-bold'>{Artist.songs[song].nameSong}</h2>
          <span className='text-[14px]'>{Artist.nameAuthor}</span>
        </div>
        <img src="./img/wave.gif" className='w-[30px] h-[30px] mt-[30px] mr-3' />
      </div>
      <AudioPlayer 
        src={Artist.songs[song].nameFile} 
        showSkipControls={true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
      />
      <div className="icon-list bg-white">
        <img src="./img/list.gif" className='w-[50px] h-[50px] m-5' />
      </div>
    </div>
    
  )
}
