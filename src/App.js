import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <Home />
      <About />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
