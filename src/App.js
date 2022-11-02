import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Counter from "./components/Counter";
import NoMatch from "./components/404";
import { FallBack } from "./components/FallBack";
import "./App.css";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={FallBack}>
        
          <Routes>
            <Route exact path="/" element={<Counter />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        
      </ErrorBoundary>
    </>
  );
}

export default App;
