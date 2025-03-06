import { createSlice } from "@reduxjs/toolkit"
import initialState from "./inicialStates/paramsSlice/initialstate";
import { IParamsInitialState, IPayloadUpdateParam } from "./inicialStates/paramsSlice/IParamsInitialState";

/**
 * Contexto de gerenciamento dos parâmetros das requisições,
 * Função principal é guardar a informação de quantas estações 
 * foram encontradas por categoria : name, country, language
 * para usar como offset na requisição posterior
 */
const paramsRequestSlice = createSlice({
    name:'params',
    initialState,
    reducers: {
        updateParam: (state:any, action: {payload: IPayloadUpdateParam })=>{
            const statePath:string = action.payload.target;
            if (!state[statePath]) return state;
            return {
                ...state,
                params:{
                    ...state.params,
                    [statePath]: {
                        ...state.params[statePath],
                        ...action.payload.data,
                    }
                }
            }
        },
        updateQuery: (state, action:{payload:string})=>{
            state.query = action.payload
        }
    },

})

export default paramsRequestSlice.reducer

//Metódos de gravação 
export const {updateParam, updateQuery} = paramsRequestSlice.actions

//Métodos de leitura
export const getParamsList = (state:{params: IParamsInitialState}) => state.params.paramsList
export const getQuery = (state:{params: IParamsInitialState}) => state.params.query