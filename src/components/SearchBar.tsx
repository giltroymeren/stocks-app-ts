import React, { useContext, useState } from 'react'
import StockContext from '../context/StockContext'

const SearchBar = () => {
  const { addStock } = useContext(StockContext)

  const [isin, setISIN] = useState('')

  const onChange = (event: any) => {
    setISIN(event.target.value)
  }

  const onClick = (event: any) => {
    event.preventDefault()
    addStock(isin)
    setISIN('')
  }

  return (
    <form>
      <input type="text"
        name="isin"
        placeholder='Enter the ISIN'
        value={isin}
        onChange={onChange} />
      <button onClick={onClick}>Check</button>
    </form>
  )
}

export default SearchBar
