import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import React, { useState } from 'react';
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
      letters: input
    }))
      .then(res => res.json())
      .then(data => {
        if (!data) {
          console.log("no words found")
        }
        // const list = []
        // for (let i = 0; i < data.list.length; i++) {
        //   //console.log(data.list[i])
        //   for (let word in data.list[i]) {
        //     list.push(word);
        //   }
        // }
        // console.log(list)
        setWords(data.list);

        console.log(data.list)
      })
  }
  const handleChange = event => {
    setInput(event.target.value)
  }
  const [words, setWords] = useState(["yo"]);
  const [input, setInput] = useState("")
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/fav' element={<Favorites />} />
          </Routes>
          <textarea name="" id="" cols="30" rows="10" value={words}></textarea>

          <p>Type your letters here</p>
          <input type="text" name="" id="" value={input} onChange={handleChange} />
          <Button text={"Get Favs"} onClick={getFavs} />
          <Button text={"Get Words"} onClick={getWords} />

        </div>
      </Router>
    </>
  );
}

export default App;
