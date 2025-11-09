const VideoList = ({ title, children }) => (
	<div>
		<h2>{title}</h2>
		{children || <p>No hay videos disponibles</p>}
	</div>
);

export default VideoList;
