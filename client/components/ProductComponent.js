import React, { PropTypes } from 'react'

export default class Product extends React.Component {
  render() {
    const { price, inventory, title, onAddToCart } = this.props;

    return (
              <tr>
                  <td>{title}</td>
                  <td>{price}</td>
                  <td>{inventory ? `Current inventory ${inventory}` : null} </td>
                  <td>
                    <button  class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onClick={onAddToCart}>
                        <i class="material-icons">add</i>
                    </button>
                  </td>
              </tr>

     )

  }
}

// Product.propTypes = {
//   price: PropTypes.number,
//   inventory: PropTypes.number,
//   title: PropTypes.string,
//   onAddToCart: PropTypes.func
// }
