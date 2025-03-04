import { useEffect, useRef } from "react";
import { PlayPauseButton } from "../PlayPauseButton";
import "./Player.scss";
import { activeStation } from "../../Libs/Redux/slices/stationsList";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

/**
 * Caso haja uma estação ativa renderiza um Player central na tela
 * @returns - Player Component
 */
export const Player = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const activeMusic = useSelector(activeStation);

  useEffect(() => {
    if (audioRef.current) {
      if (activeMusic) {
        //Carrega a música antes do play() importante para troca de estação sem pause
        audioRef.current.pause();
        audioRef.current.src = activeMusic.url;
        audioRef.current.load();

        audioRef.current.play().catch((error) => {
          //Navegador não suporta o tipo do stream da estação.
          console.error(error.message);
          toast.error("A estação não pôde ser acessada!");
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [activeMusic]);

  return (
    activeMusic && (
      <section className="w-75 component-player bg-dark p-3 d-flex justify-content-between">
        <div className="w-50 row d-flex justify-content-between component-player_animation">
          {activeMusic.favicon && (
            <img src={activeMusic.favicon} className="col-2" />
          )}

          <h2 className="text-white fs-3 col-10 ">{activeMusic.name}</h2>
        </div>
        <PlayPauseButton className="col-md-2" station={activeMusic} />
        <audio ref={audioRef}>
          <source type={activeMusic.codec} />
        </audio>
      </section>
    )
  );
};
