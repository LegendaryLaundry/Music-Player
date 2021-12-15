import React from "react";

function PlayerDetail(props) {
    return (
    <div className = "c-player--details">
        <div className="details-img rotate linear infinite">
        <img src={props.song.img_src} alt=""/>
        </div>
        <h3 className="details-title">{props.song.title}</h3>
        <h4 className="details-artist">{props.song.artist}</h4>
      </div>
    )

}
export default PlayerDetail;