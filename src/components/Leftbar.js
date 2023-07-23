import React from 'react'

export default function Leftbar() {
  return (
    <div className="left-bar mr-[35px]">
            <h2 className="title font-bold text-lg">
                <i className="fa-brands fa-napster"></i> MUSIC APP
            </h2>
            <div className="recommend">
                <h4 className="font-bold text-slate-400">Recommend</h4>
                <ul className="ml-10">
                    <li className="left-bar-item">For you</li>
                    <li className="left-bar-item">Library</li>
                    <li className="left-bar-item">Radio Station</li>
                    <li className="left-bar-item">Music Video</li>
                </ul>
            </div>
            <div className="my-music">
                <h4 className="font-bold text-slate-400">My Music</h4>
                <ul className="ml-10">
                    <li className="left-bar-item">Liked Song</li>
                    <li className="left-bar-item">Album</li>
                    <li className="left-bar-item">Artist</li>
                    <li className="left-bar-item">Recent</li>
                </ul>
            </div>
            <div className="playlist">
                <h4 className="font-bold text-slate-400">Playlist</h4>
                <ul className="ml-10">
                    <li className="left-bar-item">Hip-hop</li>
                    <li className="left-bar-item">Jazz</li>
                </ul>
            </div>
        </div>
  )
}
