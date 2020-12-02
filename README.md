# Features

This project is a website that displays a list of beverages. You can filter the drinks displayed by ingredients and liquor type. Furthermore, there is sorting feature that allows you to display list by number of ingredients. You can also add drinks to shopping cart, which will aggregate the total number of ingredient units you will require. 

# Organization of components
This project was bootstrapped with React and uses Boostrap CSS. It comprises of the main App and two main components: DisplayList and navbar. 
The main App holds all functions that process data and trigger state changes, touched on more below. 
Navbar on top holds all filter and sort features through buttons and dropdown menu components, in addition to the shopping cart - which is an extension of the dropdown component available in boostrap. Displaylist shows the main body of drinks, which is listed in grid style through the Bootstrap CSS.

# How data is passed down through components
Data is first retrieved through the API, 'theCocktailDB'. 
It is added to the local database ('state.drinks'). This list is never changed. However, another 'state.ilteredItems' list holds a copy of the drinks database. This filteredItems list is what is modified when filters and sorting features are applied. This information is changed through the 'this.state' call, which is handled within functions within App.js.
One notable data addition is the drink.key. This is assigned to a drink when it is added to the cart. This allows for it to be filtered and removed from cart. 

# How the user trigger state changes
This data resides within App.js, which is passed to the respective components along with the functions that can change these states. 
For example, functions like 'handleAdd', 'handleRemove' are passed into the Displaylist so each drink item can be added or removed from the cart. Functions like 'changeIngredientState' and 'changeLiquorState' are passed into Navbar so the filters can change the drinks shown in Displaylist. Specific functionalities of functions are written in specific code comments. 
