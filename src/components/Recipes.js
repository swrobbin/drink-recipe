import React from 'react'
import NewButton from './NewButton'
import RecipeLink from './RecipeLink'
import { MyConsumer } from '../context/MyContext'



const Recipes = () => {
    return (
        <MyConsumer>
            {context => {
                // console.log(recipes, 'from context')
                const list = context.recipes.map((r) => {
                    return (<li key={r.id}><RecipeLink recipe={r} /></li> )
                })  
                return (
                    <div> 
                        <p>Recipes</p>
                        <hr/>
                        <div>
                            <p>List:</p>
                            <ul>
                            {list}
                            </ul>
                            
                            <br/>
                            <br/>
                            <NewButton/>
                        </div>
                            
                    </div>
                )
            }}
        </MyConsumer>
    ) 
} 

export default Recipes
  