import "./App.css";
import { About } from "./components/about/About";
import { Banner } from "./components/banner/Banner";
import { Container } from "./components/container/Container";
import { Header } from "./components/header/header/Header";
import { MainButton } from "./components/main-button/Mainbutton";
import { Services } from "./components/services/Services";

function App() {
  return (
    <>
      <Container>
        <Header />
        <main className="container">
          <Banner />
          <About />
          <Services />
          <div className="button-container">
            <MainButton />
          </div>
        </main>
      </Container>
    </>
  );
}

export default App;
