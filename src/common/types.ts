export interface IStockContext {
  stockList: IStockList,
  isConnected: boolean,
  connectToServer: any,
  disconnectFromServer: any,
  subscribeToServer: any,
  unsubscribeFromServer: any,
  addStock: any,
}

export interface IStockItem {
  isin: string,
  price: number,
  bid: number,
  ask: number
}

export interface IStockList extends Array<IStockItem> { }