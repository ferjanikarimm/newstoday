import { Routes, Route } from "react-router-dom";

import PublicLayout from "./components/layout/PublicLayout";
import Home from "./screens/home/Home";
import Sign from "./screens/Sign";
import LoadingPage from "./screens/LoadingPage/LoadingPage";
import CarouselPage from "./screens/Carousel/CarouselPage";

import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="sign" element={<Sign />} />
      <Route path="loading" element={<LoadingPage />} />
      <Route path="Carousel" element={<CarouselPage />} />
    </Routes>
  );
}

export default App;
