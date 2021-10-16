import React from 'react'
import { Link } from 'react-router-dom'


const RecipeLink = ({recipe}) => {
                return (  
                    <>
                        <Link to={`/recipes/${recipe.id}`}>
                            {recipe.name}
                        </Link>
                        <br/>
                    </>
                )
}
export default RecipeLink