import { BrowserRouter, Route, Routes } from "react-router-dom";
import  DefaultPage  from "../Pages/Default";
import { HomePage } from "../Pages/Home";

export default function AppRouter():React.JSX.Element {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultPage/>}>
                    <Route index path="/" element={<HomePage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}