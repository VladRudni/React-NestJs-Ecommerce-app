import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";
import { Button } from "./componets/ui/Button";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Main</Link>
        <Link to="/about">about</Link>
      </div>
      <Button buttonId="123123">
        Hello world
        <i>hello</i>
      </Button>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
