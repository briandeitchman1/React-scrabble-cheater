import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Favorites from './pages/Favorites';
import Header from './components/Header';

const apiURL = "http://localhost:5000/api/scrabble"
//const apiURL = "https://reactscrabblecheater.herokuapp.com/api/scrabble"

function App() {
  // uses fetch to get the list of favorite words from the backend.
  const getFavs = () => {
    fetch(apiURL + "/fav")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const favWordsList = []
        data.forEach(datum => {
          favWordsList.push(datum.word);
        })
        setWords(favWordsList)
      })
    console.log(window.location.origin)
  }
  // uses sends a post request to the back end to add a new favorite word
  const addFav = () => {
    if (!input) {
      setInput("Must Type at least 1 letter")
      console.log("in get Words")
      return;
    }
    fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: input
      })
    }).then(res => {
      return res.json
    })
      .then(data => console.log(data))
      .catch(err => console.log('Error'))
    getFavs();
  }
  // Sends a delete request to remove a word from the favorite words list
  const deleteFav = () => {
    if (!input) {
      setInput("Must Type at least 1 letter")
      console.log("in get Words")
      return;
    }
    fetch(apiURL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: input
      })
    }).then(res => {
      return res.json
    })
      .then(data => console.log(data))
      .catch(err => console.log('Error'))
    getFavs();
  }
  // sends get request with a query string of users inputed letters
  // the response is all possible word combonations with those letters
  const getWords = async () => {
    if (!input) {
      setInput("Must Type at least 1 letter")
      return;
    }
    if (input.length > 7) {
      await setInput(input.slice(0, 9))
    }
    console.log(input)
    fetch(apiURL + "/words?" + new URLSearchParams({
      letters: input.slice(0, 9)
    }))
      .then(res => res.json())
      .then(data => {
        if (!data) {
          console.log("no words found")
        }

        setWords(data.list);

        console.log(data.list)
      })
  }
  //updates the input field
  const handleChange = event => {
    setInput(event.target.value)
  }
  const [words, setWords] = useState([""]);
  const [input, setInput] = useState("")
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard words={words} getWords={getWords} />} />
            <Route path='/fav' element={<Favorites getFavs={getFavs} words={words} addFav={addFav} deleteFav={deleteFav} />} />
          </Routes>

          <input type="text" name="" id="" value={input} onChange={handleChange} />



        </div>
      </Router>
    </>
  );
}

export default App;
