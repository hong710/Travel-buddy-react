import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Service from "./components/Services";
import DestinationsTop from "./components/DestinationsTop";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Service />
      <DestinationsTop />
    </>
  );
}

export default App;
