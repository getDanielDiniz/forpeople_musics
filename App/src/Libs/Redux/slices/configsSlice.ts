import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./inicialStates/configsSlice/initialstate";
import IConfigInitialState, { EditModeParams } from "./inicialStates/configsSlice/interface";

/**
 * Contexto de configuração da aplicação.
 * Gerencia os diferentes modos que a aplicação pode conter.
 * Menu aberto, tela de loading e modo de edição da lista de favoritos.
 */
const configsSlice = createSlice({
  name: "configs",
  initialState,
  reducers: {
    //Abre e fecha menu lateral - asideMenu
    toggleAsideMenu: (state) => {
      state.isAsideMenuOpen = !state.isAsideMenuOpen;
    },
    //Renderiza ou não a tela de loading
    toggleLoading: (state, action: {payload:boolean}) => {
      state.loading = action.payload;
    },
    //Habilita ou não o edit mode da lista de favoritos
    toggleEditMode: (state, action: {payload : EditModeParams}) => {
      state.editmode.state = action.payload.state;
      if (action.payload.state === false) {
        state.editmode.id_stationEditing = null;
      } else {
        state.editmode.id_stationEditing = action.payload.id_stationEditing;
      }
    },
  },
});

export default configsSlice.reducer;

//Modificadores de estado
export const { toggleAsideMenu, toggleLoading, toggleEditMode } =
  configsSlice.actions;

//Leitores de estado
export const AsideMenuState = (state: { configs: IConfigInitialState }) =>
  state.configs.isAsideMenuOpen;
export const LoadingState = (state: { configs: IConfigInitialState }) => state.configs.loading;
export const EditModeState = (state: { configs: IConfigInitialState }) =>
  state.configs.editmode;
