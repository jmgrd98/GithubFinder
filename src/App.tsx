import { Outlet } from 'react-router-dom'
import './App.css'
import {AiFillGithub} from 'react-icons/ai'

function App() {

  return (
    <div className="App">
     
     <div className="logo">
      <AiFillGithub size={50}/>
      <h1>GitHubFinder</h1>
      </div>

      <Outlet />

    </div>

    
  )
}

export default App
