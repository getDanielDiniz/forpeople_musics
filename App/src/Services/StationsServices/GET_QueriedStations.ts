import api from "../../Libs/Axios/axiosInstance";
import RadioStation from "../../Types/Responses/RadioStation/InterfaceRadioStation";

export default async function GetQueriedStations(
  query: string,
  state: any
): Promise<RadioStation[]> {
  
  const queriedStations: RadioStation[] = [];
  const filters: any = state.params.paramsList;
  let limit = 10;

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
