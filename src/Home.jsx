import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Newest from './components/Newest'
import newestData from './data/newestData'

function Home() {
  const [newests] = useState(newestData)

  return (
    <>
      <Navbar />
      <Header />

      <h1 className='text-3xl font-bold text-center p-5 mt-20 '>
        Newest Articles
      </h1>

      <Newest newests={newests} />
    </>
  )
}

export default Home
