import React from 'react'
import Word from './Word'

const Display = ({ words }) => {
    const wordsList = []
    words.forEach((word, index) => {
        wordsList.push(<Word key={index} word={word} />)
        wordsList.push(" ")

    })
    return (
        <div className='display' style={{ columnCount: 1, columnRuleWidth: 3, columnRuleStyle: "solid", columnRuleColor: "lightblue", columnFill: "balance" }}>
            {wordsList}
        </div>

    )
}

export default Display