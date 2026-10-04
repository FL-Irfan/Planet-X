import "./App.css";

function App() {
  return (
    <div className="app">

      <div className="background"></div>

      <nav>
        <h2>✦ SPHEREx Explorer</h2>

        <div className="links">
          <a href="#home">Home</a>
          <a href="#mission">Mission</a>
          <a href="#explore">Explore</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <main id="home">
        <p className="smallTitle">INTERSTELLAR CONSORTIUM</p>

        <h1>
          Explore the universe
          <span> beyond visible light.</span>
        </h1>

        <p className="intro">
          Using SPHEREx data to explore the infrared sky,
          understand our universe and investigate the outer
          Solar System.
        </p>

        <div className="buttons">
          <button>Explore SPHEREx</button>
          <a href="#mission">Our Mission</a>
        </div>
      </main>

      <section id="mission">
        <p className="smallTitle">OUR MISSION</p>

        <h2>Seeing what our eyes cannot.</h2>

        <p className="sectionText">
          SPHEREx observes the universe in infrared light.
          Our goal is to turn this data into an interactive
          experience where users can explore and understand
          what SPHEREx discovers.
        </p>

        <div className="cards">

          <div className="card">
            <h3>102</h3>
            <p>Infrared wavelengths</p>
          </div>

          <div className="card">
            <h3>Cosmic Origins</h3>
            <p>Explore stars, galaxies and the history of our universe.</p>
          </div>

          <div className="card">
            <h3>Planet X</h3>
            <p>Investigate the outer regions of our Solar System.</p>
          </div>

        </div>
      </section>

      <footer id="about">
        <p>SPHEREx Explorer</p>
        <span>Interstellar Consortium • 2026</span>
      </footer>

    </div>
  );
}

export default App;