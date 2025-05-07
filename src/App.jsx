/* eslint-disable react-refresh/only-export-components */
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowitWorks from "./components/HowitWorks";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

import * as Sentry from '@sentry/react'

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowitWorks />
      <Footer />
    </main>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default Sentry.withProfiler(App);
