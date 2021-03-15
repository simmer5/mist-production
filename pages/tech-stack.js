import React from 'react'
import Price from '../components/price/Price'
import LogoLink from '../components/logoLink/LogoLink'
import styles from '../styles/TechStack.module.scss'
import Cube from '../components/cube/Cube'
import MenuIcon from '../components/menuIcon/MenuIcon'
import Card from '../components/card/Card'
import NextLogo from '../components/logos/NextLogo'
import ReactLogo from '../components/logos/ReactLogo'
import GatsbyLogo from '../components/logos/GatsbyLogo'
import JsLogo from '../components/logos/JsLogo'
import SassLogo from '../components/logos/SassLogo'
import VercelLogo from '../components/logos/VercelLogo'

const TechStack = () => {
	return (
		<div className={styles.container}>
			<nav>
				<LogoLink />
				<MenuIcon />
			</nav>
			<h1>Only modern tech stack</h1>
			<figure>
				<NextLogo />
				<ReactLogo />
				<GatsbyLogo />
				<JsLogo />
				<SassLogo />
				<VercelLogo />
			</figure>
			<h1>Coming soon</h1>
			headless cms Wordpress, Strapi, Contentfull, Sanity
		</div>
	)
}
export default TechStack
