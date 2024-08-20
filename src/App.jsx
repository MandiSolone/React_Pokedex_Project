import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './Pages/HomePage.jsx';
import { SinglePokemonPage } from './Pages/SinglePokemonPage.jsx';



export default function App() {
  return (
      <BrowserRouter>
        {/* <NavBar /> */}
        {/* Why is my NavBar not working?  */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokedex/:id" element={<SinglePokemonPage />} />
        </Routes>
      </BrowserRouter>
  );
}


