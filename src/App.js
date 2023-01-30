import "./App.css";
import Article from "./components/Article";
import Info from "./components/Info";

function App() {
  return (
    <div className="container">
      <header>
        <h1>My Blog</h1>
        <p>An awesome baseline</p>
      </header>
      <nav>
        <div className="col1">
          <a href="#">Link</a>
          <a href="#"> Link</a>
          <a href="#">Link</a>
        </div>
        <a href="#">Link</a>
      </nav>
      <section>
        <article>
          <Article
            title="TITLE HEADING"
            subtitle="Title description"
            picture=""
            description="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque.  "
          />
          {
            <Article
              title="TITLE HEADING"
              subtitle="Title description"
              picture=""
              description="Morbi at pharetra odio. Quisque eget erat ipsum. Praesent cursus ac augue a rutrum. Vestibulum hendrerit nulla eget justo tempor commodo. Nam quis tincidunt tortor. Vivamus eu posuere nisi, at ullamcorper dui. Integer pulvinar, nisl a lacinia egestas, nisi nulla mollis urna, a tempus odio augue sit amet est. Aenean commodo congue velit non eleifend. Donec ac metus in diam lobortis feugiat vitae ac ligula."
            />
          }
        </article>
        <div>
          <Info
            title="ABOUT ME"
            picture=""
            description="Cras interdum pharetra felis eu faucibus."
          />
        </div>
      </section>
      <footer>
        <p>
          Made with <span className="bold">React</span> at{" "}
          <span className="bold">Le Reacteur </span> By{" "}
          <span className="bold">Maxence Valvason</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
