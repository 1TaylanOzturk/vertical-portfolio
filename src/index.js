import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import App from "./App";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Bio from "./routes/Bio";
import DisplayPodcast from "./components/DisplayPodcast";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <main>
              <App />
            </main>
            <Footer />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <main>
              <About />
            </main>
            <Footer />
          </>
        }
      />

      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <main>
              <Contact />
            </main>
            <Footer />
          </>
        }
      />

      <Route
        path="/bio"
        element={
          <>
            <Navbar />
            <main>
              <Bio />
            </main>
            <Footer />
          </>
        }
      />

      <Route
        path="/podcasts"
        element={
          <>
            <Navbar />
            <main>
              <DisplayPodcast endpoint="podcasts/" />
            </main>
          </>
        }
      />

      <Route
        path="/podcasts/:category"
        element={
          <>
            <Navbar />
            <DisplayPodcast />
          </>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
