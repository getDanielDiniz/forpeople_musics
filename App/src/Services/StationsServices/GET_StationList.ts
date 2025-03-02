import api from "../../Libs/Axios/axiosInstance"
import RadioStation from "../../Types/Responses/RadioStation/InterfaceRadioStation"

/**
 * @returns - Lista de estações de rádio em caso de sucesso.
 */
export default async function GetStations(numberOfElements:number):Promise<RadioStation[]> {

    try {
        const payload = await api.get(`/stations/search?limit=${numberOfElements}`);
        return payload.data;
    } catch (error) {
        console.error("Erro ao buscar estações:", error);
        return []
    }
}