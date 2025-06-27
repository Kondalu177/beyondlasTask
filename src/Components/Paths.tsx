import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Home from "./Home.tsx";
import MarketPlace from "./MarketPlace.tsx";
import Myorders from "./Myorders.tsx";
import Myprojects from "./Myprojects.tsx";
import ReceivedOrders from "./ReceivedOrders.tsx";
import AddWebsite from "./AddWebsite.tsx";
import MyWebsites from "./MyWebsites.tsx";

function Paths() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/websites" element={<MyWebsites />} />
          <Route path="/orders" element={<Myorders />} />
          <Route path="/projects" element={<Myprojects />} />
          <Route path="/received_orders" element={<ReceivedOrders />} />
          <Route path="/add_websites" element={<AddWebsite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Paths;
