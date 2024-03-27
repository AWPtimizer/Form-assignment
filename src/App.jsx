import React from "react";
import FormInfo from "./components/FormInfo";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Form from "./components/Form";

function App() {
  return (
    <div className="w-full h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<FormInfo />} />
          <Route path="/card" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
