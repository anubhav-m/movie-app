import './css/App.css'
import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx'
import NavBar from './components/NavBar.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div>  
            <NavBar/>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/favorites" element={<Favorites/>}></Route>
                </Routes>
            </main>
        </div>
    )
}

export default App
