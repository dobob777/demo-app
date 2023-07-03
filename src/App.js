import React from 'react'
import Navbar from './Compo/Navbar'

const App = () => {
  const navMenu = {
    ob1: 'Home',
    ob2: 'Features',
    ob3: 'Pricing',
    ob4: 'FAQs',
    ob5: 'About',
  }
  return (
    <>
      <Navbar navMenu={ navMenu } />
    </>
  )
}

export default App