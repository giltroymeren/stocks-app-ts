import React, { useContext } from 'react'
import StockContext from '../context/StockContext'

const StockItem = ({ ...props }) => {
  const { isin, price, bid, ask } = props.stock
  const {
    subscribeToServer,
    unsubscribeFromServer,
    removeStock,
  } = useContext(StockContext)

  const onSubscribe = () => {
    subscribeToServer(isin)
  }

  const onUnsubscribe = () => {
    unsubscribeFromServer(isin)
  }

  const onRemove = () => {
    unsubscribeFromServer(isin)
    removeStock(isin)
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
              className='btn btn-sm btn-outline-primary'>SUB</button>
          </td>
          <td>
            <button onClick={onUnsubscribe}
              className='btn btn-sm btn-outline-primary'>UNSUB</button>
          </td>
          <td>
            <button onClick={onRemove}
              className='btn btn-sm btn-outline-dark'>REMOVE</button>
          </td>
        </>
      )}
    </tr>
  )
}

export default StockItem
