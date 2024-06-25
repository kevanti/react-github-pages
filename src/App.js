import React, { useState } from 'react';
import './App.css';
import './styles/styles.scss';
import { Container } from './components/container/container';
import { Header } from './components/header/header';
import { Menu } from './components/header/menu/menu';
import { Name } from './components/header/name/name';
import { Hamburger } from './components/header/menu/hamburger';

import { Main } from './components/main/main';
import { Profile } from './components/main/profile';

function App() {
  /**
   * *Creamos el estado para ocultar y mostrar el menu
   * Inicializamos el estado en "false"
   */
  const [menuOpen, setMenuOpen] = useState(false);

  //Creamos la función toggleMenu que cambiará el valor de "menuOpen" cada vez que la llamemos
  const toggleMenu = () => setMenuOpen(prevState => !prevState);

  return (
    <>
      <Container>
        <Header>
          <Name />
          <Hamburger toggleMenu={toggleMenu} />
          <Menu open={menuOpen} />
        </Header>

        <Main>
          <Profile/>
        </Main>
      </Container>
    </>
  );
}

export default App;
