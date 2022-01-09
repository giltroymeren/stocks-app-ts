import './App.css';
import SearchBar from './components/SearchBar'
import StockList from './components/StockList'
import Footer from './components/Footer'
import { StockProvider } from './context/StockContext'

function App() {
  return (
    <StockProvider>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Stocks App</span>
      </nav>

      <main className='container w-75'>
        <SearchBar />
        <StockList />
      </main>

      <Footer />
    </StockProvider>
  );
}

export default App;
