import { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import NewestArticles from '../components/NewestArticles'
import newestArticlesData from '../data/newestArticlesData'

function Home() {
  const [articlesData] = useState(newestArticlesData)

  return (
    <>
      <Navbar />
      <Header />

      <h1 className='text-3xl font-bold text-center p-5 mt-20 '>
        Newest Articles
      </h1>

      <NewestArticles newestArticles={articlesData} />
    </>
  )
}

export default Home
