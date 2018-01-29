import React, { Component, PropTypes } from 'react'

export default class CartItem extends Component {
  render() {
    const { title, price, onRemoveItem } = this.props
      return (
      <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onClick={onRemoveItem}>
                <i class="material-icons">add</i>
            </button>
        </td>
      </tr>
    )
  }
}
//
// CartItem.propTypes = {
//   title: PropTypes.string,
//   price: PropTypes.number,
//   onRemoveItem : PropTypes.func
//
// }
