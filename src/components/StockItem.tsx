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
      <td>{isin}</td>
      <td>{price.toFixed(2)}</td>
      <td>{bid.toFixed(2)}</td>
      <td>{ask.toFixed(2)}</td>
      {props.isConnected && (
        <>
          <td>
            <button onClick={onSubscribe}>SUB</button>
          </td>
          <td>
            <button onClick={onUnsubscribe}>UNSUB</button>
          </td>
        </>
      )}

    </tr>
  )
}

export default StockItem
