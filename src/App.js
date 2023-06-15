import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCountry } from "./redux/country/countrySlice";
import { useEffect } from "react";
import { Signin } from "./pages/Signin";
import { Country } from "./pages/country/Country";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,flag")
      .then((res) => {
        dispatch(addCountry(res.data));
      });
  }, [dispatch]);

  return (
    <div className="container custom-container">
      <Routes>
        <Route element={<Signin />} exact path="/"></Route>
        <Route element={<Country />} path="/Country/*"></Route>
      </Routes>
    </div>
  );
}

export default App;
