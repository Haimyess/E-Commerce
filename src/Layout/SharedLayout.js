/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function SharedLayout({ qty }) {
  return (
    <>
      <Header qty={qty} />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;
