import React, { createContext, useCallback, useReducer, useRef } from "react"
import StockReducer, { ACTION_ADD_STOCK, ACTION_SET_CONNECTED, ACTION_SET_DISCONNECTED } from "./StockReducer";

const DEFAULT_URL = `ws://159.89.15.214:8080/`

export interface IStockContext {
  stockList: string[],
  isConnected: boolean,
  connectToServer: any,
  disconnectFromServer: any,
  subscribeToServer: any,
  unsubscribeFromServer: any,
  addStock: any,
}

const initialState = {
  stockList: [],
  isConnected: false,
  connectToServer: () => { },
  disconnectFromServer: () => { },
  subscribeToServer: () => { },
  unsubscribeFromServer: () => { },
  addStock: () => { },
}

const StockContext = createContext<IStockContext>(initialState)

export const StockProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(StockReducer, initialState)

  const webSocket = useRef<WebSocket>()

  const connectToServer = useCallback(() => {
    try {
      if (webSocket.current !== undefined && webSocket.current !== null) {
        if (webSocket.current.readyState !== WebSocket.CLOSED) {
          console.warn('Current WS existing')
          return;
        }
      }

      webSocket.current = new WebSocket(DEFAULT_URL);
      webSocket.current.onopen = function () {
        console.info('Connected to WS')
        setConnected()
      }
      webSocket.current.onmessage = function (event: any) {
        console.info('Receiving message')

        const data = JSON.parse(event.data)
        console.log(data)
        // TODO set data to UI
      }
      webSocket.current.onclose = function () {
        console.info('Disconnected from WS; attempting reconnection in 1 second... ')
        setDisconnected()

        setTimeout(() => connectToServer(), 1000)
      }
    } catch (event: any) {
      console.error(event.message)
    }
  }, [webSocket])

  // @ts-ignore
  const disconnectFromServer = () => webSocket.current.close()

  const subscribeToServer = (isin: string) => {
    try {
      if (webSocket.current !== undefined) {
        if (webSocket.current.readyState !== WebSocket.OPEN) return;

        console.info('Subscribing via WS')
        webSocket.current.send(
          JSON.stringify({ "subscribe": isin })
        )
      }
    } catch (error: any) {
      console.error(error.message)
    }
  }

  const unsubscribeFromServer = (isin: string) => {
    try {
      if (webSocket.current !== undefined) {
        if (webSocket.current.readyState !== WebSocket.OPEN) return;

        console.info('Unsubscribing from WS')
        webSocket.current.send(
          JSON.stringify({ "unsubscribe": isin })
        )
      }
    } catch (error: any) {
      console.error(error.message)
    }
  }

  const addStock = (isin: string) => {
    dispatch({
      type: ACTION_ADD_STOCK,
      payload: [...state.stockList, isin]
    })
  }

  const setConnected = () => dispatch({ type: ACTION_SET_CONNECTED })
  const setDisconnected = () => dispatch({ type: ACTION_SET_DISCONNECTED })

  return <StockContext.Provider
    value={{
      ...state,
      connectToServer,
      disconnectFromServer,
      subscribeToServer,
      unsubscribeFromServer,
      addStock,
    }}>
    {children}
  </StockContext.Provider>
}

export default StockContext