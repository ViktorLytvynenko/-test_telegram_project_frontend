import Home from "./pages/home/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./reset.scss"
import Test from "./pages/Test.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Test/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
