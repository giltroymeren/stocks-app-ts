import React, { createContext, useReducer, useRef } from "react"
import StockReducer, { ACTION_ADD_STOCK } from "./StockReducer";

const DEFAULT_URL = `ws://159.89.15.214:8080/`

export interface IStockContext {
  stockList: string[],
  connectToServer: any,
  addStock: any,
}

const initialState = {
  stockList: [],
  connectToServer: () => {},
  addStock: () => { },
}

const StockContext = createContext<IStockContext>(initialState)

export const StockProvider: React.FC = ({ children }) => {

  const [state, dispatch] = useReducer(StockReducer, initialState)

  const webSocket = useRef<any>()

  const connectToServer = () => {
    try {
      if (webSocket.current !== undefined && webSocket.current !== null) {
        return;
      }

      webSocket.current = new WebSocket(DEFAULT_URL);
      webSocket.current.onopen = function () {
        console.info('Connected to WS')
        // TODO setConnected()
      }
      webSocket.current.onmessage = function (event: any) {
        console.info('Receiving message')
        // TODO const data = JSON.parse(event.data)
      }
      webSocket.current.onclose = function () {
        console.info('Disconnected from WS; attempting reconnection in 1 second... ')
        // TODO setDisconnected()

        setTimeout(() => connectToServer(), 1000)
      }
    } catch (event: any) {
      console.error(event.message)
    }
  }

  const addStock = (isin: string) => {
    dispatch({
      type: ACTION_ADD_STOCK,
      payload: [...state.stockList, isin]
    })
  }

  return <StockContext.Provider
    value={{
      stockList: state.stockList,
      connectToServer,
      addStock,
    }}>
    {children}
  </StockContext.Provider>
}

export default StockContext