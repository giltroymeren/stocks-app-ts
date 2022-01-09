import React, { useContext, useState } from 'react'
import StockContext from '../context/StockContext'

const SearchBar = () => {
  const { addStock, subscribeToServer } = useContext(StockContext)

  const [isin, setISIN] = useState('')

  const onChange = (event: any) => {
    setISIN(event.target.value)
  }

  const onClick = (event: any) => {
    event.preventDefault()
    addStock(isin)
    subscribeToServer(isin)
    setISIN('')
  }

  return (
    <div className='d-flex justify-content-center'>
      <form className='form-inline m-4 align-items-center'>
        <label htmlFor="isin"
          className="my-1 mr-2">ISIN
        </label>

        <input type="text"
          name="isin"
          className='form-control my-1 mr-2'
          placeholder='Enter the ISIN'
          value={isin}
          onChange={onChange} />

        <button onClick={onClick}
          className='btn btn-primary my-1'>
          Check
        </button>
      </form>
    </div>
  )
}

export default SearchBar
