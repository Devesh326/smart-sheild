import { NavLink, Link } from 'react-router-dom'

function Navbar() {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
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
						SMARTSHEILD
					</Link>
				</div>
				<div>
					<ul className='nav-links'>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : 'inactive')}
								to='/about'
								style={{ textDecoration: 'none', padding: '6px 15px' }}
							>
								PRODUCT
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : 'inactive')}
								to='/features'
								style={{ textDecoration: 'none', padding: '6px 15px' }}
							>
								FEATURES
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : 'inactive')}
								to='/about'
								style={{ textDecoration: 'none', padding: '6px 15px' }}
							>
								BUTTON
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}
export default Navbar
