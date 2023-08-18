import { Routes, Route } from "react-router-dom"
import { PageHome, PageLayout, PageReceitas, PageAdicionar, PagePix, PageCadastro, PageAjustes } from "../pages/index" 

export function RouteSoftware() {
    return (
        <Routes>
            <Route path = "/" element = {<PageLayout/>}>
                <Route path = "" element = {<PageHome/>}/>
                <Route path = "segundaPagina" element = {<PageReceitas/>}/>
                <Route path = "adicionar" element = {<PageAdicionar/>} />
                <Route path = "pix" element = {<PagePix/>} />
            </Route>
            <Route path="Cadastro" element = {<PageCadastro/>}/>
            <Route path="Ajustes" element = {<PageAjustes/>}/>
        </Routes>
    )
}