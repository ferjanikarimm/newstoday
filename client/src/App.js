import { Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";
import Home from "./screens/Home/Home";
import Sign from "./screens/Sign";
import LoadingPage from "./screens/LoadingPage/LoadingPage";
import CarouselPage from "./screens/Carousel/CarouselPage";
import PrivateRoute from "./components/Routes/PrivateRoute";
import SinglePost from "./screens/Post/PostProfile";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path=":category" element={<Home />} />
        <Route path="news/:category/:id" element={<SinglePost />} />
      </Route>
      <Route path="sign" element={<Sign />} />
      <Route path="loading" element={<LoadingPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="Carousel" element={<CarouselPage />} />
      </Route>
    </Routes>
  );
}

export default App;
