import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Wskazowki_porady from "./routers/Wskazowki_porady";
import Miejsca_warte_uwagi from './routers/Miejsca_warte_uwagi'
import Ruter from './routers/Ruter'
import Kontakt from './routers/Kontakt'
import Wskazowki_Metro from "./routers/Wskazowki_Metro";

export const router = createBrowserRouter([
    {path:'/',element:<App/>} ,
    {path:'/wskazowki',element:<Wskazowki_porady/>} ,
    {path:'/miejsca',element:<Miejsca_warte_uwagi/>},
    {path:'/kontakt',element:<Kontakt/>},
    {path:'/ruter',element:<Ruter/>},
    {path:'/wskazowki/metro',element:<Wskazowki_Metro/>}
])