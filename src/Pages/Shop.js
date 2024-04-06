import React from 'react'
import Hero from '../Component/Hero/Hero.js'
import Popular from '../Component/Popular/Popular.js'
import Offers from '../Component/Offers/Offers.js'
import NewCollections from '../Component/NewCollections/NewCollections.js'
import Newsletter from '../Component/Newsletter/Newsletter.js'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
    </div>
  )
}

export default Shop