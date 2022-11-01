import { Route, Routes } from "react-router-dom";
import Home from "./component/home/home";
import WorkRoute from "./route/work_route";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkRoute />} />
      </Routes>
    </>
  );
}

export default App;
