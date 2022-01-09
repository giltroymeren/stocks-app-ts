import React, { useContext, useEffect } from 'react'
import StockContext from '../context/StockContext'

const StockItem = ({ ...props }) => {
  const { isin, price, bid, ask } = props.stock
  const { subscribeToServer, unsubscribeFromServer } = useContext(StockContext)

  const onSubscribe = () => {
    subscribeToServer(isin)
  }

  const onUnsubscribe = () => {
    unsubscribeFromServer(isin)
  }

  // TODO disable sub/unsub buttons
  return (
    <tr>
      <td><strong>{isin}</strong></td>
      <td>{price.toFixed(2)}</td>
      <td>{bid.toFixed(2)}</td>
      <td>{ask.toFixed(2)}</td>
      {props.isConnected && (
        <>
          <td>
            <button onClick={onSubscribe}
              className='btn btn-sm btn-outline-success'>SUB</button>
          </td>
          <td>
            <button onClick={onUnsubscribe}
              className='btn btn-sm btn-outline-dark'>UNSUB</button>
          </td>
        </>
      )}
    </tr>
  )
}

export default StockItem
