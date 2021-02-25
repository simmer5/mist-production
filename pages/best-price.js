import React from 'react'
import Price from '../components/price/Price'
import LogoLink from '../components/logoLink/LogoLink'
import styles from '../styles/bestPrice.module.scss'
import Cube from '../components/cube/Cube'

const onePrice = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<LogoLink />
			</div>

			<div>
				<Price />
			</div>

			<div className={styles.cubeContainer}>
				<Cube />
			</div>
		</div>
	)
}
export default onePrice
