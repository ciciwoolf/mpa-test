import React from "react"
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import { Header } from "./components/header"
import { Content } from "./components/content/Content"

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Content/>
      </Router>
    </div>
  )
}

export default App
