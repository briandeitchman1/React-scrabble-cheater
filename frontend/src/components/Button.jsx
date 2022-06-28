import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <button className='btn btn-dark' onClick={onClick}>{text}</button>
    )
}

export default Button