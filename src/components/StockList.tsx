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
      <div className='d-flex justify-content-center table-responsive'>
        {stockList.length === 0 ?
          (
            <div className='card'>
              <div className="card-body text-primary">
                <h5 className="card-title">No stocks available</h5>
                <p className="card-text">Add some ISINs to start!</p>
              </div>
            </div>
          ) :
          (
            <table className='table table-striped table-hover'>
              <thead>
                <tr>
                  <th scope="col">ISIN #</th>
                  <th scope="col">Price</th>
                  <th scope="col">Bid</th>
                  <th scope="col">Ask</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {stockList.map(stock => {
                  return <StockItem key={stock.isin} stock={stock}
                    isConnected={isConnected} />
                })}
              </tbody>
            </table>
          )}
      </div>

      <div className='d-flex justify-content-center m-4'>
        {isConnected ?
          <button onClick={() => disconnectFromServer()}
            className='btn btn-outline-danger'>Disconnect</button> :
          <button onClick={() => connectToServer()}
            className='btn btn-outline-primary'>Connect</button>}
      </div>
    </>
  )
}

export default StockList
