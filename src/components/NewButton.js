import React from 'react';
import { Link } from 'react-router-dom'

const NewButton = () => {
    return (
        <Link to={'/recipes/new'} >
            <button>Add new recipe here!</button>
        </Link>
        
    )
}

export default NewButton
