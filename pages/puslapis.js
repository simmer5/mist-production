import React from 'react'
import styles from '../styles/Puslapis.module.scss'

const puslapis = () => {
	return (
		<div className={styles.container}>
			<div className={styles.row1}>
				<div className={styles.column1} style={{ backgroundColor: '#brrbb' }}>
					<div style={{ backgroundColor: 'green', height: '50%' }}>1</div>
					<div style={{ backgroundColor: 'blue', height: '50%' }}>2</div>
				</div>
				<div className={styles.column2} style={{ backgroundColor: '#bbb' }}>
					Column2
				</div>
			</div>
			<div className={styles.row2}>
				<div
					className={styles.column1}
					style={{ backgroundColor: 'greenyellow' }}
				>
					Column
				</div>
				<div
					className={styles.column2}
					style={{ backgroundColor: 'mediumslateblue' }}
				>
					Column
				</div>
			</div>
			<div className={styles.row3}>
				<div className={styles.column1} style={{ backgroundColor: 'red' }}>
					<div>r1</div>
					<div>
						<div>k1</div>
						<div>k2</div>
					</div>
				</div>
				<div className={styles.column2} style={{ backgroundColor: 'yellow' }}>
					Column
				</div>
			</div>
			<div
				style={{
					height: '10vh',
					display: 'flex',

					backgroundColor: 'cornflowerblue',
				}}
			></div>
		</div>
	)
}

export default puslapis
