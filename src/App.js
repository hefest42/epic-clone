import { Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Navigate to="/store" />} />
                <Route path="/store/*" element={<p>test</p>} />
            </Routes>
        </div>
    );
}

export default App;
