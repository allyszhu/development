import React, { Component } from "react";
import './App.css';
import Navbar from './components/navbar';
import DisplayList from "./components/DisplayList"


var url3 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m";

/* This is the main App class. It handles all data storage and all functions, which are passed to respective components.
*/
class App extends Component {

  state = {
    ingredient: "",
    total: "0",
    liquor: "",
    order: [
    ],
    drinks: [],
    filteredItems: [],
    currentItem: {
      strDrinkThumb: "",
      strDrink: "",
      strInstructions: "",
      strIngredient1: "",
      strIngredient2: "",
      strIngredient3: "",
      strIngredient4: "",
      key: "",
      numberOfIngredients: "",
    }
  }

  componentDidMount() {
    fetch(url3)
      .then(res => res.json())
      .then((data) => {
        this.setState({ drinks: data.drinks })
        for (var i = 0; i < data.drinks.length; i++) {
          this.checkNumberIngredients(data.drinks[i])
        }
        this.setState({ filteredItems: data.drinks })
      })
      .catch(console.log)
  }

  //handleAdd: function that handles adding drink to cart
  handleAdd = drink => {
    const drinkInOrder = {...drink};
    drinkInOrder.key = Date.now();
    const items = [...this.state.order, drinkInOrder];
    this.setState({ order: items });
    const newTotal = +this.state.total + +drink.numberOfIngredients
    this.setState({total: newTotal})
  };
  //handleDelete: function that handles removing drink to cart
  handleRemove = drink => {
    console.log(drink.key);
    const items = this.state.order.filter(drinkInOrder => drinkInOrder.key != drink.key);
    this.setState({ order: items });
    const newTotal = +this.state.total - +drink.numberOfIngredients
    this.setState({total: newTotal})
  }
  //handleFilter: function that handles filtering drinks on display 
  handleFilter = (ingredient, liquor) => {
    const filtered = this.state.drinks.filter(drink => (drink.strIngredient1.includes(`${liquor}`) || drink.strIngredient2.includes(`${liquor}`)) && (drink.strIngredient1.includes(`${ingredient}`) || drink.strIngredient2.includes(`${ingredient}`)));
    this.setState({ filteredItems: filtered })
  }
  //changeLiquorState: function that changes liquor state for filter
  changeIngredientState = state => {
    this.setState({ ingredient: state })
  }
  //changeIngredientState: function that changes ingredient state for filter
  changeLiquorState = state => {
    this.setState({ liquor: state })
  }
  //handleSort: function that handles sorting by number of ingredients
  handleSort = order => {
    var sorted = this.state.filteredItems;
    if (order == "L") {
      sorted = this.state.filteredItems.sort((a,b) => a.numberOfIngredients - b.numberOfIngredients )
    }
    if (order == "H") {
      sorted = this.state.filteredItems.sort((a,b) => b.numberOfIngredients - a.numberOfIngredients )
    }

    this.setState({filteredItems: sorted})
  }


  //function that checks for number of ingredients called in the beginning when data is first mounted
  checkNumberIngredients = drink => {
    if (drink.strIngredient2 == null) {
      drink.numberOfIngredients = 1;
    } else {
      if (drink.strIngredient3 == null) {
        drink.numberOfIngredients = 2;
      } else {
        if (drink.strIngredient4 == null) {
          drink.numberOfIngredients = 3;
        } else {
          drink.numberOfIngredients = 4;
        }
      }
    }
  }


  render() {
    return (
      <div className="App">
        <Navbar
          handleAdd={this.handleAdd}
          handleDelete={this.handleRemove}
          handleFilter={this.handleFilter}
          order={this.state.order}
          ingredient={this.state.ingredient}
          liquor={this.state.liquor}
          changeIngredientState={this.changeIngredientState}
          changeLiquorState={this.changeLiquorState}
          handleSort={this.handleSort}
          total={this.state.total}
        />
        <DisplayList
          handleAdd={this.handleAdd}
          handleDelete={this.handleRemove}
          filteredItems={this.state.filteredItems}
        />
      </div>
    );
  }
}

export default App;
