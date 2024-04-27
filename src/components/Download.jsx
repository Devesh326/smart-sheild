import video from '../video/Strike_Ride.mkv'

function Download() {
	return (
		<>
			<div class='embed-responsive embed-responsive-16by9'>
				<iframe class='embed-responsive-item' src={video} allowfullscreen></iframe>
			</div>
		</>
	)
}
export default Download
