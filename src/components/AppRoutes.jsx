import { Route, Routes } from "react-router-dom"
import Chat from "./Chat";
import Main from "./Main";



const AppRoutes = () => {

    return(
        <Routes>
            <Route index element={<Main/>}/>
            <Route path="/chat" element={<Chat/>}/>
        </Routes>
    )
}

export default AppRoutes;