import React from 'react'
import Button from '../components/Button'
import Display from '../components/Display'

function Favorites({ getFavs, words, addFav, deleteFav }) {
    return (

        <div>
            <Display words={words} />
            <Button className="btn" text={"Get Favs"} onClick={getFavs} />
            <Button text={"add Fav"} onClick={addFav}></Button>
            <Button text={"delete Fav"} onClick={deleteFav}></Button>
        </div>
    )
}

export default Favorites