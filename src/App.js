import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
    
} from "react-router-dom";
import Layout from "./layout/Layout";
import CarShop from "./pages/carshop/CarShop";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

    const {user} = useContext(AuthContext);
    const ProtectedRoute = ({children}) => {
        if (!user) {
            return <Navigate to="/login" />

        }
        return children;
    }


    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route path="/" element={<ProtectedRoute> <Layout /> </ProtectedRoute>}>
                
                    <Route path="/" element={<Home />} />
                
                    <Route path="/search" element={<Search />} />
                </Route>

                <Route path="/car" element={<ProtectedRoute> <CarShop /> </ProtectedRoute>} />
            </Routes>
        </Router>
    );
}

export default App;
