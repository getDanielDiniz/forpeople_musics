import { ThunkActionDispatch } from "redux-thunk";
import api from "../../Libs/Axios/axiosInstance";
import RadioStation from "../../Types/Responses/RadioStation/InterfaceRadioStation";
import { toast } from "react-toastify";

export default async function GetQueriedStations(
  query: string,
  dispatch: ThunkActionDispatch<any>,
  state: any
): Promise<RadioStation[]> {
  
  const queriedStations: RadioStation[] = [];
  const filters: any = state.params.paramsList;
  let limit = 10;

  //https://de1.api.radio-browser.info/json/stations/search?limit=10&countrycode=us
  try {
    for (const param in filters) {
      if (limit == 0) break;
      const payload: RadioStation[] = await (
        await api.get(`/stations/search?${param}=${query}&limit=${limit}`)
      ).data;
      queriedStations.push(...payload);
      limit -= payload.length;
    }
  } catch (error){
    console.error(error)
  }

  return queriedStations;
}
