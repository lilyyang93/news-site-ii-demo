import { useState } from 'react'
import './App.css'

//components
import AppNav from './components/AppNav' 
import Article from './components/Article'
import ArticleList from './components/ArticleList'

//pages
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ArticlePage from './pages/ArticlePage'

//data
import newsData from './data/news.json'

function App() {
  const [allArticles, setAllArticles] = useState(newsData.map((article, index) => {
    return {
        id: index+1,
        title: article.title,
        created_date: article.created_at,
        url: article.url, 
        author: article.author, 
        object_id: article.objectID
      }
    }))

  function getOneArticle(articleID) {
    return allArticles[articleID]
  }

  return (
    <div className="App">
      <AppNav />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage articles={allArticles}/>}/>
          <Route path="/article/:articleID" element={<ArticlePage getArticle={getOneArticle}/>}/>
        </Routes>
      </Router>
      {/* <ArticleList articles={allArticles} /> */}
      
    </div>
  )
}

export default App
