import React from 'react'
import styles from './Cube.module.scss'

const Cube = () => {
	return (
		<div className={styles.cubespinner}>
			<div className={styles.face1}>5</div>
			<div className={styles.face2}>5</div>
			<div className={styles.face3}>5</div>
			<div className={styles.face4}>5</div>
			<div className={styles.face5}>5</div>
			<div className={styles.face6}>5</div>
		</div>
	)
}

export default Cube
