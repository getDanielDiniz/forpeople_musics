import IConfigInitialState from "./interface";

export const initialState: IConfigInitialState = {
  editmode: {
    state: false,
    id_stationEditing: null,
  },
  loading: false,
  isAsideMenuOpen: false,
};
