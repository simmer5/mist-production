import React from 'react'
import Price from '../components/price/Price'
import LogoLink from '../components/logoLink/LogoLink'
import styles from '../styles/TechStack.module.scss'
import Cube from '../components/cube/Cube'
import MenuIcon from '../components/menuIcon/MenuIcon'
import Card from '../components/card/Card'
import NextLogo from '../components/logos/NextLogo'
import ReactLogo from '../components/logos/ReactLogo'

const TechStack = () => {
	return (
		<div className={styles.container}>
			<nav>
				<LogoLink />
				<MenuIcon />
			</nav>
			<h1>Only modern tech stack</h1>
			next.js react.js gatsby.js vercel
			<NextLogo />
			<ReactLogo />
		</div>
	)
}
export default TechStack
