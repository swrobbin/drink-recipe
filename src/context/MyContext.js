import React, { useState, useEffect } from 'react'

const MyContext = React.createContext()

const MyProvider = (props) => {
    const [recipes, setRecipes] = useState([])
    // console.log(recipes, 'before')

    useEffect(() => {
        fetch("http://localhost:3001/recipes")
        .then(r => r.json())
        .then(data => {
            // console.log(data, 'data from fetch')
            setRecipes(data) 
        })
    }, []);

    const addRecipe = (data) => {
        setRecipes(data)
    }

    // console.log(recipes, 'after')
    return (
        <MyContext.Provider value={{
            recipes: recipes,
            addRecipe: addRecipe
        }}>
            {props.children}
        </MyContext.Provider>    
    )
}
const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }
