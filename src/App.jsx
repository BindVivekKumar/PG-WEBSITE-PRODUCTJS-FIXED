import React from 'react'
import Hero from './components/Hero'
import Facilities from './components/Facilities'
import Rooms from './components/Rooms'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import EnquiryForm from './components/EnquiryForm'
import Contact from './components/Contact'

export default function App() {
  return (
    <div>
      

      <main>
        <Hero />
        <Facilities />
        <Rooms />
        <Menu />
        <Gallery />
        <EnquiryForm ownerEmail="owner@example.com" />
        <Contact />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Ira Living — All rights reserved.</p>
      </footer>
    </div>
  )
}