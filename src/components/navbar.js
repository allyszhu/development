
import React from 'react'
import { Component } from 'react'
import Button from 'react-bootstrap/Button';


class Navbar extends Component {
    render() {
        const {
            handleAdd,
            handleDelete,
            handleFilter,
            order,
            reset,
            ingredient,
            liquor,
            changeLiquorState,
            changeIngredientState,
            handleSort,
            total,
        } = this.props;
        var liq = "";
        var ing = "";
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Skål and Bones</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Ingredients</a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" onClick={() => { ing = ""; handleFilter(ing, liquor); changeIngredientState(ing) }}>All</a>
                                    <a class="dropdown-item" onClick={() => { ing = "ime"; handleFilter(ing, liquor); changeIngredientState(ing) }}>Lime</a>
                                    <a class="dropdown-item" onClick={() => { ing = "uice"; handleFilter(ing, liquor); changeIngredientState(ing) }}>Juice</a>
                                    <a class="dropdown-item" onClick={() => { ing = "yrup"; handleFilter(ing, liquor); changeIngredientState(ing) }}>Syrup</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Liquor</a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" onClick={() => { liq = ""; handleFilter(ingredient, liq); changeLiquorState(liq) }}>All</a>
                                    <a class="dropdown-item" onClick={() => { liq = "equila"; handleFilter(ingredient, liq); changeLiquorState(liq) }}>Tequila</a>
                                    <a class="dropdown-item" onClick={() => { liq = "odka"; handleFilter(ingredient, liq); changeLiquorState(liq) }}>Vodka</a>
                                    <a class="dropdown-item" onClick={() => { liq = "um"; handleFilter(ingredient, liq); changeLiquorState(liq) }}>Rum</a>
                                    <a class="dropdown-item" onClick={() => { liq = "ermouth"; handleFilter(ingredient, liq); changeLiquorState(liq) }}>Vermouth</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sort by number of Ingredients</a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" onClick={() => handleSort("L")}>Low to High</a>
                                    <a class="dropdown-item" onClick={() => handleSort("H")}>High to Low</a>
                                </div>
                            </li>
                        </ul>
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Your Order</a>
                            <div class="dropdown-menu cart" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Your Cart</a>
                                <a class="dropdown-item" href="#">Number of ingredient units: {total}</a>
                                {/*THIS IS WHERE THE CART BEGINS*/}
                                <div>
                                    <div class="filler"></div>
                                    <div class="card-deck"
                                        disabled={order.value === 0 ? "is empty" : ""}
                                    >
                                        {order.map((drink) => (
                                            <div class="col-md-4">
                                                <div class="card v-50 h-50">
                                                    <div class="bg-image hover-overlay ripple" data-ripple-color="light">
                                                        <img class="img-fluid" src={drink.strDrinkThumb}></img>
                                                        <div class="card-body">
                                                            <h6 class="card-subtitle mb-2 text-muted">{drink.strDrink}</h6>
                                                            <small class="text-muted">number of ingredients: {drink.numberOfIngredients}</small>
                                                        </div>
                                                        <div class="card-footer">
                                                            <div></div>
                                                            <Button type="button"
                                                                className="btn btn-light"
                                                                onClick={() => handleAdd(drink)}>Add</Button>
                                                            <Button type="button"
                                                                className="btn btn-light"
                                                                onClick={() => handleDelete(drink)}>Remove</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/*THIS IS WHERE THE CART ENDS*/}

                            </div>
                        </div>
                    </div>

                </nav>
            </div>

        )
    }
};

export default Navbar