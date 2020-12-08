import React from 'react'

import Head from 'next/head'
import { motion } from 'framer-motion'
import styles from '../styles/Services.module.scss'

const Services = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>MiSt | Services </title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<div className={styles.container}>
					<h1 className={styles.title}>Services</h1>
				</div>
			</main>
		</div>
	)
}

export default Services
