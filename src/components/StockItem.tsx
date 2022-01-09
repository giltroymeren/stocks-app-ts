import React, { useContext } from 'react'
import { IStockItem } from '../common/types'
import StockContext from '../context/StockContext'

const StockItem = ({ ...props }) => {
  const { isin, price } = props.stock

  const { subscribeToServer, unsubscribeFromServer } = useContext(StockContext)

  // TODO unique subscribe & unsubscribe action listeners? for each stock
  return (
    <tr>
      <td>{isin}</td>
      <td>{price}</td>
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
