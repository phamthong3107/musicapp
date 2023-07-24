import React, { useContext, useState } from 'react'
import { Songs } from '../Context'

export default function Content() {
    const { Artist, handleSetsong } = useContext(Songs)
    const [Nsong, setNsong] = useState(" ")
    const handlePlaySong = (Nsong) => {
        setNsong(Nsong)
        handleSetsong(Nsong)
    }
    return (
    <div className="content">
            <div className="search-bar">
                <i className="fa-solid fa-magnifying-glass pr-2"></i>
                <input className="text-[12px] w-[90%]" placeholder="Start search here" type="text"/>
            </div>
            <h2 className="text-[24px] mt-5 mb-5 font-bold">Top Song 2022</h2>
            <div className="top-music flex">
                <div className="music-playing-img rounded-full animate-[spin_10s_infinite_linear]">
                    <img src="klipartz.com.png" alt="" className='rounded-full'/>
                </div>
                <div className="music-list-top flex-col ml-5 w-[420px]">
                    <div className="top-song flex justify-between p-2">
                    <div className="top-song-left flex">
                        <div className="top-song-rank">1</div>
                        <div className="top-song-love"><i className="fa-regular fa-heart"></i></div>
                        <div className="top-song-tile flex-col">
                            <div className="top-song-name">Anh sai rồi</div>
                            <div className="top-song-artist">Sơn Tùng</div>
                        </div>
                    </div>
                    <div className="top-song-time">
                        <span>4:22</span>
                    </div>
                    </div>
                    <div className="top-song flex justify-between p-2">
                        <div className="top-song-left flex">
                            <div className="top-song-rank">2</div>
                            <div className="top-song-love"><i className="fa-regular fa-heart"></i></div>
                            <div className="top-song-tile flex-col">
                                <div className="top-song-name">Nàng Thơ</div>
                                <div className="top-song-artist">Amee</div>
                            </div>
                        </div>
                        <div className="top-song-time">
                            <span>4:22</span>
                        </div>
                    </div>
                    <div className="top-song flex justify-between p-2">
                        <div className="top-song-left flex">
                            <div className="top-song-rank">3</div>
                            <div className="top-song-love"><i className="fa-regular fa-heart"></i></div>
                            <div className="top-song-tile flex-col">
                                <div className="top-song-name">Đế Vương</div>
                                <div className="top-song-artist">Đình Dũng</div>
                            </div>
                        </div>
                        <div className="top-song-time">
                            <span>4:22</span>
                        </div>
                    </div>
                    <div className="top-song flex justify-between p-2">
                        <div className="top-song-left flex">
                            <div className="top-song-rank">4</div>
                            <div className="top-song-love"><i className="fa-regular fa-heart"></i></div>
                            <div className="top-song-tile flex-col">
                                <div className="top-song-name">Vỡ Tan</div>
                                <div className="top-song-artist">Trịnh Thăng Bình</div>
                            </div>
                        </div>
                        <div className="top-song-time">
                            <span>4:22</span>
                        </div>
                    </div>
                    <div className="top-song flex justify-between p-2">
                        <div className="top-song-left flex">
                            <div className="top-song-rank">5</div>
                            <div className="top-song-love"><i className="fa-regular fa-heart"></i></div>
                            <div className="top-song-tile flex-col">
                                <div className="top-song-name">Khuôn mặt đáng thương</div>
                                <div className="top-song-artist">Sơn Tùng</div>
                            </div>
                        </div>
                        <div className="top-song-time">
                            <span>4:22</span>
                        </div>
                    </div>
                    <div className="top-song flex justify-between p-2">
                        <div className="top-song-left flex">
                            <div className="top-song-rank">6</div>
                            <div className="top-song-love"><i className="fa-regular fa-heart"></i></div>
                            <div className="top-song-tile flex-col">
                                <div className="top-song-name">Năm ấy</div>
                                <div className="top-song-artist">Đức Phúc</div>
                            </div>
                        </div>
                        <div className="top-song-time">
                            <span>4:22</span>
                        </div>
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
