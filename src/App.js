import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./shared/pages/Layout"
import './App.css';
import Login from "./User/pages/Login";
import Register from "./User/pages/Register";
import Dashboard from "./Admin/pages/Dashboard";
import PublicRoute from "./shared/components/PublicRoute/PublicRoute";
import ProtectedRoute from "./shared/components/ProtectedRoute/ProtectedRoute";
import Profile from "./User/pages/Profile";
import ChangePassword from "./shared/pages/ChangePassword";
import DeleteAccount from "./shared/pages/DeleteAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />
          <Route path="/register" element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/change-password" element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          } />
          <Route path="/delete-account" element={
            <ProtectedRoute>
              <DeleteAccount></DeleteAccount>
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
