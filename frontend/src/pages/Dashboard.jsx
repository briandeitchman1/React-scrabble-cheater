import React from 'react'
import Display from '../components/Display'
import Button from '../components/Button'




function Dashboard({ words, getWords }) {
    return (
        <div>
            <h1>React Scrabble Cheater</h1>
            <p>Contians almost 300,000 scrabble legal words</p>
            <Display words={words} />
            <p>Type your letters here</p>
            <Button className="btn" text={"Get Words"} onClick={getWords} />
        </div>
    )
}

export default Dashboard