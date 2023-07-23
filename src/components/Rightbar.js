import React, { useContext, useState } from 'react'
import { Songs } from '../Context'

export default function Rightbar() {
    const {DataSongs, handlesetArtist} = useContext(Songs) 
    const [idArtist, setidArtist] = useState(0)
    const handleArtistNow = (idArtist) =>{
        setidArtist(idArtist)
        handlesetArtist(idArtist)
    }
  return (
    <div className="right-bar ml-[20px]">
            <h3 className="font-bold text-[18px] mt-[40px]">Recent Singers</h3>
            <div className="list-artist">
                {DataSongs.map((artist) => (
                <div className={`list-artist_item flex ${idArtist === artist.id && 'bg-white'}` }
                onClick={() => handleArtistNow(artist.id)}>
                    <img src={artist.avt} alt=""/>
                    <div className="list-artist_name flex-col">
                        <div className="list-artist-nameSong">{artist.nameAuthor}</div>
                        <div className="list-artist-nameUpdate">{artist.update}</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
  )
}
