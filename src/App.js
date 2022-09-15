import './App.css';
import { ThemeProvider } from './components/Contexts/ThemeContext';
import { GlobalStyles } from './components/StyledComponents';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HeaderFooter from './components/Static/HeaderFooter';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe.js/ContactMe';
import Success from './components/ContactMe.js/Success';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <HashRouter>
        <Routes>
          <Route path='/' element= {<HeaderFooter />}>
            <Route index element={<Home />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contactme' element={<ContactMe/>}>
              <Route path='/contactme/success' element={<Success />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
