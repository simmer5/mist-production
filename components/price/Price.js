import React from 'react'
import styles from './Price.module.scss'

const Price = ({ price }) => {
	return <h1 className={styles.price}>{price}</h1>
}

export default Price
