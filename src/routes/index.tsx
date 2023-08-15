import { Routes, Route } from "react-router-dom"
import { PageHome, PageLayout, PageReceitas, PageAdicionar } from "../pages/index" 

export function RouteSoftware() {
    return (
        <Routes>
            <Route path = "/" element = {<PageLayout/>}>
                <Route path = "" element = {<PageHome/>}/>
                <Route path = "segundaPagina" element = {<PageReceitas/>}/>
                <Route path = "adicionar" element = {<PageAdicionar/>} />
            </Route>
        </Routes>
    )
}