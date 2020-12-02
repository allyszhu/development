import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';


class DisplayList extends Component {
    render() {
        const {
            handleAdd,
            handleDelete,
            filteredItems,
        } = this.props;
        return (
            <div>
                <div class="filler"></div>
                <div class="card-deck">
                    {filteredItems.map((drink) => (
                        <div class="col-md-3">
                        <div class="card v-100 h-100">
                            <div class="bg-image hover-overlay ripple" data-ripple-color="light">
            
                                <img class="img-fluid" src={drink.strDrinkThumb}></img>
                                <div class="card-body">
                                    <h5 class="card-title">{drink.strDrink}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{drink.strInstructions}</h6>
                                    <small class="text-muted">number of ingredients: {drink.numberOfIngredients}</small>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">{drink.strIngredient1}, {drink.strIngredient2}, {drink.strIngredient3}, {drink.strIngredient4}</small>
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
        )
    }
}

export default DisplayList;