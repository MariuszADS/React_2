import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Wskazowki_porady_rute from "./routers/Wskazowki_porady_rute";
import Miejsca_warte_uwagi from './routers/Miejsca_warte_uwagi'
import Ruter from './routers/Ruter'
import TipsContentMetro from "./Components/TipsContentMetro";
import TipsContentTramwaj from "./Components/TipsContentTramwaj";
import TipsContentPociag from "./Components/TipsContentPociag";
import TipsContentAutobus from "./Components/TipsContentAutobus";

export const router = createBrowserRouter([
    {path:'/',element:<App/>} ,
    {path:'/wskazowki',element:<Wskazowki_porady_rute/>} ,
    {path:'/miejsca',element:<Miejsca_warte_uwagi/>},
    {path:'/ruter',element:<Ruter/>},
    {path:'/metro',element:<TipsContentMetro/>},
    {path:'/trikk',element:<TipsContentTramwaj/>},
    {path:'/tog',element:<TipsContentPociag/>},
    {path:'/bus',element:<TipsContentAutobus/>},
    
])