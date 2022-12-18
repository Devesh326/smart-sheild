import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
	return (
		<>
			<Navbar />
			<div className='container'>
				<Home />
			</div>
		</>
	)
}

export default App
