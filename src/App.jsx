import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Landing-Page/home.jsx";
import Signup from "./assets/Landing-Page/sign-up.jsx";
import Login from "./assets/Landing-Page/login.jsx";
import News from "./assets/News/news.jsx";
import Dashboard from "./assets/Dashboard/dashboard.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/news" element={<News />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;