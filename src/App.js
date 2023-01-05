import "./App.css";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import Registration from "./Components/Regitration/Registration";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/notes" element={<Main />} />
        <Route
          path="/register"
          element={
            <ProtectedRoute>
              <Registration />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
