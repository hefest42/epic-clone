import { Routes, Route, Navigate } from "react-router-dom";

import StorePage from "./components/Pages/store-page/StorePage";
import CreateAccount from "./components/Pages/account/CreateAccount";

function App() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Navigate to="/store" />} />
                <Route path="/store/*" element={<StorePage />} />
                <Route path="/create-account" element={<CreateAccount />} />
            </Routes>
        </div>
    );
}

export default App;
