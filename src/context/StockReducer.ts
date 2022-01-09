export const ACTION_ADD_STOCK = 'ADD_STOCK'

const StockReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION_ADD_STOCK:
      return {
        ...state,
        stockList: action.payload
      }
    default: return state
  }
}

export default StockReducer