import React from 'react'
import Link from 'next/link'
import styles from '../styles/LinkBox.module.scss'

function LinkBox() {
	return (
		<>
			<Link href='/puslapis'>
				<a className={styles.link}>Link</a>
			</Link>
		</>
	)
}

export default LinkBox
