import { useState, useEffect } from "react";
import Player from './components/Player'
function App() {
  const [songs] = useState([
    {
      title: "Holy Land",
      artist: "Mega Man Zero 4",
      img_src: "./images/megamanZero4AlbumCover.jpg",
      src: "./music/Holy-Land.mp3"
    },
    {
       title: "Change Your Way",
       artist: "Elisha La'Verne",
       img_src:"./images/innocentsinAlbumCover.jpg",
       src: "./music/Change-Your-Way.mp3"

    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;