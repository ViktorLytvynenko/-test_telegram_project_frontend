import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./reset.scss"
import Home from "./pages/home/Home.jsx";
import Users from "./pages/users/Users.jsx";
import Profile from "./pages/profile/Profile.jsx";
import {Provider} from "react-redux";
import store from "./redux/store.js";


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<Home/>}/>
                    <Route index path='/users' element={<Users/>}/>
                    <Route index path='/profile' element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
