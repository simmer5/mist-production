import React from 'react'
import Price from '../components/price/Price'
import LogoLink from '../components/logoLink/LogoLink'
import styles from '../styles/BestPrice.module.scss'
import Cube from '../components/cube/Cube'
import MenuIcon from '../components/menuIcon/MenuIcon'
import Card from '../components/card/Card'

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
				<header>
					<h1>
						Best price <br /> one price
					</h1>
				</header>

				<div>
					<Price price={5555} />
				</div>
				<span style={{ fontWeight: 600, color: 'red', opacity: 0.4 }}>
					ex. MVA
				</span>
			</div>
			<div className={styles.wrapper}>
				<header>
					<h1>What's included</h1>
				</header>

				<Card
					title='Wireframing'
					description='A visual guide that represents the skeletal framework of a website.
						Wireframes are created for the purpose of arranging elements to best
						accomplish a particular purpose.'
				/>
				<Card
					title='Design'
					description='This role is mainly related to the styling and layout of pages with content, including text and images.'
				/>
				<Card
					title='Development'
					description='A visual guide that represents the skeletal framework of a website.
						Wireframes are created for the purpose of arranging elements to best
						accomplish a particular purpose.'
				/>
				<header>
					<h1>Extras</h1>
					<p>What is not included</p>
				</header>
				<Card color='white' title='Logo making' />
				<Card color='white' title='Taxting' />
				<Card color='white' title='Hosting' />
			</div>

			<div className={styles.cubeContainer}>
				<Cube />
			</div>
		</div>
	)
}
export default BestPrice
