export const ACTION_ADD_STOCK = 'ADD_STOCK'

export const ACTION_SET_CONNECTED = 'SET_CONNECTED'
export const ACTION_SET_DISCONNECTED = 'SET_DISCONNECTED'

const StockReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION_ADD_STOCK:
      return {
        ...state,
        stockList: action.payload
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