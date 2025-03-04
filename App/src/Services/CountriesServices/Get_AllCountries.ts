import api from "../../Libs/Axios/axiosInstance";


export default async function GetAllCountries():Promise<any | string> {
    
    try {
        const payload = await api.get(`/countries`);
        return payload.data;
    } catch (error) {
        return ("Error on fetch countries");
    }

}