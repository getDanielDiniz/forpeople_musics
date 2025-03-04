import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DefaultPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCountries } from "../../Libs/Redux/slices/countriesSlice";
import { AppDispatch } from "../../Libs/Redux/store";
import { AsideMenu } from "../../Components/AsideMenu/AsideMenu";
import { fetchStations } from "../../Libs/Redux/slices/stationsSlice";
import { AsideMenuState } from "../../Libs/Redux/slices/configsSlice";

/**
 * Página referente a configuração de layout e estado inicial da aplicação
 * @returns - Layout padrão da aplicação
 */
export default function DefaultPage() {
  const dispatch = useDispatch<AppDispatch>();
  const isMenuOpen = useSelector(AsideMenuState)

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchStations());
  }, []);

  return (
    //Não deixa a página scrollar quando o menu lateral tiver aberto
    <main className={`bg-dark d-flex ${isMenuOpen ? "overflow-hidden" : 'overflow-scroll'}`}>
      <ToastContainer position="top-right" theme="dark" />
      <AsideMenu/>
      <Outlet />
    </main>
  );
}
