
import React from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryItem from './components/categories/CategoryItem';

class App extends React.PureComponent {

  render() {

    const categories = ['Cacti', 'Tillandsia', 'Succulents', 'Orchids'];

    return (

      <div className="app-container">
        {
          categories.map((item) => <CategoryItem category={item} label="category" key={item} />)
        }

      </div>
    )
  }
}

export default App;


