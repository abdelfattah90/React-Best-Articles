import { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ImportantArticles from '../components/ImportantArticles'
import importantArticlesData from '../data/importantArticlesData'

function Home() {
  const [articlesData] = useState(importantArticlesData)

  return (
    <>
      <Navbar />
      <Header />

      <h1 className='text-3xl font-bold text-center p-5 mt-20 '>
        Important Articles
      </h1>

      <ImportantArticles importantArticles={articlesData} />
    </>
  )
}

export default Home
