import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouteDefender from "./components/RouteDefender";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from './pages/Home'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/search" element={<SearchResult/>} />
        <Route path="/account" element={<RouteDefender><Account/></RouteDefender>} />
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
