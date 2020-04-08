import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';

import { Burger, Menu } from './components';
import Home from './content/Home';
import About from './content/About';
import Portfolio from './content/Portfolio';
import Contact from './content/Contact';

import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <Router> 
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/portfolio">
        <Portfolio />
      </Route>

      <Route exact path="/contact">
        <Contact/>
      </Route>

    </Router>
  );
}
export default App;