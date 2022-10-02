import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Check = () => {
  const [products, setproducts] = useState([])
  const [error, setError] = useState(null)
  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    axios(
      'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json'
    )
      .then(response => {
        setproducts(response.data)
        setFilterData(response.data)
        setError(null)
      })
      .catch(setError)
  }, [])

  const filterMyData = val => {
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
    } else {
      setFilterData(products)
    }
  }

  if (error) return <p>An error occurred</p>
  return (
    <div style={{ padding: '0% 5%' }}>
      <div>
        <input
          type='checkbox'
          id='customcheckbox1'
          value='men'
          name='customcheckbox1'
          onChange={() => filterMyData('men')}
        />
        <label htmlFor='customcheckbox1'>Men</label>
        <input
          type='checkbox'
          id='customcheckbox2'
          value='women'
          name='customcheckbox2'
          onChange={() => filterMyData('women')}
        />
        <label htmlFor='customcheckbox2'>Women</label>
        <input
          type='checkbox'
          id='customcheckbox3'
          value='all'
          name='customcheckbox3'
          onChange={e => filterMyData(e)}
        />
        <label htmlFor='customcheckbox3'>All</label>
      </div>
      <div
        style={{
          padding: '2%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h1> Total : {filterData?.length}</h1>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          columnGap: '40px',
          rowGap: '40px'
        }}
      >
        {filterData?.map(person => {
          return (
            <div key={person.id}>
              <ProductCard product={person} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Check
