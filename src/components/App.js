import '../App.css';
import Navbar from './Navbar';
import Home from './Home';
import Recipes from './Recipes'
import RecipeForm from './RecipeForm';
import RecipeDetail from './RecipeDetail';
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/recipes' component={Recipes} />
        <Route path='/recipes/new' component={RecipeForm} />
        <Route path='/recipes/:id' component={RecipeDetail} />
      </Switch>
      </div>
    </Router>  
  );
}

export default App;
