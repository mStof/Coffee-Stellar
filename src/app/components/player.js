"use client";
import assets from "./assets";
import Image from "next/image";
import "../../style/index/player.scss";
import { useState } from "react";

export default function Player() {
  const [skipNext, pause, skipPrevious, play, mscList] = assets.playerJs;
  const [musicObj, setMusicObj] = useState(mscList[0]);
  
  function handleClickPause(e) {
    const musicTag = document.querySelector("audio#music");
    const musicIndicator = document.querySelector("button.player_btn");

    if(e === "reset"){
      document.querySelector(".music_pause").alt = "Botão de pausar a musica";
      document.querySelector(".music_pause").src = play.src;
      musicTag.pause();
      musicIndicator.classList.add("paused");
      return
    }

    if (musicTag.paused) {
      e.target.src = pause.src;
      e.target.alt = "Botão de começar a musica";
      musicTag.play();
      musicIndicator.classList.remove("paused");
      return

    } else {
      e.target.alt = "Botão de pausar a musica";
      e.target.src = play.src;
      musicTag.pause();
      musicIndicator.classList.add("paused");
      return
    }
  }
  const constrolsFunctions = {
    musicPrevious: () => {
      0 <= mscList.indexOf(musicObj) - 1
        ? setMusicObj(mscList[mscList.indexOf(musicObj) - 1])
        : setMusicObj(mscList[mscList.length - 1]);
        handleClickPause("reset")
      },
      musicNext: () => {
        mscList.length - 1 > mscList.indexOf(musicObj)
        ? setMusicObj(mscList[mscList.indexOf(musicObj) + 1])
        : setMusicObj(mscList[0]);
        handleClickPause("reset")
    },
  };

  return (
    <div className="player_container">
      <button
        type="button"
        className="player_btn paused"
        aria-label='Player de música'
        title='Botão do player de música'
        onClick={(e) => e.target.parentElement.classList.toggle("active")}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="player_info">
        <audio id="music" src={musicObj.src} loop preload="auto"></audio>
        <p className="music_name" title={musicObj.name}>
          {musicObj.name}
        </p>
        <div className="music_btns">
          <Image
            className="music_btn music_previous"
            id="musicPrevious"
            src={skipPrevious}
            alt="Botão de música anterior"
            onClick={(e) => constrolsFunctions[e.target.id]()}
            tabIndex={0}
          />
          <Image
            className="music_btn music_pause"
            src={play}
            alt="Botão de pausar a música"
            onClick={handleClickPause}
            tabIndex={0}
          />
          <Image
            className="music_btn music_next"
            id="musicNext"
            src={skipNext}
            alt="Botão de próxima música"
            onClick={(e) => constrolsFunctions[e.target.id]()}
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  );
}
