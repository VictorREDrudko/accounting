import './App.css';

import { About } from './components/about/About';
import { Banner } from './components/banner/Banner';
import { Brands } from './components/Brands/Brands';
import { Container } from './components/container/Container';
import { Header } from './components/header/header/Header';
import { Services } from './components/services/Services';
import { SpecialOffer } from './components/special-offer/SpecialOffer';
import { useBurgerMenuState } from './hooks/use-burger-menu-state';

function App() {
  useBurgerMenuState();

  return (
    <>
      <Container>
        <Header />
        <main className="container">
          <Banner />
          <About />
          <Services />
          <SpecialOffer />
          <Brands />
        </main>
      </Container>
    </>
  );
}

export default App;
