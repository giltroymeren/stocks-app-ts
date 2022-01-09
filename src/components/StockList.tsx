import React, { useContext, useEffect } from 'react'
import StockContext from '../context/StockContext'

const StockList = () => {
  const { stockList, connectToServer } = useContext(StockContext)

  useEffect(() => {
    connectToServer()
  })

  if (stockList.length === 0) return <h3>Nothing to show...</h3>

  return (
    <>
      <table>
        <tbody>
          {stockList.map((item: string, index: number) => {
            return <tr key={index}><td>{item}</td></tr>
          })}
        </tbody>
      </table>
    </>
  )
}

export default StockList
