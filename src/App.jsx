import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./reset.scss"
import Home from "./pages/home/Home.jsx";


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
