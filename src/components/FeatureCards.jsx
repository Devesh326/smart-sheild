function FeatureCards({ title, content, image }) {
	return (
		<div className='card'>
			{/* <img className='image' src={image} alt='' /> */}
			<div className='container contain'>
				<p className='card-title contain'> {title} </p>
				<p className='card-content contain'> {content} </p>
			</div>
		</div>
	)
}
export default FeatureCards
