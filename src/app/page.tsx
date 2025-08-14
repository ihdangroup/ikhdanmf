import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="bg-gradient-to-br  from-[#121212] via-slate-800 to-[#121212]  text-white">
      <Navbar />
      <Header />
      <Skills />
      <Experience />
      <Project />
      <Education />
      <Footer />
    </main>
  );
}
