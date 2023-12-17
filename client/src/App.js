import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventDetail from "./pages/EventDetail";
import AllEvents from "./pages/AllEvents";
import Dashboard from './pages/Dashboard';
import DashboardDetail from "./pages/DashboardDetail";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/all-events" element={<AllEvents />} />
        <Route path="/eventdetail/:eventId" element={<EventDetail />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard-detail/:eventId" element={<DashboardDetail />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
