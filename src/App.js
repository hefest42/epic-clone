import { Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Navigate to="/store" />} />
                <Route path="/store/*" element={<StorePage />} />
            </Routes>
        </div>
    );
}

export default App;
