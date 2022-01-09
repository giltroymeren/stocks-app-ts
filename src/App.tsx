import './App.css';
import SearchBar from './components/SearchBar'
import { StockProvider } from './context/StockContext'

function App() {
  return (
    <StockProvider>
      <h1>Stocks App</h1>

      <SearchBar />
    </StockProvider>
  );
}

export default App;
