import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FormularioPage } from "../pages/Home/formulario";
export const FormularioRoutes = () =>
{
    return(
        <Router>
            <Routes>
                <Route path= '/' element = {<FormularioPage/>}/>
            </Routes>
        </Router>
    )
}