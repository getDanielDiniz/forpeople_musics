
export interface IParamsInitialState {
    query:string,
    paramsList:{
        name:paramUnity,
        country:paramUnity,
        language:paramUnity,
    },
}

export interface IPayloadUpdateParam {
    target:string,
    data:paramUnity
}

interface paramUnity {
    offset:number,
    value:string
}
