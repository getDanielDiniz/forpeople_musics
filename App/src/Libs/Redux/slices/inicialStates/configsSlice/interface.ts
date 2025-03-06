interface IConfigInitialState {
    editmode: EditModeParams,
    loading: boolean,
    isAsideMenuOpen: boolean,
  };


export interface EditModeParams{
  state:boolean,
  id_stationEditing?: string | null ;
}

  export default IConfigInitialState