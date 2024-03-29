import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51KdVT9SBXYTiPNAADPlG3Ix0WZSZrW5MUhB2hy21uNzRbdR71fPVi73Xikl4QzUrdfFBPklxxBMhU4QmptR6Y4Ig002Izww4SC"
);

function App() {
  const [dispatch] = useStateValue();
  useEffect(() => {
    //will run only once when app component loads

    //A listener from firebase is used here.
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is : - ", authUser);

      if (authUser) {
        //the user just logged in/ was logged in.

        dispatch({
          type: "SET_USER",
          payload: authUser,
        });
      } else {
        //the user is logged out

        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
