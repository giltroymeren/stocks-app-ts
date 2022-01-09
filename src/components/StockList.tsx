import React, { useContext, useEffect } from 'react'
import StockItem from './StockItem'
import StockContext from '../context/StockContext'
import { IStockItem } from '../common/types'

const StockList = () => {
  const {
    stockList,
    isConnected,
    connectToServer,
    disconnectFromServer,
  } = useContext(StockContext)

  useEffect(() => {
    connectToServer()
  }, [stockList])

  return (
    <>
      {stockList.length === 0 ? <h3>Nothing to show...</h3> : (
        <table>
          <tbody>
            {stockList.map(stock => {
              return <StockItem key={stock.isin} stock={stock} />
            })}
          </tbody>
        </table>
      )}

      {isConnected ? <button onClick={() => disconnectFromServer()}>Disconnect</button> :
        <button onClick={() => connectToServer()}>Connect</button>}
    </>
  )
}

export default StockList
