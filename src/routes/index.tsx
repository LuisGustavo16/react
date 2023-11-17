import { Routes, Route } from "react-router-dom"
import { PageHome, PageLayout, PageReceitas, PageAdicionar, PagePix, PageCadastro, PageAjustes, PageLogin, PageAdm } from "../pages/index"
import ProtectedRoute from "./ProtectedRoute"

export const RouteSoftware = () => {
    return (
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route path="" element={<PageHome />} />
                <Route path="/segundaPagina" element={<PageReceitas />} />
                <Route path="/adicionar" element={<PageAdicionar />} />
                <Route path="/pix" element={<PagePix />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/Adm" element={<PageAdm />} />
                </Route>
            </Route>
            <Route path="/Cadastro" element={<PageCadastro />} />
            <Route path="/Ajustes" element={<PageAjustes />} />
            <Route path="/Login" element={<PageLogin />}></Route>
        </Routes>
    );
};