import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {ProductsCollection} from '../../shared/collections/ProductsCollection';
import Product from  '../components/ProductComponent';
import {CartCollection} from '../../shared/collections/CartCollection';

class Products extends React.Component {
   constructor(props) {
   super(props);
   this.onAddToCart = this.onAddToCart.bind(this);
 }
 onAddToCart(product){
  CartCollection.insert({
      'title' : product.title,
      'price' : product.price,
      'inventory' : product.inventory,
      'quantity': 1
   });
   // alert(product.title + ' added to your cart')
}
  render() {
    const { products } = this.props
    return (
      <div>
        <h3>Lista de productos</h3>
          <table class="mdl-data-table mdl-js-data-table">
              <thead>
              <tr>
                  <th>titulo</th>
                  <th>precio</th>
                  <th>inventory</th>
                  <th>button</th>
              </tr>
              </thead>
              <tbody>
                  {products.map(product =>
                  <Product
                    title={product.title}
                    price={product.price}
                    quantity={product.inventory}
                    key={product._id}
                    onAddToCart={() => this.onAddToCart(product)}
                  />
                )}
              </tbody>
          </table>
      </div>
    )
  }
}
export default createContainer(() => {
  return {
     products: ProductsCollection.find({}).fetch()
  };
}, Products);
