import Head from 'next/head'
import { motion } from 'framer-motion'
import LinkBox from '../components/LinkBox'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

const container = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		// transition: {
		// 	delayChildren: 2,
		// 	staggerChildren: 0.5,
		// 	duration: 5,
		// },
	},
}

const item = {
	hidden: { y: 50, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
}
export default function Home() {
	return (
		<>
			<motion.div
				animate={{
					backgroundColor: '#000',
				}}
				transition={{ duration: 0.5 }}
				className={styles.container}
			>
				<Head>
					<title>MiSt Pro</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<main className={styles.main}>
					<motion.div
						variants={container}
						transition={{
							delayChildren: 2,
							staggerChildren: 0.5,
							duration: 4,
						}}
						initial='hidden'
						animate='visible'
						className={styles.titleContainer}
					>
						<motion.h1
							variants={item}
							//transition={{ duration: 1 }}
							className={styles.title}
						>
							MiSt
						</motion.h1>
						<motion.h1
							variants={item}
							className={styles.title}
							className={styles.title}
						>
							production
						</motion.h1>
					</motion.div>
					<motion.div
						variants={container}
						transition={{
							delayChildren: 3,
							staggerChildren: 0.5,
							duration: 2,
						}}
						initial='hidden'
						animate='visible'
						className={styles.linkBoxContainer}
					>
						<LinkBox />
						<LinkBox />
						<LinkBox />
					</motion.div>
				</main>
			</motion.div>
		</>
	)
}
