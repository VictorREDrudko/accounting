import "./App.css";
import { About } from "./components/about/About";
import { Banner } from "./components/banner/Banner";
import { Container } from "./components/container/Container";
import { Header } from "./components/header/header/Header";

function App() {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Banner />
          <About />
        </main>
      </Container>
    </>
  );
}

export default App;
