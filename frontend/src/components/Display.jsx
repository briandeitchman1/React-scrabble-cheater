import React from 'react'
import Word from './Word'
const Display = ({ words }) => {
    const wordsList = []
    words.forEach((word, index) => {
        wordsList.push(<Word key={index} word={word} />)
        wordsList.push(" ")

    })
    return (
        <div>
            {wordsList}
        </div>

    )
}

export default Display