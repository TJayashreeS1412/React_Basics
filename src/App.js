import React, { Suspense } from "react"; //refers to react inside our node modules.
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Susp } from "react";
import Demo from "./components/Demo";

// chunking | code splitting | dynamic binding | lazy loading | on-demand loading
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const App = () => {
  console.log("App rendered");

  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<App />}>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        <Route
          path="/grocery"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Grocery />
            </Suspense>
          }
        />
        <Route path="/demo" element={<Demo />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
