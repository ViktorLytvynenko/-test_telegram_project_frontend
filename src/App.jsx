import Home from "./pages/home/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./reset.scss"


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
