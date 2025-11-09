import ReactDOM from 'react-dom';
import './index.css';

const Video = ({ title, duration, uploadDate, description }) => {
	const seconds = duration % 60;
	const minutes = Math.floor(duration / 60);

	return (
		<div>
			<h3>{title}</h3>
			<div>
				<span>
					{minutes}:{seconds}
				</span>
				<span>{uploadDate.toLocaleDateString()}</span>
			</div>
			<p>{description}</p>
		</div>
	);
};

const app = (
	<div>
		<h1>Desarrollo Útil</h1>
		<Video
			title='Componentes'
			duration={2760}
			uploadDate={new Date(2025, 10, 9)}
			description='Componentes en React'
		></Video>
		<Video
			title='useState'
			duration={3145}
			uploadDate={new Date(2025, 10, 10)}
			description='Como utilizar estados en React'
		></Video>
	</div>
);

const container = document.getElementById('root');

ReactDOM.render(app, container);
