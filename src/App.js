import React, { useState } from 'react'
import Add from './Compo/Add'
import List from './Compo/List'

const App = () => {
  const [allData, setAllData] = useState([]);


  const submitData = (event) => {
    event.preventDefault()


    const obj = {
      name: event.target.name.value,
      email: event.target.email.value
    }
    setAllData([...allData, obj])
    console.log('obj::: ', obj);

  }
  return (
    <>
      <Add submitData={ submitData } />
      <List allData={ allData } />
    </>
  )
}

export default App