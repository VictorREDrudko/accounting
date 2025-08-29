import { useEffect } from "react";
import "./App.css";
import { About } from "./components/about/About";
import { Banner } from "./components/banner/Banner";
import { Container } from "./components/container/Container";
import { Header } from "./components/header/header/Header";
// import { MainButton } from "./components/main-button/Mainbutton";
// import { Services } from "./components/services/Services";

function App() {
  useEffect(() => {
    const handleMenuState = (event: CustomEvent) => {
      if (event.detail.isOpen) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    };

    window.addEventListener('menuStateChange', handleMenuState as EventListener);
    
    return () => {
      window.removeEventListener('menuStateChange', handleMenuState as EventListener);
    };
  }, []);

  return (
    <>
      <Container>
        <Header />
        <main className="container">
          <Banner />
          <About />
          {/* <Services />
          <div className="button-container">
            <MainButton />
          </div> */}
        </main>
      </Container>
    </>
  );
}

export default App;
