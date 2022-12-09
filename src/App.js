import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from "./Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Checkout from './Checkout';
import Payment from "./Payment";
import Orders from "./Orders";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51MD406SCeoVBSGwWphmFxwJjTe9qeVCjXKISacOjsfLeFQ016p1Gc6u7mfZdZduxJ2dPCzIJ7WGl60gcj56anTjs00bs7XbPJC"
)


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/payment" element={[<Elements stripe={promise} ><Payment /></Elements> ]}/>
          <Route exact path="/orders" element={<Orders />} />
               
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
