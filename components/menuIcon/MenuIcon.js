import React, { useState } from 'react'
import styles from './MenuIcon.module.scss'

const MenuIcon = () => {
	const [x, setX] = useState(false)
	return (
		<div className={styles.container} onClick={x => console.log()}>
			<div className={styles.bar1}></div>
			<div className={styles.bar2}></div>
			<div className={styles.bar3}></div>
		</div>
	)
}

export default MenuIcon
