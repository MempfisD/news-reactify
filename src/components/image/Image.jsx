import styles from './image.module.css'

const Image = ({ image }) => {
	return <div className={styles.wrapper}>{image ? <img className={styles.image} src={image} alt='image' /> : null}</div>
}

export default Image
