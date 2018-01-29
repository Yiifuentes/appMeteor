import React from 'react';
import Products from  './ProductsContainer';
import Cart from  './CartContainer';

class App extends React.Component {
  render() {
    return (
       <div class="mdl-card mdl-cell mdl-cell--12-col">
              <div class="mdl-card__supporting-text">
                  <h3>Store</h3>
           </div>
        <Products/>
        <Cart/>
      </div>
    )
  }
}
export default App;

