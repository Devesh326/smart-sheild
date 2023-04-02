import './App.css'
import Features from './components/Features'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className='container'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/features' element={<Features />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
