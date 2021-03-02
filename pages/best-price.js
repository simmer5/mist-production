import React from 'react'
import Price from '../components/price/Price'
import LogoLink from '../components/logoLink/LogoLink'
import styles from '../styles/BestPrice.module.scss'
import Cube from '../components/cube/Cube'
import MenuIcon from '../components/menuIcon/MenuIcon'

const BestPrice = () => {
	return (
		<div className={styles.container}>
			{/* <div className={styles.logoContainer}> */}
			<nav>
				<LogoLink />
				<MenuIcon />
			</nav>

			{/* </div> */}
			<div className={styles.frontWrapper}>
				<h1>
					Best price <br /> one price
				</h1>
				<div>
					<Price price={5555} />
				</div>
				<span style={{ fontWeight: 600, color: 'red', opacity: 0.4 }}>
					ex. MVA
				</span>
			</div>
			<div className={styles.wrapper}>
				<h1>What's included</h1>
				<div>Wireframing, Design, Developing</div>
				<h1>Extras</h1>
				<div>Logo making, Texting</div>
			</div>

			<div className={styles.cubeContainer}>
				<Cube />
			</div>
		</div>
	)
}
export default BestPrice
