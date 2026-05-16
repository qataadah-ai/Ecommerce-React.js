import React from 'react'
import Hero from '../components/sections/Hero'
import Categories from '../components/sections/Category'
import BestSellers from '../components/sections/BestSellers'
import WhyChooseUs from '../components/sections/WhyChooseUs'

export default function Home() {
  return (
    <main>
      <Hero/>
      < Categories/>
      < BestSellers/>
      < WhyChooseUs/>
    </main>
  )
}
