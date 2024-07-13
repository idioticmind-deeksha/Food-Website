import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import MainMenu from './pages/Menu';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
<>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/menu" element={<MainMenu/>} />
          <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
