import React from 'react'

interface IStockItem {
  isin: string
}

const StockItem = (props: IStockItem) => {
  const { isin } = props

  return (
    <tr>
      <td>{isin}</td>
    </tr>
  )
}

export default StockItem
