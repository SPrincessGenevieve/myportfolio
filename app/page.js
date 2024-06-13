import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <main className="App">
      <div>
        <Home></Home>
        <About></About>
        <Project></Project>
        <Contact></Contact>
      </div>
    </main>
  );
}
