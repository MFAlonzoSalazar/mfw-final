import './App.css';
import { ThemeProvider } from './components/Contexts/ThemeContext';
import { GlobalStyles } from './components/StyledComponents';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HeaderFooter from './components/Static/HeaderFooter';
import Home from './components/Static/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';


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
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
