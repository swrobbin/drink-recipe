import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles= {
    display: 'inline-block',
    width: "50px",
    padding: "12", 
    margin: "0 6px 6px", 
    background: "gray", 
    textDecoration: "none", 
    color: "white"
};

const Navbar = () => {


    return (
        <div className='App-header' >
            <NavLink 
                exact to='/' 
                style={linkStyles}
                activeStyle={{
                    background:"blue"
                }}>
                <button>Home</button>
            </NavLink>
            
            <NavLink 
                exact to='/recipes'
                style={linkStyles}
                activeStyle={{
                    background:"blue"
                }}>
                <button>Drink Recipes</button>
            </NavLink>
            
        </div>
    )
}

export default Navbar
