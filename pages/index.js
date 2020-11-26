import Head from 'next/head'
import { motion } from 'framer-motion'
import LinkBox from '../components/LinkBox'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

// Our custom easing

const container = {
	hidden: { opacity: 0, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.8,
			staggerChildren: 0.5,
		},
	},
}
export default function Home() {
	return (
		<>
			<motion.div
				animate={{
					backgroundColor: '#000',
				}}
				transition={{ duration: 2 }}
				className={styles.container}
			>
				<Head>
					<title>MiSt Pro</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<main className={styles.main}>
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 50 }}
						transition={{ duration: 0.5 }}
						className={styles.titleContainer}
					>
						{' '}
						<h1 className={styles.title}>
							Welcome <br /> MiSt Production
						</h1>
					</motion.div>
					<motion.div
						variants={container}
						initial='hidden'
						animate='visible'
						className={styles.linkBoxContainer}
					>
						<LinkBox />
					</motion.div>
				</main>
			</motion.div>
		</>
	)
}
