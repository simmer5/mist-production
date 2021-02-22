import React from 'react'

import Head from 'next/head'
import { motion } from 'framer-motion'
import styles from '../styles/Services.module.scss'

const containerVariants = {
	hidden: {
		opacity: 0,
		x: '100vw',
		transition: {
			staggerChildren: 0.5,
		},
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			mass: 0.4,
			damping: 8,
			staggerChildren: 0.4,
			when: 'beforeChildren',
		},
	},
}

const Services = () => {
	return (
		<>
			<Head>
				<title>MiSt | Services </title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate='visible'
					className={styles.container}
				>
					<h1 className={styles.title}>Services</h1>
				</motion.div>
			</main>
		</>
	)
}

export default Services
