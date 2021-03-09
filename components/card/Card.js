import React from 'react'
import styles from './Card.module.scss'

const Card = ({ title, description = 'no', color }) => {
	return (
		<div className={color === 'white' ? styles.cardWhite : styles.cardBlack}>
			<h3 className={styles.title}>{title}</h3>
			<p
				className={styles.description}
				style={{ display: description === 'no' && 'none' }}
			>
				{description}
			</p>
		</div>
	)
}

export default Card
