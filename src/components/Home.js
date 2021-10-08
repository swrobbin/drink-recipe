import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

    



    return (
        <div>
            <h1>Drinker's Dream</h1>
            <hr/>
            <p>Welcome to Drinker's Dream, a place to view and add your own cocktail recipes.</p>
            <Link to='/recipes'> <button>To view recipes, click here!</button> </Link>
            
        </div>
    )
}

export default Home
