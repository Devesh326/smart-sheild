import { AuthProvider } from './context/AuthContext'
import './App.css'
import Dashboard from './components/Dashboard'
import Features from './components/Features'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Download from './components/Download'

function App() {
	return (
		<Router>
			<AuthProvider>
				<div className='container'>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/features' element={<Features />} />
						<Route path='/login' element={<SignUp />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/download' element={<Download />} />
					</Routes>
				</div>
			</AuthProvider>
		</Router>
	)
}

export default App
