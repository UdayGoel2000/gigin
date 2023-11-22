import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  console.log(data);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage data={data} />} />
          <Route
            exact
            path="/login"
            element={<LoginPage setData={setData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
