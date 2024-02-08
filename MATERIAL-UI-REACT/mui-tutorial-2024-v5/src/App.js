import Header from "./Header/Header";
import Content from "./Content/content";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
        <Content />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
