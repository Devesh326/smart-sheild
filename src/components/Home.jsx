import helmet from '../images/helmet.png'
import '.././App.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Home() {
	const { loginText } = useAuth()
	return (
		<div className='section-one'>
			<div className='left-view'>
				<img className='helmet' src={helmet} alt='' />
			</div>

			<div className='right-view'>
				<h1>Ride Safe with</h1>
				<h2>Enhanced Hemlet</h2>
				<p>
					Helmets are a crucial part of a person’s travel to their destination, so a
					helmet doesn't need to be boring and basic. Helmets can be used as a tool
					for a person to be more focused on the road
				</p>

				<div className='login-btn'>
					<Link
						to='/login'
						style={{
							textDecoration: 'none',
							color: '#6ccbcb',
						}}
					>
						{loginText}
					</Link>
				</div>
			</div>
		</div>
	)
}
export default Home
