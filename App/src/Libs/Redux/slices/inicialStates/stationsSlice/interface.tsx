import { ActiveStation } from "../../../../../Types/ActiveStation";
import RadioStation from "../../../../../Types/Responses/RadioStation/InterfaceRadioStation";

export interface stationsInicialStateInterface {
    numberOfElements:number;
    list: RadioStation[],
    active:ActiveStation | null
}