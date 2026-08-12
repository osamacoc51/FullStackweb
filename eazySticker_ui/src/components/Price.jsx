import React from 'react'

export default function Price({ currency, price }) {
  return (
    <div className="product-card-price">
      <>
      {currency}
      <span>{price}</span> 
      </>
    </div>
  )
}
