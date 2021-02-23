import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'

import Logo from '../components/logo/Logo'
import styles from '../styles/Home.module.scss'

const containerTransition = {
	x: {
		duration: 2,
	},
	backgroundColor: {
		duration: 3,
		yoyo: Infinity,
		ease: 'easeOut',
		repeatDelay: 0.8,
	},
}
const logoContainerTransition = {
	x: {
		duration: 1,
		delay: 0.5,
	},
	backgroundColor: {
		duration: 3,
		ease: 'easeOut',
		delay: 3,
	},
}
const Home = () => {
	return (
		<>
			<Head>
				<title>MiSt Pro</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className={styles.container}>
				<div className={styles.row1}>
					<div className={styles.column1} style={{ backgroundColor: '#brrbb' }}>
						<motion.div
							transition={containerTransition}
							animate={{ x: 0, backgroundColor: ['#ff6699', '#6666ff'] }}
							initial={{ x: -400 }}
							style={{ backgroundColor: 'green', height: '50%' }}
						>
							1.1.
						</motion.div>
						<motion.div
							animate={{ x: 0 }}
							initial={{ x: -400 }}
							transition={{ duration: 2, delay: 0.7 }}
							style={{ backgroundColor: 'blue', height: '50%' }}
						>
							1.2
						</motion.div>
					</div>
					<motion.div
						animate={{ y: 0, backgroundColor: ['#0070F3', '#000000'] }}
						initial={{ y: -400 }}
						transition={logoContainerTransition}
						// transition={{ duration: 1, delay: 0.5 }}
						style={{ backgroundColor: '#0070F3' }}
						className={styles.column2}
					>
						<div className={styles.logoContainer}>
							<div className={styles.logoWrapper}>
								<Logo />
							</div>
						</div>
					</motion.div>
				</div>
				<div className={styles.row2}>
					<motion.div
						animate={{ height: '30vh' }}
						initial={{ height: 0 }}
						transition={{ duration: 1, delay: 4 }}
						style={{ backgroundColor: 'blue', height: '50%' }}
						className={styles.column1}
						style={{ backgroundColor: 'greenyellow' }}
					>
						Column2.1
					</motion.div>
					<motion.div
						animate={{ x: 0 }}
						initial={{ x: '55vw' }}
						transition={{ duration: 1.5, delay: 2.5 }}
						className={styles.column2}
						style={{ backgroundColor: 'mediumslateblue' }}
					>
						Column2.2
					</motion.div>
				</div>
				{/* ----- ROW 3 -------- */}
				<div className={styles.row3}>
					<div className={styles.column1}>
						<motion.div
							animate={{ x: 0 }}
							initial={{ x: '-100vw' }}
							transition={{ duration: 3, delay: 3 }}
							style={{ backgroundColor: 'green', height: '50%' }}
							className={styles.row1}
						>
							r1
						</motion.div>
						<div className={styles.row2}>
							<motion.div
								className={styles.col1}
								animate={{ x: 0 }}
								initial={{ x: '100vw' }}
								transition={{ duration: 1, delay: 7.5 }}
							>
								k1
							</motion.div>
							<motion.div
								animate={{ x: 0 }}
								initial={{ x: '100vw' }}
								transition={{ duration: 1, delay: 6.5 }}
								className={styles.col2}
							>
								k2
							</motion.div>
						</div>
					</div>
					<motion.div
						animate={{ height: '30vh' }}
						initial={{ height: 0 }}
						transition={{ duration: 1, delay: 6 }}
						className={styles.column2}
						style={{ backgroundColor: 'yellow' }}
					>
						Col 2
					</motion.div>
				</div>
				<motion.div
					className={styles.row4}
					animate={{ height: '10vh' }}
					initial={{ height: 0 }}
					transition={{ duration: 2, delay: 5.5 }}
				>
					Footer
				</motion.div>
			</div>
		</>
	)
}

export default Home
