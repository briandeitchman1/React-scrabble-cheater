import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Button from './components/Button';
//import { getWords } from '../../backend/controllers/scrabbleController';

function App() {
  const getFavs = () => {
    fetch("http://localhost:5000/scrabble/fav")
      .then(res => res.json())
      .then(data => console.log(data))
  }
  const getWords = () => {
    fetch("http://localhost:5000/scrabble/words?" + new URLSearchParams({
      letters: 'begin'
    }))
      .then(res => res.json())
      .then(data => {
        for (let i = 0; i < data.list.length; i++) {
          console.log(data.list[i])
        }
      })
  }

  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/fav' element={<Favorites />} />
          </Routes>
          <Button text={"Get Favs"} onClick={getFavs} />
          <Button text={"Get Words"} onClick={getWords} />
        </div>
      </Router>
    </>
  );
}

export default App;
