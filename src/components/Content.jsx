import React, { useContext, useState } from 'react'
import { Songs } from '../Context'
export default function Content() {
    const { Artist, handleSetsong } = useContext(Songs)
    const [Nsong, setNsong] = useState(" ")
    const [ListSongH, setListSongH] = useState([])
    const [img, setimg] = useState("klipartz.com.png")
    const handlePlaySong = (Nsong) => {
        setNsong(Nsong)
        handleSetsong(Nsong)
        setListSongH(pre => [...pre,Artist.songs[Nsong]])   
        setimg(Artist.songs[Nsong].img)
    }
    const Song = Artist.songs[Nsong]
    let i = 0
    ListSongH.map((song) => {
        if(Song === song){
            i++
        }
        if(i >= 2){
            ListSongH.splice(ListSongH.length - 1,1)
        }
    })
    return (
    <div className="content">
            <div className="search-bar">
                <i className="fa-solid fa-magnifying-glass pr-2"></i>
                <input className="text-[12px] w-[90%]" placeholder="Start search here" type="text"/>
            </div>
            <div className="flex justify-center">
                <div className="top-music mr-8">
                <h2 className="text-[24px] mt-5 mb-5 font-bold">Top Song 2022</h2>
                    <div className="music-playing-img w-[250px] animate-[spin_20s_infinite_linear]">
                        <img src={img} className='w-[250px] h-[250px] object-cover rounded-full' alt=""/>
                    </div>
                </div>
                <div className="ml-5 w-[420px] song-history">
                    <h2 className='text-[24px] mt-5 mb-5 font-bold'>Song History</h2>
                    <div className="music-list-top flex-col">
                        {ListSongH.map((song) => (
                            <div className="top-song flex justify-between p-2">
                                <div className="top-song-left flex">
                                    <div className="top-song-rank mr-3">{ListSongH.indexOf(song)+1}</div>
                                    <div className="top-song-tile justify-center align-middle">
                                        <div className="top-song-name">{song.nameSong}</div>
                                    </div>
                                </div>
                                <div className="top-song-love"><i className="fa-solid fa-heart"></i></div>
                            </div>
                        ))}
                        </div>
                    </div>
            </div>
            
            <div className="topSongofSG">
                <h2 className="text-[20px] mt-5 mb-5 font-bold">Top song of singer</h2>
                <div className="recent-player w-full flex h-[220px]">
                    {Artist.songs.map((songs) => (
                        <div className="precent-player_item" onClick={() => handlePlaySong(songs.id)}>
                        <div className="precent-player_img">
                            <img src={songs.img} alt="" id='imgSongNow'/>
                        </div>
                        <div className="precent-player_name">
                            {songs.nameSong}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
  )
}
