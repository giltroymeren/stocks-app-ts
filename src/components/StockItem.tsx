import React, { useContext } from 'react'
import StockContext from '../context/StockContext'

interface IStockItem {
  isin: string
}

const StockItem = (props: IStockItem) => {
  const { isin } = props

  const { subscribeToServer, unsubscribeFromServer } = useContext(StockContext)

  return (
    <tr>
      <td>{isin}</td>
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
