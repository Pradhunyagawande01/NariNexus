import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Upcoming from './pages/Upcoming';
import Venue from './pages/Venue';
import Programs from './pages/Programs';
// import Events from './pages/Events';
// import Resources from './pages/Resources';
// import Stories from './pages/Stories';
// import Si from './pages/Si'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white scroll-smooth overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <section id="home" >
          <Home />
        </section>
        <section id="about" >
          <About />
        </section>
        {/* <section id="si" >
          <Si />
        </section> */}
        <section id="programs" >
          <Programs />
        </section>
          {/* <section id="venue" >
          <Venue />
        </section> */}

        <section id="upcoming" >
          <Upcoming />
        </section>
           {/* <section id="events" className="py-0">
          <Events />
        </section> */}
        {/* <section id="resources" className="py-0">
          <Resources />
        </section>
        <section id="stories" className="py-0">
          <Stories />
        </section>   */}
        <section id="team" >
          <Team />
        </section>
        {/* <section   className="py-0">
          <Venue />
        </section> */}
        <section   className="py-0">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
