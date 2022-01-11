import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/home-page/HomePage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Navigate to="/store" />} />
                <Route path="/store/*" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;
