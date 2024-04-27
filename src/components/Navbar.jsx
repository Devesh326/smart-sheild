import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Download from './Download'
import { useState } from 'react'

function Navbar() {
	const { loginText, logout, setLoginText } = useAuth()
	const [login, setLogin] = useState('Login')
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light'>
				<div className='logo'>
					{/* <img src={logo} alt="" /> */}
					<Link
						to='/'
						style={{
							textDecoration: 'none',
							padding: '5px 10px',
							letterSpacing: '4px',
							color: 'white',
						}}
					>
						VIGILANCE HELMET
					</Link>
				</div>
				<div>
					<ul className='nav-links'>
						<li style={{ width: '200px', paddingTop: '15px' }}>
							<Link
								to='/download'
								style={{ textDecoration: 'none', padding: '6px 15px', color: 'white' }}
							>
								DOWNLOAD
							</Link>
						</li>
						<li style={{ paddingTop: '15px' }}>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : 'inactive')}
								to='/features'
								style={{ textDecoration: 'none', padding: '6px 15px' }}
							>
								FEATURES
							</NavLink>
						</li>
						<li style={{ width: '200px', paddingTop: '15px' }}>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : 'inactive')}
								to='/login'
								style={{ textDecoration: 'none', padding: '6px 15px', width: '100px' }}
								onClick={() => {
									loginText === 'LOG OUT' && logout()
								}}
							>
								{loginText}
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}
export default Navbar
