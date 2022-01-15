import { Routes, Route, Navigate } from "react-router-dom";

import StorePage from "./components/store-page/StorePage";
import Header from "./components/header/Header";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="" element={<Navigate to="/store" />} />
                <Route path="/store/*" element={<StorePage />} />
            </Routes>
        </div>
    );
}

export default App;
