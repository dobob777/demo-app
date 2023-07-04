import React, { useState } from 'react'
import Add from './Compo/Add'
import List from './Compo/List'

const App = () => {
  const [allData, setAllData] = useState([]);
  return (
    <>
      <Add />
      <List />
    </>
  )
}

export default App