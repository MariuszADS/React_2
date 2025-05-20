import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Wskazowki_porady_rute from "./routers/Wskazowki_porady_rute";
import Miejsca_warte_uwagi from './routers/Miejsca_warte_uwagi'
import TipsContentMetro from "./Components/TipsContentMetro";
import TipsContentTramwaj from "./Components/TipsContentTramwaj";
import TipsContentPociag from "./Components/TipsContentPociag";
import TipsContentAutobus from "./Components/TipsContentAutobus";

export const router = createBrowserRouter([
    {path:'/',element:<App/>} ,
    {path:'/wskazowki',element:<Wskazowki_porady_rute/>} ,
    // {path:'/src/routers/Wskazowki_porady_rute.jsx',element:<Wskazowki_porady_rute/>} ,
    {path:'/miejsca',element:<Miejsca_warte_uwagi/>},
    // {path:'/src/routers/Miejsca_warte_uwagi.jsx',element:<Miejsca_warte_uwagi/>},
    {path:'/metro',element:<TipsContentMetro/>},
    // {path:'/src/Components/TipsContentMetro.jsx',element:<TipsContentMetro/>},
    {path:'/trikk',element:<TipsContentTramwaj/>},
    // {path:'/src/Components/TipsContentTramwaj.jsx',element:<TipsContentTramwaj/>},
    {path:'/tog',element:<TipsContentPociag/>},
    // {path:'/src/Components/TipsContentPociag.jsx',element:<TipsContentPociag/>},
    {path:'/bus',element:<TipsContentAutobus/>},
    // {path:'/src/Components/TipsContentAutobus.jsx',element:<TipsContentAutobus/>},
    
])