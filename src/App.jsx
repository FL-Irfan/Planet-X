import "./App.css";

function App() {
  return (
    <div className="app">
      <nav>
        <h2>SPHEREx Explorer</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#mission">Mission</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <main id="home">
        <p>INTERSTELLAR CONSORTIUM</p>

        <h1>Explore the Infrared Universe</h1>

        <p>
          A web project for exploring SPHEREx data and learning
          more about the outer Solar System.
        </p>

        <button>Explore Mission</button>
      </main>

      <section id="mission">
        <h2>Our Mission</h2>

        <p>
          We will use SPHEREx data to build an interactive
          space exploration experience.
        </p>
      </section>
    </div>
  );
}

export default App;