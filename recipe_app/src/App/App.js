import './App.css';
import React from 'react';
import logo from '../logo.svg';
import getRecipes from '../MariaDB/RecipeRepository'

function App() {
  const [recipes, setRecipes] = React.useState();

//   React.useEffect(() => {
//     getRecipes().then(result => setRecipes(result));
//   }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
            {recipes}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
