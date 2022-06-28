import React from 'react'
import Display from '../components/Display'
import Button from '../components/Button'




function Dashboard({ words, getWords }) {
    return (
        <div className="row">
            <div className='col '>
                <h1>React Scrabble Cheater</h1>
                <p>Contians almost 300,000 scrabble legal words</p>
                <Display words={words} />
                <Button className="" text={"Get Words"} onClick={getWords} />
            </div>
        </div>
    )
}

export default Dashboard