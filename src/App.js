import { Routes, Route, Navigate } from "react-router-dom";

import StorePage from "./components/Pages/store-page/StorePage";
import CreateAccount from "./components/Pages/account/CreateAccount";
import LogIn from "./components/Pages/account/LogIn";
import GamePage from "./components/Pages/game-page/GamePage";

function App() {
    return (
        <Routes>
            <Route path="" element={<Navigate to="/store" />} />
            <Route path="/store/*" element={<StorePage />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/log-in" element={<LogIn />} />
        </Routes>
    );
}

export default App;
