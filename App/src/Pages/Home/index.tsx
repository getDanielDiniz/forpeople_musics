import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Libs/Redux/store";
import "./PageHome.scss";
import { Logo } from "../../Components/Logo";
import { CiSearch } from "react-icons/ci";
import { StationsList } from "../../Components/StationsList";
import { Player } from "../../Components/Player";
import { toggleAsideMenu } from "../../Libs/Redux/slices/configsSlice";

export const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className="container-fluid bg-dark p-5 content-home">
      <Logo />
      <div className="container-md d-flex justify-content-between align-items-center border-bottom border-1 border-secondary p-2 cabecalho-home">
        <h5 className="text-white">Estações Favoritas</h5>
        <button className="text-white bg-transparent border-0 d-flex gap-2 align-items-center"
        onClick={()=>dispatch(toggleAsideMenu())}>
          <CiSearch className="fs-3" />
          <strong className="fs-6 d-none d-md-block">Buscar Estação</strong>
        </button>
      </div>
      <StationsList />
      <Player />
    </section>
  );
};
