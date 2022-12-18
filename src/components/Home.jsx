import helmet from '../images/helmet.png'
import '.././App.css'

function Home() {
	return (
		<div className='section-one'>
			<div className='left-view'>
				<img className='helmet' src={helmet} alt='' />
			</div>

			<div className='right-view'>
				<h1>Ride Safe</h1>
				<p>
					t is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of using
					Lorem Ipsum is that it has a more-or-less normal distribution of letters,
					as opposed to using 'Content here, content here', making it look like
					readable English. Many de
				</p>
			</div>
		</div>
	)
}
export default Home
