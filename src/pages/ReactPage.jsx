import { useState } from 'react'
import Navbar from '../components/Navbar'
import ReactArticles from '../components/ReactArticles'
import reactArticlesData from '../data/reactArticlesData'

function ReactPage() {
  const [articlesData] = useState(reactArticlesData)
  return (
    <>
      <Navbar />
      <ReactArticles reactArticles={articlesData} />
    </>
  )
}

export default ReactPage
