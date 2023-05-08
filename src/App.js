import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getInitialData } from "./Store/Slices/hnSearchSlice";
import NewsDetails from "./Components/NewsDetails";
import Home from "./Components/Home";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialData());
  }, [dispatch]);
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<NewsDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
