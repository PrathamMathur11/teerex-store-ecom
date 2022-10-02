import { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.scss'
import styled from 'styled-components'
import ProductsList from './ProductsList'

const Home = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [filterData, setFilterData] = useState([])
  const [query, setQuery] = useState('')

  const keys = ['color', 'name', 'type', 'gender']

  const HandleSearch = data => {
    const input = query.toLowerCase()
    return data.filter(item =>
      keys.some(key => item[key].toLowerCase().startsWith(input.toLowerCase()))
    )
  }

  // data fetching using axios
  useEffect(() => {
    axios(
      'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json'
    )
      .then(response => {
        setProducts(response.data)
        setFilterData(response.data)
        setError(null)
      })
      .catch(setError)
  }, [])

  function filterMyData (val) {
    if (val === 'men') {
      let filteredData = products.filter(data => {
        return data.gender === 'Men'
      })
      setFilterData(filteredData)
    } else if (val === 'women') {
      let filteredData = products.filter(data => {
        return data.gender === 'Women'
      })
      setFilterData(filteredData)
    } else if (val === 'red') {
      let filteredData = products.filter(data => {
        return data.color === 'Red'
      })
      setFilterData(filteredData)
    } else if (val === 'black') {
      let filteredData = products.filter(data => {
        return data.color === 'Black'
      })
      setFilterData(filteredData)
    } else if (val === 'blue') {
      let filteredData = products.filter(data => {
        return data.color === 'Blue'
      })
      setFilterData(filteredData)
    } else if (val === 'green') {
      let filteredData = products.filter(data => {
        return data.color === 'Green'
      })
      setFilterData(filteredData)
    } else if (val === 'polo') {
      let filteredData = products.filter(data => {
        return data.type === 'Polo'
      })
      setFilterData(filteredData)
    } else if (val === 'hoodie') {
      let filteredData = products.filter(data => {
        return data.type === 'Hoodie'
      })
      setFilterData(filteredData)
    } else if (val === 'basic') {
      let filteredData = products.filter(data => {
        return data.type === 'Basic'
      })
      setFilterData(filteredData)
    } else {
      setFilterData(products)
    }
    // console.log(products)
  }
  // console.log(filterData)

  if (error) return <p>An error occurred</p>

  return (
    <div className='main-container'>
      <div className='search-container'>
        <input
          type='text'
          className='search'
          placeholder='Search for products...'
          onChange={e => setQuery(e.target.value)}
        />
        <SearchButton>
          <img
            src='https://img.icons8.com/ios-glyphs/30/000000/search--v1.png'
            alt='search'
          />
        </SearchButton>
        <div className='filter-section'>
          <FilterButton className='filter-button'>
            <img
              src='https://img.icons8.com/ios/30/000000/filter--v1.png'
              alt='filter'
            />
          </FilterButton>
          <input type='radio' name='slider' id='filter-btn' />
        </div>
      </div>
      <div className='catalog-section'>
        <div className='filters-container'>
          <div className='inner-filters-container'>
            <div id='CLOSE-BTN-C'>
              <input type='radio' name='slider' id='CLOSE-BTN-C' />
              <label htmlFor='CLOSE-BTN-C' className='btn CLOSE-BTN-C'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  fill='black'
                  className='bi bi-x-lg'
                  viewBox='0 0 15 15'
                >
                  <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
                </svg>
              </label>
            </div>
            <div className='color-filter'>
              <div className='checkbox'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  fill='red'
                  className='bi bi-x-lg'
                  viewBox='0 0 15 15'
                >
                  <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
                </svg>
                <input
                  type='checkbox'
                  id='customcheckbox'
                  value='all'
                  className='checkbox'
                  name='customcheckbox'
                  onChange={() => filterMyData('clearall')}
                />
                <label htmlFor='customcheckbox' style={{ color: 'red' }}>
                  Clear All
                </label>
              </div>
              <h3>Color</h3>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='customcheckbox1'
                  value='red'
                  className='checkbox'
                  name='customcheckbox1'
                  onChange={() => filterMyData('red')}
                />
                <label htmlFor='customcheckbox1'>Red</label>
              </div>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='customcheckbox2'
                  value='black'
                  className='checkbox'
                  name='customcheckbox2'
                  onChange={e => filterMyData(e.target.value)}
                />
                <label htmlFor='customcheckbox2'>Black</label>
              </div>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='customcheckbox3'
                  value='blue'
                  className='checkbox'
                  name='customcheckbox3'
                  onChange={() => filterMyData('blue')}
                />
                <label htmlFor='customcheckbox3'>Blue</label>
              </div>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='customcheckbox4'
                  value='green'
                  className='checkbox'
                  name='customcheckbox4'
                  onChange={() => filterMyData('green')}
                />
                <label htmlFor='customcheckbox4'>Green</label>
              </div>
            </div>
            <div className='gender-filter'>
              <h3>Gender</h3>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='customcheckbox5'
                  value='men'
                  className='checkbox'
                  name='customcheckbox5'
                  onChange={() => filterMyData('men')}
                />
                <label htmlFor='customcheckbox5'>Men</label>
              </div>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='customcheckbox6'
                  value='women'
                  className='checkbox'
                  name='customcheckbox6'
                  onChange={() => filterMyData('women')}
                />
                <label htmlFor='customcheckbox6'>Women</label>
              </div>
            </div>
            <div className='price-filter'>
              <h3>Price</h3>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='customcheckbox7'
                  value=''
                  className='checkbox'
                  name='customcheckbox7'
                  onClick={() => {
                    const priceFilteredData = products.filter(item => {
                      return item.price >= 0 && item.price <= 250
                    })
                    setFilterData(priceFilteredData)
                  }}
                />
                <label htmlFor='customcheckbox7'>Rs 0 - 250</label>
              </div>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='customcheckbox8'
                  value=''
                  className='checkbox'
                  name='customcheckbox8'
                  onClick={() => {
                    const priceFilteredData = products.filter(item => {
                      return item.price > 250 && item.price <= 450
                    })
                    setFilterData(priceFilteredData)
                  }}
                />
                <label htmlFor='customcheckbox8'>Rs 251-450</label>
              </div>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='customcheckbox9'
                  value=''
                  className='checkbox'
                  name='customcheckbox9'
                  onClick={() => {
                    const priceFilteredData = products.filter(item => {
                      return item.price > 450
                    })
                    setFilterData(priceFilteredData)
                  }}
                />
                <label htmlFor='customcheckbox9'> More than Rs 450</label>
              </div>
            </div>
            <div className='type-filter'>
              <h3>Type</h3>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='customcheckbox10'
                  value='polo'
                  className='checkbox'
                  name='customcheckbox10'
                  onChange={() => filterMyData('polo')}
                />
                <label htmlFor='customcheckbox10'>Polo</label>
              </div>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='customcheckbox11'
                  value='hoodie'
                  className='checkbox'
                  name='customcheckbox11'
                  onChange={() => filterMyData('hoodie')}
                />
                <label htmlFor='customcheckbox11'>Hoodie</label>
              </div>
              <div className='checkbox'>
                <input
                  type='checkbox'
                  id='customcheckbox12'
                  value='basic'
                  className='checkbox'
                  name='customcheckbox12'
                  onChange={() => filterMyData('basic')}
                />
                <label htmlFor='customcheckbox12'>Basic</label>
              </div>
            </div>
          </div>
        </div>
        <div className='product-section'>
          <ProductsList data={HandleSearch(filterData)} />
        </div>
      </div>
    </div>
  )
}

export default Home

const Button = styled.button`
  background-color: black;
  margin-right: 10px;
  border-radius: 4px;
  padding: 2px 10px 0;
  cursor: pointer;
  img {
    ${'' /* width: 25px; */}
    filter: invert(1);
  }

  &:hover {
    transition: all 0.5s ease;
    scale: 1.05;
    background-color: white;

    img {
      filter: invert(0);
    }
  }
`

const SearchButton = styled(Button)``

const FilterButton = styled(Button)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`
