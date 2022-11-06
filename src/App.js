import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import FallBack from "./pages/FallBack";
import NoMatch from "./pages/404";
import { ErrorTrigger } from "./pages/ErrorTrigger";
import "./App.css";
import { CounterWithUseCounter } from "./pages/CounterWithUseCounter";
import { CounterWithUseReducer } from "./pages/CounterWithUseReducer";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={FallBack}>
          <Routes>
            <Route exact path="/" element={<CounterWithUseCounter />}></Route>
            <Route exact path="/counter-with-reducer" element={<CounterWithUseReducer />}></Route>
            <Route path="/error" element={<ErrorTrigger />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
