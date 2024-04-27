import { useState } from 'react'
import FeatureCards from './FeatureCards'
import cash from '../images/cash.jpeg'
import video from '../video/Strike_Ride.mkv'
import { Link } from 'react-router-dom'
import Download from './Download'
import { useNavigate } from 'react-router-dom'

function Features() {
	const [cards, setCards] = useState([
		{
			id: 1,
			image: cash,
			title: 'BUDGET FRIENDLY',
			content:
				' Remember to always prioritize safety when engaging in outdoor activities, and invest in a helmet that meets your budget and safety requirements. Thats why our smart helmet is cost effective and budget friendly ',
		},

		{
			id: 2,
			image: '',
			title: 'CONNECTED EMERGENCY SERVICES',
			content:
				' Its important to note that while these emergency features are useful, they should not replace proper safety precautions like wearing protective gear and following traffic laws. We have fully connected emergency systems into the helmet hat can potentially save lives in case of an accident.',
		},

		{
			id: 3,
			image: '',
			title: 'BREAK THE CHAIN',
			content:
				' Overall, smart helmets are a valuable safety gear for anyone engaging in outdoor activities, and they can help break the chain of accidents or injuries caused by unsafe practices. ',
		},

		{
			id: 4,
			image: '',
			title: 'BEYOND ITS LIMITS',
			content:
				' Our tech is not only restricted to just 2 wheelers, whether it being bikes, scooters, 3 wheelers, it can be used with cars and trucks. Since the tech is irrespective of the shape its given. ',
		},
	])

	// const handleDownloadClick = () => <Download />

	return (
		<div className='features'>
			<div className='feature'>FEATURES</div>
			<p className='intro container'>
				The need for a robust, cost effective and easy to implement system became
				clear to us. Considering all these factors, the fundamental intention behind
				the creation of this project was to urge people to ride with the right gear
				and follow the guidelines even at public places.
			</p>
			{cards.map((card) => (
				<FeatureCards
					key={card.id}
					content={card.content}
					image={card.image}
					title={card.title}
				/>
			))}

			{/* <Link>
				<div class='embed-responsive embed-responsive-16by9'>
					<iframe class='embed-responsive-item' src={video} allowfullscreen></iframe>
				</div>
			</Link> */}
			<Link to='/download'>Download</Link>

			{/* <button onClick={handleDownloadClick}>Download</button> */}
		</div>
	)
}
export default Features
