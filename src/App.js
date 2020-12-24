import React from 'react'
import Footer from './page/footer'
import MenuMakanan from './page/MenuMakanan'
import Header from './page/header'
import MenuKontak from './page/MenuKontak'
import MenuTentangKami from './page/MenuTentangKami'

export default function App() {
  return (
    <div>
      <Header />
      <MenuMakanan />
      <MenuTentangKami />
      <MenuKontak />
      <Footer />
    </div>
  )
}
