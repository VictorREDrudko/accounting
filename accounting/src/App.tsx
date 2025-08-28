import "./App.css";
import { About } from "./components/about/About";
import { Banner } from "./components/banner/Banner";
import { Container } from "./components/container/Container";
import { Header } from "./components/header/header/Header";
import { Services } from "./components/services/Services";

function App() {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Banner />
          <About />
          <Services/>
        </main>
      </Container>
    </>
  );
}

export default App;
