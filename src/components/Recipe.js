import React from 'react'
import { MyConsumer } from '../context/MyContext'

const Recipe = (props) => {
    return (
        <MyConsumer>
            {context => {
                const recipe = context.recipes.find(r => r.id == props.match.params.id) 
                // console.log(context.recipes, 'recipes from context')
 
                return (
                    <div>
                        <h1 className='drink-title'>{recipe.name}</h1>
                        <hr/>
                        <div> 
                            <p className="ingredient" >{recipe.ingredient1}</p>
                            <p className="ingredient-amount">{recipe.amount1}</p>
                        </div>
                        <div>
                            <p className="ingredient" >{recipe.ingredient2}</p>
                            <p className="ingredient-amount">{recipe.amount2}</p>
                        </div>
                        <div>
                            <p className="ingredient" >{recipe.ingredient3}</p>
                            <p className="ingredient-amount">{recipe.amount3}</p>
                        </div>
                        <div>
                            <p className="ingredient" >{recipe.ingredient4}</p>
                            <p className="ingredient-amount">{recipe.amount4}</p>
                        </div>
                        <div>
                            <h3 className='drink-instructions' >{recipe.instructions}</h3>
                        </div>
                        <div>
                            <p className='drink-notes' >{recipe.notes}</p>
                        </div>
                    </div>
                )
            }}
        </MyConsumer>
    )
}  

export default Recipe
