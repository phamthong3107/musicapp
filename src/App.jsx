import './App.css';
import Content from './components/Content';
import Leftbar from './components/Leftbar';
import Playerbar from './components/Playerbar';
import Rightbar from './components/Rightbar';
import { Songs } from './Context';
import DataSongs from './data/song.json';
import { useState } from 'react';
function App() {
  const [Artist, setArtist] = useState(DataSongs[0])
  const handlesetArtist = (idArtist) => {
    const artist = DataSongs.find(artist => artist.id === idArtist)
    setArtist(artist)
  }
  const [song, setsong] = useState(0)
  const handleSetsong = (song) => {
    if(song > 3){
      song = 0
    }
    if(song < 0){
      song = 3
    }
    setsong(song)
  }
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, Artist, handlesetArtist, song, handleSetsong }}>
        <div className="main p-6 flex justify-center">
          <Leftbar/>
          <Content/>
          <Rightbar/>
      </div>
      <Playerbar/>
      </Songs.Provider>
      
    </div>
  );
}

export default App;
