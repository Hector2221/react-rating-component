import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage, HomePage, RatingPage } from "./pages";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App content">
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}

      <BrowserRouter>
        <Routes>
          <Route path="/rating/:selectedButton" element={<RatingPage />} />
          <Route path="/" element={<HomePage />} />
          {/* This must always be at the end */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
