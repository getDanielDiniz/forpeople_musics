import { useEffect, useState } from "react";
import { LuPlay } from "react-icons/lu";
import { LuPause } from "react-icons/lu";
import "./PlayPause.scss";
import RadioStation from "../../Types/Responses/RadioStation/InterfaceRadioStation";
import { useDispatch, useSelector } from "react-redux";
import { ActiveStation } from "../../Types/ActiveStation";
import { activeStation, playMusic } from "../../Libs/Redux/slices/stationsList";

/**
 * Botão de play e pause que controla o estado de activeStation no Redux
 *
 * @param className - Classes vindas do elemento pai para ser posicionada dentro do container
 * @param station - Estação ao qual o elemento irá controlar
 * @returns - Caso a estação já esteja ativa, retorna um botão de pause. Do contrário, retorna um botão de play.
 */
export const PlayPauseButton = ({
  className,
  station,
}: {
  className: string;
  station: RadioStation | ActiveStation;
}) => {
  const activeMusic = useSelector(activeStation);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    activeMusic?.stationuuid == station.stationuuid
      ? setIsPlaying(true)
      : setIsPlaying(false);
  }, [activeMusic]);

  /***
   * Filtra as informações importantes de station
   * e atualiza o estado no redux
   */
  function handleClick() {
    if (station) {
      const activeStation: ActiveStation = {
        stationuuid: station.stationuuid,
        isPlaying: true,
        favicon: station.favicon,
        codec: `audio/${station!.codec.toLowerCase()}`,
        name: station.name!,
        url: station.url,
      };

      if (activeMusic && isPlaying) {
        dispatch(playMusic(null));
        return;
      }

      dispatch(playMusic(activeStation));
    }
  }

  return (
    <button
      onClick={() => handleClick()}
      className={`${className} bg-transparent border-0 component-button`}
    >
      {isPlaying ? (
        <LuPause className="text-white fs-1 component-pausebutton" />
      ) : (
        <LuPlay className="text-white fs-1 component-playbutton" />
      )}
    </button>
  );
};
