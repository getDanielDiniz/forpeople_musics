import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import GetAllCountries from "../../../Services/CountriesServices/Get_AllCountries"

const initialState = {
    countriesList:["Brazil"]
}

const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
    },
    extraReducers:(builder) => {
        builder.addCase(fetchCountries.pending, () => {}),
        builder.addCase(fetchCountries.fulfilled,(state, action)=>{
            state.countriesList = action.payload
        })
    },
})

export default countriesSlice.reducer

//Modificação do estado
export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async ()=> {
        const countries = await GetAllCountries()
        return countries
    }
)


//Leitura do estado
export const countriesList = (state:any) => state.countries.countriesList