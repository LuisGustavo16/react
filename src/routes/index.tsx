import { Routes, Route } from "react-router-dom"
import { PageHome } from "../pages/index" 
import { PageLayout } from "../pages/index"

export function RouteSoftware() {
    return (
        <Routes>
            <Route path = "/" element = {<PageLayout/>}>
                <Route path = "" element = {<PageHome/>}/>
            </Route>
        </Routes>
    )
}