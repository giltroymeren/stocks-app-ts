import './App.css';
import SearchBar from './components/SearchBar'
import StockList from './components/StockList'
import { StockProvider } from './context/StockContext'

function App() {
  return (
    <StockProvider>
      <h1>Stocks App</h1>

      <SearchBar />
      <StockList />
    </StockProvider>
  );
}

export default App;
