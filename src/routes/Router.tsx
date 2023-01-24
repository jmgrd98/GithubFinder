import { Login } from "@mui/icons-material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Repos from "../pages/Repos/Repos";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path={'/repos'} element={<Repos/>}/>
            </Routes>
        </BrowserRouter>
    )
}