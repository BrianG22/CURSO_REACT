import styles from '../css/VideoList.module.css';

const VideoList = ({ title, children }) => (
	<div className={`${styles.wrapperList} ${styles.margin}`}>
		<h2>{title}</h2>
		{children || <p>No hay videos disponibles</p>}
	</div>
);

export default VideoList;
