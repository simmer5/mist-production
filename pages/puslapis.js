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
			{/* ----- ROW 3 -------- */}
			<div className={styles.row3}>
				<div className={styles.column1}>
					<div className={styles.row1}>r1</div>
					<div className={styles.row2}>
						<div className={styles.col1}>k1</div>
						<div className={styles.col2}>k2</div>
					</div>
				</div>
				<div className={styles.column2} style={{ backgroundColor: 'yellow' }}>
					Col 2
				</div>
			</div>
			<div
				className={styles.row4}
				// style={{
				// 	height: '10vh',
				// 	backgroundColor: 'cornflowerblue',
				// }}
			>
				Footer
			</div>
		</div>
	)
}

export default puslapis
