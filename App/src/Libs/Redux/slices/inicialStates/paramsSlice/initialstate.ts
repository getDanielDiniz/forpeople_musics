import { IParamsInitialState } from "./IParamsInitialState"

const initialState:IParamsInitialState = {
    query:'',
    paramsList:{
        name:{
            offset:0,
            value:''
        },
        country:{
            offset:0,
            value:''
        },
        language:{
            offset:0,
            value:''
        },
    },
}

export default initialState