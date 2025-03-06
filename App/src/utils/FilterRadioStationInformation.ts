import { FilteredStation } from "../Types/FilteresStation";
import RadioStation from "../Types/Responses/RadioStation/InterfaceRadioStation";

/**
 * Converte uma lista do tipo RadioStation em uma lista do tipo FilteredStation
 * @param stationList - Lista de estações obtida através da API
 * @returns - Uma lista filtrada com apenas as informações utilizadas pela aplicação
 */
export default function (stationList: RadioStation[]): FilteredStation[] {
  
    const filteredStationList: FilteredStation[] = stationList.map((element) => {
        const filteredStation: FilteredStation = {
        stationuuid: element.stationuuid,
        isPlaying: true,
        favicon: element.favicon,
        codec: `audio/${element!.codec.toLowerCase()}`,
        name: element.name!,
        url: element.url,
        country: element.country,
        countrycode: element.countrycode,
        state: element.state,
        tags: element.tags,
        };

        return filteredStation;
    });

    return filteredStationList
}
