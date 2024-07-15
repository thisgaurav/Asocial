import React from 'react'
import { AutoRoll, Creative, Customs, Footer, Hero, Navbar, TryForIt } from '../components'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Creative />
      <TryForIt />
      <AutoRoll />
      <Customs />
      <Footer />
    </div>
  )
}
