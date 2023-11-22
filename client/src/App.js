import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventDetail from "./pages/EventDetail";
import AllEvents from "./pages/AllEvents";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/all-events" element={<AllEvents />} />
        <Route path="/eventdetail/:eventId" element={<EventDetail />} />
      </Routes>
    </>
  );
}

export default App;
