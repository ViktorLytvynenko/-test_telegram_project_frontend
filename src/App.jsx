import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./reset.scss"
import Home from "./pages/home/Home.jsx";
import Users from "./pages/users/Users.jsx";
import Profile from "./pages/profile/Profile.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Home/>}/>
                <Route index path='/users' element={<Users/>}/>
                <Route index path='/profile' element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
