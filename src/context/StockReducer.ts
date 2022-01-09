import { IStockItem } from "../common/types"

export const ACTION_ADD_STOCK = 'ADD_STOCK'
export const ACTION_UPDATE_STOCK_LIST = 'UPDATE_STOCK_LIST'

export const ACTION_SET_CONNECTED = 'SET_CONNECTED'
export const ACTION_SET_DISCONNECTED = 'SET_DISCONNECTED'

const StockReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION_ADD_STOCK:
      return {
        ...state,
        stockList: [...state.stockList, action.payload]
      }

    case ACTION_UPDATE_STOCK_LIST:
      const data = action.payload
      const newList = state.stockList.map((stock: IStockItem) => {
        if (stock.isin === data.isin) {
          stock.price = data.price
          stock.bid = data.bid
          stock.ask = data.ask
        }
        return stock
      })

      return {
        ...state,
        stockList: newList
      }

    case ACTION_SET_CONNECTED:
      return {
        ...state,
        isConnected: true
      }

    case ACTION_SET_DISCONNECTED:
      return {
        ...state,
        isConnected: false
      }

    default: return state
  }
}

export default StockReducer