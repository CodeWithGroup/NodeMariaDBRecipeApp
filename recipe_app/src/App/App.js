import './App.css';
import React from 'react';
import logo from '../logo.svg';

function App() {
    const [recipes, setRecipes] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:5000/api")
            .then(response => response.json())
            .then(results => {
                console.log(results);
                setRecipes(results.map(r => ({ id: r.id, name: r.name})));
            })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {recipes?.map(recipe =>
                    `Name: ${recipe.name}`
                )}
            </header>
        </div>
    );
}

export default App;
