import React, { useState, useContext } from 'react'
import { MyConsumer } from '../context/MyContext'

const RecipeForm = (props) => {
    const [recipe, setRecipe] = useState({
            name: "",
            ingredient1: "",
            amount1: "", 
            ingredient2: "",
            amount2: "", 
            ingredient3: "",
            amount3: "", 
            ingredient4: "",
            amount4: "",
            instructions: "",
            notes: "" 
    })
    
    
    return (
        <MyConsumer>
            {context => {  
            const handleChange = (e) => {
                setRecipe({
                    ...recipe, [e.target.name]: e.target.value
                }
            )}
            const handleSubmit = (e) => {
                e.preventDefault()
                fetch("http://localhost:3001/recipes", {
                    method:"POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(recipe)
                })
                .then(r => r.json())
                .then(data => console.log(data, 'from POST'),
                    context.addRecipe(data)
                // props.history.push('/recipes')
                )
        }  
            console.log(context.value, 'value')
                return (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <hr/>
                            <label>Name:</label>
                            <input name="name" onChange={handleChange} type="text"/><br/>
                            <label>Ingredient:</label>
                            <input name="ingredient1" onChange={handleChange} type="text"/><br/>
                            <label>Amount:</label>
                            <input name="amount1" onChange={handleChange} type="text"/><br/>
                            <label>Ingredient:</label>
                            <input name="ingredient2" onChange={handleChange} type="text"/><br/>
                            <label>Amount:</label>
                            <input name="amount2" onChange={handleChange} type="text"/><br/>
                            <label>Ingredient:</label>
                            <input name="ingredient3" onChange={handleChange} type="text"/><br/>
                            <label>Amount:</label>
                            <input name="amount3" onChange={handleChange} type="text"/><br/>
                            <label>Ingredient:</label>
                            <input name="ingredient4" onChange={handleChange} type="text"/><br/>
                            <label>Amount:</label>
                            <input name="amount4" onChange={handleChange} type="text"/><br/>
                            <label>Instructions:</label>
                            <textarea name="instructions" onChange={handleChange} type="text"/><br/>
                            <label>Notes:</label>
                            <textarea name="notes" onChange={handleChange} type="text"/><br/>
                            <input type="submit" />
                        </form>  
                    </div>
        )
    }}
    </MyConsumer>
    )
}

export default RecipeForm
