import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../styles/LinkBox.module.scss'

const item = {
	hidden: { y: 50, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
}
function LinkBox() {
	return (
		<>
			<motion.div
				variants={item}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className={styles.link}
			>
				<Link href='/puslapis'>
					<a>Link</a>
				</Link>
			</motion.div>
		</>
	)
}

export default LinkBox
