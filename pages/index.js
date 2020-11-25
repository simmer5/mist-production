import Head from 'next/head'
import { motion } from 'framer-motion'
import LinkBox from '../components/LinkBox'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99]
const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0,
		transition: { duration: 0.6, ease: easing },
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1.6,
			ease: easing,
		},
	},
}
const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
}

export default function Home() {
	return (
		<>
			<motion.div
				animate={{
					// 	//x: 0,
					backgroundColor: '#000',
					// 	boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
					// 	//position: 'fixed',
					// 	// transitionEnd: {
					// 	// 	display: 'none',
					//	 },
				}}
				transition={{ duration: 2 }}
				className={styles.container}
			>
				<Head>
					<title>MiSt Pro</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<main className={styles.main}>
					<motion.h1
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						transition={{ duration: 5 }}
						className='title'
						className={styles.title}
					>
						{' '}
						Welcome <br /> MiSt Production
					</motion.h1>
					<motion.div
						style={{ display: 'flex', flexDirection: 'row' }}
						variants={stagger}
					>
						<Link href='/puslapis'>
							<motion.div
								variants={fadeInUp}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<div>
									<h4 style={{ color: 'red' }}>vardas</h4>
									<span style={{ color: 'red' }}>kaina</span>
								</div>
							</motion.div>
						</Link>
						<Link href='/puslapis'>
							<motion.div
								variants={fadeInUp}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<div>
									<h4 style={{ color: 'red' }}>vardas</h4>
									<span style={{ color: 'red' }}>kaina</span>
								</div>
							</motion.div>
						</Link>
						<Link href='/puslapis'>
							<motion.div
								variants={fadeInUp}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<div>
									<h4 style={{ color: 'red' }}>vardas</h4>
									<span style={{ color: 'red' }}>kaina</span>
								</div>
							</motion.div>
						</Link>
					</motion.div>
				</main>
			</motion.div>
		</>
	)
}
