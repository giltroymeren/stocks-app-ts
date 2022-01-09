import React, { useContext, useEffect } from 'react'
import StockContext from '../context/StockContext'

const StockList = () => {
  const {
    stockList,
    isConnected,
    connectToServer,
    disconnectFromServer
  } = useContext(StockContext)

  useEffect(() => {
    connectToServer()
  })

  return (
    <>
      {stockList.length === 0 ? <h3>Nothing to show...</h3> : (
        <table>
          <tbody>
            {stockList.map((item: string, index: number) => {
              return <tr key={index}><td>{item}</td></tr>
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
