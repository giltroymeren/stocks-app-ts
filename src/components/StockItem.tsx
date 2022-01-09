import React, { useContext } from 'react'
import { IStockItem } from '../common/types'
import StockContext from '../context/StockContext'

const StockItem = ({ ...props }) => {
  const { isin, price, bid, ask } = props.stock

  const { subscribeToServer, unsubscribeFromServer } = useContext(StockContext)

  // TODO unique subscribe & unsubscribe action listeners? for each stock
  return (
    <tr>
      <td>{isin}</td>
      <td>{price.toFixed(2)}</td>
      <td>{bid.toFixed(2)}</td>
      <td>{ask.toFixed(2)}</td>
      <td>
        <button onClick={() => subscribeToServer(isin)}>SUB</button>
      </td>
      <td>
        <button onClick={() => unsubscribeFromServer(isin)}>UNSUB</button>
      </td>
    </tr>
  )
}

export default StockItem
