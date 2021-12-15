import React, {useState, useRef, useEffect} from "react";
import PlayerDetail from "./PlayerDetail";
import PlayerControls from "./PlayerControls";

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
     });

     const skipSong = (forwards = true) => {
         if (forwards) {
             props.setCurrentSongIndex(() => {
                 let temp = props.setCurrentSongIndex;
                 temp++;

                 if (temp > props.songs.length - 1){
                    temp = 0;
                    }
                    return temp;
                 })
            
         } else {
            props.setCurrentIndex(() => {
                let temp = props.setCurrentSongIndex;
                temp--;

                if (temp < 0){
                    temp = props.songs.length - 1;
                }
                return temp;
            });

         }
     }

    return (
        <div className="c-player">
        <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
        <h4>Playing now</h4>
        <PlayerDetail song={props.songs[props.currentSongIndex]} />
        <PlayerControls isPlaying={isPlaying}
         setIsPlaying={setIsPlaying} skipSong={skipSong} />
        <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
    </div>
    )
}

export default Player;