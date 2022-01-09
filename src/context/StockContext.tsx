import StockReducer, { ACTION_ADD_STOCK } from "./StockReducer";

const { createContext, useReducer } = require("react");

const StockContext = createContext()

export const StockProvider: React.FC = ({ children }) => {
  const initialState = {
    stockList: [],
  }

  const [state, dispatch] = useReducer(StockReducer, initialState)


  const addStock = (isin: string) => {
    dispatch({
      type: ACTION_ADD_STOCK,
      payload: [...state.stockList, isin]
    })
  }

  return <StockContext.Provider
    value={{
      stockList: state.stockList,

      addStock
    }}>
    {children}
  </StockContext.Provider>
}

export default StockContext