import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import AddCertification from "./pages/AddCertification";
import MyCertificates from "./pages/MyCertificates";
import ExpiryAlerts from "./pages/ExpiryAlerts";
import Login from "./pages/Login";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />

        <div className="main-content">
          <Header />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddCertification />} />
            <Route path="/my-certificates" element={<MyCertificates />} />
            <Route path="/alerts" element={<ExpiryAlerts />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;