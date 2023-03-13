import {
    BrowserRouter as Router,
    Route,
    Routes,
    useParams,
} from "react-router-dom";
import Layout from "./layout/Layout";
import CarShop from "./pages/carshop/CarShop";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                </Route>
                <Route path="/car" element={<CarShop />} />
            </Routes>
        </Router>
    );
}

export default App;
